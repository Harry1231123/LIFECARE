// Per-page SEO: React 19 hoists <title> and <meta> to <head> automatically.
export default function Seo({ title, description }) {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </>
  )
}
