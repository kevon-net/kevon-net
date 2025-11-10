/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

export type Link = { link: string; label: string };
export type NavLink = Link & { subLinks: Link[] | null };

import { emails, phones, socials, locations } from '@repo/constants/app';

export const navbar: Link[] = [
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
    link: `mailto:${emails.contact}`,
    label: emails.contact || '',
  },
  {
    link: `tel:${phones.main}`,
    label: `+${phones.main}`,
  },
  {
    link: locations.main.pin,
    label: locations.main.location,
  },
];

export const social: Link[] = [
  {
    link: socials.github.link,
    label: socials.github.platform,
  },
  {
    link: socials.linkedin.link,
    label: socials.linkedin.platform,
  },
];
