import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const args = process.argv.slice(2);
const url = args[0] || 'http://localhost:3004';
const label = args[1] ? String(args[1]).replace(/[^\w-]+/g, '-').toLowerCase() : 'mobile';

const outputDir = path.join(process.cwd(), 'temporary screenshots');
await fs.promises.mkdir(outputDir, { recursive: true });

const sources = [
  'puppeteer',
  path.join(process.cwd(), 'node_modules', 'puppeteer'),
  path.join('C:', 'Users', 'nateh', 'AppData', 'Local', 'Temp', 'puppeteer-test', 'node_modules', 'puppeteer'),
];

let puppeteer;
for (const source of sources) {
  try {
    const importPath = source.startsWith('C:') ? pathToFileURL(source).href : source;
    const loaded = await import(importPath);
    puppeteer = loaded.default || loaded;
    break;
  } catch {}
}

const existing = await fs.promises.readdir(outputDir);
const existingIndices = existing
  .map(f => { const m = f.match(/^screenshot-(\d+)/); return m ? Number(m[1]) : null; })
  .filter(v => Number.isFinite(v));
const index = existingIndices.length ? Math.max(...existingIndices) + 1 : 1;
const fileName = `screenshot-${index}-${label}.png`;
const filePath = path.join(outputDir, fileName);

const browser = await puppeteer.launch({
  headless: true,
  executablePath: 'C:\\Users\\olive\\.cache\\puppeteer\\chrome\\win64-148.0.7778.97\\chrome-win64\\chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto(url, { waitUntil: 'networkidle2' });

await page.evaluate(async () => {
  await new Promise(resolve => {
    const distance = 300;
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
await new Promise(r => setTimeout(r, 600));

await page.screenshot({ path: filePath, fullPage: true });
await browser.close();
console.log(`Saved screenshot to ${filePath}`);
