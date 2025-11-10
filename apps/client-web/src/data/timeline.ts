import {
  IconBriefcase,
  IconCertificate,
  IconCode,
  IconCodeDots,
  IconSchool,
} from '@tabler/icons-react';

export const timeline = {
  education: [
    {
      icon: IconCertificate,
      title: 'Certificate',
      where: 'Consolata School',
      when: 'Jan, 2015 - Nov, 2018',
      accomplishments: [
        'Completed with strong foundation in mathematics, sciences, and computer studies.',
        'Participated in coding clubs and tech competitions, sparking early interest in software development.',
      ],
    },
    {
      icon: IconSchool,
      title: 'BSc. Computer Science',
      where: 'Chuka University',
      when: 'Sep, 2019 - Sep, 2023',
      accomplishments: [
        'Gained a solid foundation in software engineering, data structures, algorithms, and system design.',
        'Built and presented several group and individual projects, including a final-year project on an online auction system.',
        'Regularly collaborated with peers on open-source projects and hackathons.',
        'Served as a tech club member and contributed to organizing developer meetups and coding workshops.',
      ],
    },
    {
      icon: IconCode,
      title: 'Front-End Development',
      where: 'Self-Taught (Online)',
      when: 'Jan, 2023 - Current',
      accomplishments: [
        'Built and deployed multiple responsive web applications using Next.js, TypeScript, and Mantine.',
        'Mastered CSS modules, design systems, and component-driven architecture for scalable UI.',
        'Contributed to open-source projects and replicated real-world designs for portfolio work.',
        'Gained proficiency with Chrome DevTools, Figma to code conversions, and performance optimization techniques.',
      ],
    },
    {
      icon: IconCodeDots,
      title: 'Back-End Development',
      where: 'Self-Taught (Online)',
      when: 'Apr, 2024 - Current',
      accomplishments: [
        'Developed APIs and integrated PostgreSQL databases using Prisma ORM and Supabase.',
        'Built secure authentication systems with Supabase Auth and implemented RBAC-based access control.',
        'Integrated Stripe for payment systems and Resend for transactional email flows.',
        'Deployed full-stack projects using Vercel and automated CI/CD flows with GitHub Actions.',
      ],
    },
  ],
  work: [
    {
      icon: IconBriefcase,
      title: 'IT Intern',
      where: 'PanAfrica Media',
      when: 'Jan, 2024 - April, 2024',
      accomplishments: [
        'Assisted in updating and maintaining the company’s internal systems and website.',
        'Created internal tools to streamline content management and user feedback collection.',
        'Provided technical support and resolved software/hardware issues for the team.',
        'Documented technical processes and collaborated with the IT lead on daily operations.',
      ],
    },
    {
      icon: IconCode,
      title: 'Web Developer',
      where: 'Drone Space',
      when: 'Jul, 2024 - Current',
      accomplishments: [
        'Spearheaded the redesign of the company’s training platform using Next.js App Router and PostgreSQL.',
        'Built proprietary modules for student certification tracking, inventory, and CRM integration.',
        'Optimized application performance, improving page load time by over 40%.',
        'Collaborated cross-functionally to ensure regulatory compliance and smooth UX for drone trainees.',
      ],
    },
    {
      icon: IconBriefcase,
      title: 'Freelance Developer',
      where: 'Fiverr, Upwork',
      when: 'Oct, 2024 - Current',
      accomplishments: [
        'Delivered custom web applications and landing pages for clients in diverse industries.',
        'Achieved 5-star ratings by maintaining high code quality, clear communication, and meeting deadlines.',
        'Specialized in converting Figma designs to pixel-perfect responsive web pages.',
        'Offered consulting on web architecture, SEO basics, and performance optimization.',
      ],
    },
  ],
};
