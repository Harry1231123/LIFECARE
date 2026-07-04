import { HeartPulse, Brain, Clock, Users, Award, Baby, Shield, Leaf, ClipboardCheck } from 'lucide-react'

const ICONS = { HeartPulse, Brain, Clock, Users, Award, Baby, Shield, Leaf, ClipboardCheck }

const courseModules = import.meta.glob('/content/courses/*.json', { eager: true })
const addonModules = import.meta.glob('/content/course-addons/*.json', { eager: true })

const addonsByCourseId = Object.fromEntries(
  Object.entries(addonModules).map(([path, m]) => [path.match(/([^/]+)\.json$/)[1], m.default])
)

export const COURSES = Object.values(courseModules)
  .map(m => m.default)
  .sort((a, b) => a.order - b.order)
  .map(course => ({
    ...course,
    icon: ICONS[course.icon],
    meta: course.meta.map(m => ({ ...m, icon: ICONS[m.icon] })),
    ...(addonsByCourseId[course.id] ? { addon: addonsByCourseId[course.id] } : {}),
  }))
