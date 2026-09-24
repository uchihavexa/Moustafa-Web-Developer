/**
 * Portfolio content - edit this file to update name, copy, and contact details.
 * Empty `href` values are shown as placeholders and are not clickable.
 */
export const profile = {
  name: 'Moustafa',
  role: 'Web Developer',
  location: 'Lebanon',
  experienceNote: 'B.Sc. Computer Science - 10 years in web development',
  focus: 'Frontend / Web Development',
  lookingFor: 'Remote web-development opportunities',
  headline: 'I build modern, responsive web experiences and continuously explore the intersection of web development and AI.',
  about: [
    'I have spent about ten years around web development and computer science, building interfaces, solving practical problems, and staying close to how the web actually works. I hold a Bachelor of Science in Computer Science from Lebanese International University.',
    'My focus now is frontend and modern web development: clear structure, thoughtful UI, and code that is straightforward to maintain. I like work where the problem is real and the solution has to hold up in a browser, not just in a mockup.',
    'I am also learning how modern AI, PydanticAI, agents, and structured model outputs, can sit inside practical web applications. Curious, technical, and still adding tools when they earn their place.',
    'Based in Lebanon, looking for remote web-development work: product teams, freelance builds, or anything in between that needs a careful frontend.',
  ],
  learningIntro:
    'Currently exploring how modern AI agents can be integrated into practical web applications.',
  learningTopics: [
    'PydanticAI',
    'AI Agents',
    'LLM Applications',
    'Structured AI Outputs',
  ],
  contactHeading: 'Have a project in mind?',
  contactSubheading: "Let's build something useful.",
  siteUrl: 'https://[YOUR-DOMAIN]',
  social: {
    email: { label: 'uchihavexa@gmail.com', href: 'mailto:uchihavexa@gmail.com' },
    github: { label: 'uchihavexa', href: 'https://github.com/uchihavexa' },
    linkedin: { label: 'moustafa-asaad', href: 'https://www.linkedin.com/in/moustafa-asaad/' },
  },
} as const

export type SocialKey = keyof typeof profile.social
export type SocialLink = (typeof profile.social)[SocialKey]

export function hasHref(href: string): boolean {
  return href.trim().length > 0 && !href.includes('[YOUR')
}
