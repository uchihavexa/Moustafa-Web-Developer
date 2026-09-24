/**
 * Skills - add or remove items here. Categories render automatically.
 * Keep this list limited to technologies you actually use.
 */
export const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'WordPress'],
  Backend: ['Python', 'PHP', 'MySQL', 'APIs', 'Backend Development'],
  AI: ['PydanticAI', 'LLM APIs', 'AI Agents', 'Structured Outputs'],
  'Design & Tools': ['Git', 'GitHub', 'VS Code / Cursor', 'Figma', 'Adobe XD', 'SEO'],
} as const

export type SkillCategory = keyof typeof skills
