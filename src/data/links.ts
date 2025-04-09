import appData from './app';

export const navbar = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/services',
    label: 'Services',
  },
  {
    link: '/projects',
    label: 'Projects',
  },
  {
    link: '/about',
    label: 'About',
  },
  // {
  //   link: '/blog',
  //   label: 'Blog',
  // },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export const contact = [
  {
    link: `mailto:${appData.emails.info}`,
    label: appData.emails.info,
  },
  {
    link: `tel:${appData.phones.main}`,
    label: appData.phones.main,
  },
];

export const social = [
  {
    link: appData.socials.github.link,
    label: appData.socials.github.platform,
  },
  {
    link: appData.socials.linkedin.link,
    label: appData.socials.linkedin.platform,
  },
];
