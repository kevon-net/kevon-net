import appData from './app';

export const navbar = [
  // {
  //   link: '#',
  //   label: 'Home',
  // },
  {
    link: '#about',
    label: 'About',
  },
  {
    link: '#services',
    label: 'Services',
  },
  {
    link: '#skills',
    label: 'Skills',
  },
  {
    link: '#experience',
    label: 'Experience',
  },
  {
    link: '#portfolio',
    label: 'Portfolio',
  },
  // {
  //   link: '#testimonials',
  //   label: 'Testimonials',
  // },
  {
    link: '#blog',
    label: 'Blog',
  },
  {
    link: '#contact',
    label: 'Contact',
  },
];

export const contact = [
  {
    link: `mailto:${appData.emails.contact}`,
    label: appData.emails.contact,
  },
  {
    link: `tel:${appData.phones.main}`,
    label: appData.phones.main,
  },
  {
    link: appData.locations.main.pin,
    label: appData.locations.main.location,
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
