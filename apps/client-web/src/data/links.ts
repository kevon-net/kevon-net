/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { cleanPaths } from '@repo/utilities/array';
import { Link, NavLink } from '@repo/types/link';
import { EMAILS, PHONES, SOCIALS, LOCATIONS } from '@repo/constants/app';

export const links: NavLink[] = [
  // {
  //   link: '/#',
  //   label: 'Home',
  // },
  {
    link: '/#about',
    label: 'About',
  },
  {
    link: '/#services',
    label: 'Services',
  },
  {
    link: '/#skills',
    label: 'Skills',
  },
  {
    link: '/#experience',
    label: 'Experience',
  },
  // {
  //   link: '/#portfolio',
  //   label: 'Portfolio',
  // },
  // {
  //   link: '/#testimonials',
  //   label: 'Testimonials',
  // },
  {
    link: '/#blog',
    label: 'Blog',
  },
  {
    link: '/#contact',
    label: 'Contact',
  },
];

export const contact: Link[] = [
  {
    link: `mailto:${EMAILS.CONTACT}`,
    label: EMAILS.CONTACT || '',
  },
  {
    link: `tel:${PHONES.MAIN}`,
    label: `+${PHONES.MAIN}`,
  },
  {
    link: LOCATIONS.MAIN.PIN,
    label: LOCATIONS.MAIN.LOCATION,
  },
];

export const social: Link[] = [
  {
    link: SOCIALS.GH.LINK,
    label: SOCIALS.GH.LABEL,
  },
  {
    link: SOCIALS.LI.LINK,
    label: SOCIALS.LI.LABEL,
  },
];

const mainLinks = links.map((l) => l.link);
const subLinks: string[] = [];

links.map((l) => {
  if (l.subLinks) {
    l.subLinks.map((sl) => {
      subLinks.push(sl.link);
    });
  }
});

export const unprotectedRoutes = [
  ...cleanPaths(
    [
      '/',
      ...mainLinks,
      ...subLinks,
      // '/legal/terms',
      // '/legal/policy',
    ].filter((l) => !l.startsWith('/#'))
  ),
];

export const sitemapRoutes = [...unprotectedRoutes].filter((l) => l != '/');
