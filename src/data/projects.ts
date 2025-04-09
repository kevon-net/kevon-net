import { generateUUID } from '@/utilities/generators/id';

export const categories = [
  {
    // id: generateUUID(),
    id: '1',
    title: 'Design',
  },
  {
    // id: generateUUID(),
    id: '2',
    title: 'Development',
  },
];

export const portfolioProjects = [
  {
    // id: generateUUID(),
    id: '1',
    name: 'DronePilot Academy',
    description:
      'A full-stack training platform for aspiring drone pilots, featuring course content, certification tracking, and user progress analytics.',
    technologies: ['Next.js', 'Supabase', 'Prisma', 'Stripe', 'Resend'],
    date: new Date(),
    repoUrl: 'https://github.com/yourusername/dronepilot-academy',
    liveUrl: 'https://dronepilot.academy',
    cover: 'https://w.wallhaven.cc/full/we/wallhaven-wepq1r.png',
    categoryId: generateUUID(),
  },
  {
    // id: generateUUID(),
    id: '2',
    name: 'FlightLog Pro',
    description:
      'A compliance-focused web app for managing drone flight logs, equipment certifications, and pilot records.',
    technologies: ['Next.js', 'PostgreSQL', 'Mantine', 'Tabler Icons'],
    date: new Date(),
    repoUrl: 'https://github.com/yourusername/flightlog-pro',
    liveUrl: 'https://flightlog.pro',
    cover: 'https://w.wallhaven.cc/full/4l/wallhaven-4lkr8l.jpg',
    categoryId: generateUUID(),
  },
  {
    // id: generateUUID(),
    id: '3',
    name: 'AeroCRM',
    description:
      'CRM tailored for drone training businesses with customer tracking, automated follow-ups, and analytics dashboard.',
    technologies: ['Next.js', 'Supabase', 'Resend', 'React Email'],
    date: new Date(),
    repoUrl: 'https://github.com/yourusername/aerocrm',
    liveUrl: 'https://aerocrm.io',
    cover: 'https://w.wallhaven.cc/full/4l/wallhaven-4lkr8l.jpg',
    categoryId: generateUUID(),
  },
  {
    // id: generateUUID(),
    id: '4',
    name: 'DroneMart',
    description:
      'E-commerce system to sell drones and accessories, with inventory management and Stripe-powered checkout.',
    technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    date: new Date(),
    repoUrl: 'https://github.com/yourusername/dronemart',
    liveUrl: 'https://dronemart.shop',
    cover: 'https://w.wallhaven.cc/full/4o/wallhaven-4oozgl.jpg',
    categoryId: generateUUID(),
  },
  {
    // id: generateUUID(),
    id: '5',
    name: 'Portfolio v3',
    description:
      'My latest personal developer portfolio built using the App Router, featuring dark mode, animations, and dynamic content.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind', 'Framer Motion'],
    date: new Date(),
    repoUrl: 'https://github.com/yourusername/portfolio-v3',
    liveUrl: 'https://yourname.dev',
    cover: 'https://w.wallhaven.cc/full/57/wallhaven-57r8x5.png',
    categoryId: generateUUID(),
  },
];
