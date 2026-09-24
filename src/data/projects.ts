/**
 * Featured projects - replace images and links as needed.
 * Leave `liveUrl` / `githubUrl` empty until you have real links.
 */
export type Project = {
  id: string
  name: string
  description: string
  technologies: string[]
  image: string
  imageAlt: string
  liveUrl: string
  githubUrl: string
  isPlaceholder: boolean
}

export const projects: Project[] = [
  {
    id: 'cartify',
    name: 'Cartify',
    description:
      'A responsive e-commerce shopping cart application with product browsing, add-to-cart functionality, quantity management, and a clean checkout flow. Built with vanilla HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/cartify.webp',
    imageAlt: 'Cartify e-commerce shopping cart interface showing product grid and cart sidebar',
    liveUrl: '',
    githubUrl: 'https://github.com/uchihavexa/Cartify',
    isPlaceholder: false,
  },
  {
    id: 'fakestore',
    name: 'FakeStore',
    description:
      'A full-featured e-commerce storefront built entirely on the frontend. Product listing, filtering, cart management, and order summary without any backend dependency, powered by the FakeStore API.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    image: '/projects/fakestore.webp',
    imageAlt: 'FakeStore e-commerce application showing product catalog with filtering and cart',
    liveUrl: '',
    githubUrl: 'https://github.com/uchihavexa/FakeStore-Full-Functionality-Javascript',
    isPlaceholder: false,
  },
  {
    id: 'permalist',
    name: 'Permalist',
    description:
      'A persistent to-do list application with full CRUD operations. Server-rendered with EJS, backed by PostgreSQL for data persistence, and styled for a clean task management experience.',
    technologies: ['JavaScript', 'EJS', 'Node.js', 'PostgreSQL'],
    image: '/projects/permalist.webp',
    imageAlt: 'Permalist to-do list application showing task items with edit and delete controls',
    liveUrl: '',
    githubUrl: 'https://github.com/uchihavexa/Permalist',
    isPlaceholder: false,
  },
  {
    id: 'ecommerce-final',
    name: 'E-Commerce Platform',
    description:
      'A comprehensive e-commerce final project featuring product pages, shopping cart, user interface components, and responsive design. Built as a capstone project showcasing full frontend development skills.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: '/projects/ecommerce.webp',
    imageAlt: 'E-commerce platform showing product detail page with add to cart and related items',
    liveUrl: '',
    githubUrl: 'https://github.com/uchihavexa/Eccomerce-Final-Project',
    isPlaceholder: false,
  },
]
