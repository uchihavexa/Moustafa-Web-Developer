/**
 * Work history - replace or edit entries as needed.
 */
export type ExperienceItem = {
  id: string
  company: string
  role: string
  dates: string
  description: string
  isPlaceholder: boolean
}

export const experience: ExperienceItem[] = [
  {
    id: 'role-1',
    company: 'Amir Discoveries',
    role: 'AI Automation Assistant',
    dates: 'May 2025 - August 2025',
    description:
      'Focused on integrating AI technologies to enhance operational efficiency. Contributed to automation projects by optimizing workflows and improving system responsiveness.',
    isPlaceholder: false,
  },
  {
    id: 'role-2',
    company: 'OMT S.A.L.',
    role: 'Money Transfer Subagent',
    dates: 'August 2021 - February 2023',
    description:
      'Recording transactions, preparing financial statements, and performing financial analysis. Managed money transfer operations in Lebanon.',
    isPlaceholder: false,
  },
  {
    id: 'role-3',
    company: 'Event us Inc.',
    role: 'Backend Web Developer',
    dates: '2019 - 2020',
    description:
      'Performed and directed website updates. Handled backend development tasks for the company\'s web platform in Saida, Southern Lebanon.',
    isPlaceholder: false,
  },
  {
    id: 'role-4',
    company: 'Jigsaw',
    role: 'Public Speaker / Translator (Arabic to English)',
    dates: 'May 2019 - August 2021',
    description:
      'Community involvement focused on helping those in need. Handled Arabic to English translation and contributed to streamlining organizational workflows.',
    isPlaceholder: false,
  },
]
