const modules = import.meta.glob('/content/blog/*.json', { eager: true })

export const POSTS = Object.values(modules)
  .map(m => m.default)
  .sort((a, b) => a.order - b.order)
