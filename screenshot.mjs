import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

const url = args[0];
const label = args[1]
  ? String(args[1]).replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase()
  : '';
const outputDir = path.join(process.cwd(), 'temporary screenshots');
await fs.promises.mkdir(outputDir, { recursive: true });

async function loadPuppeteer() {
  const sources = [
    'puppeteer',
    path.join(process.cwd(), 'node_modules', 'puppeteer'),
    path.join('C:', 'Users', 'nateh', 'AppData', 'Local', 'Temp', 'puppeteer-test', 'node_modules', 'puppeteer'),
  ];

  for (const source of sources) {
    try {
      const importPath = source.startsWith('C:') ? pathToFileURL(source).href : source;
      const loaded = await import(importPath);
      return loaded.default || loaded;
    } catch (error) {
      // continue to next candidate
    }
  }

  console.error('Unable to load Puppeteer.');
  console.error('Install it locally with: npm install puppeteer');
  console.error('Or make sure the path C:/Users/nateh/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer exists.');
  process.exit(1);
}

const puppeteer = await loadPuppeteer();
const existing = await fs.promises.readdir(outputDir);
const existingIndices = existing
  .map((file) => {
    const match = file.match(/^screenshot-(\d+)(?:-[\w-]+)?\.png$/);
    return match ? Number(match[1]) : null;
  })
  .filter((value) => Number.isFinite(value));
const index = existingIndices.length ? Math.max(...existingIndices) + 1 : 1;
const fileName = `screenshot-${index}${label ? `-${label}` : ''}.png`;
const filePath = path.join(outputDir, fileName);

const browser = await puppeteer.launch({
  headless: true,
  executablePath: 'C:\\Users\\olive\\.cache\\puppeteer\\chrome\\win64-148.0.7778.97\\chrome-win64\\chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 1000 });
await page.goto(url, { waitUntil: 'networkidle2' });

// Scroll through the page to trigger IntersectionObserver scroll-reveal animations,
// then return to top before capturing.
await page.evaluate(async () => {
  await new Promise(resolve => {
    const distance = 400;
    const timer = setInterval(() => {
      window.scrollBy(0, distance);
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        clearInterval(timer);
        window.scrollTo(0, 0);
        resolve();
      }
    }, 40);
  });
});
await new Promise(r => setTimeout(r, 600)); // Let reveal transitions complete

await page.screenshot({ path: filePath, fullPage: true });
await browser.close();

console.log(`Saved screenshot to ${filePath}`);
