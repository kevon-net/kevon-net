/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { cleanPaths } from '@repo/utilities/array';
import { navbar as linksNavbar } from './links';

export const authRoutes = [
  '/auth/password',
  '/auth/sign-in',
  '/auth/sign-up',
  '/auth/verify',
  // Add other auth routes
];

export const protectedRoutes = [
  '/account',
  '/dashboard',
  '/cms',
  // Add other protected routes
];

export const protectedDeadEndRoutes = [
  '/auth/sign-out',
  '/auth/confirm/delete-account',
  // Add other protected dead-end routes
];

const mainLinks = linksNavbar.map((l) => l.link);
const subLinks: string[] = [];

// linksNavbar.map((l) => {
//   if (l.subLinks) {
//     l.subLinks.map((sl) => {
//       subLinks.push(sl.link);
//     });
//   }
// });

export const unprotectedRoutes = [
  '/',

  ...cleanPaths([...mainLinks, ...subLinks]),

  '/legal/terms',
  '/legal/policy',
];

export const sitemapRoutes = [...unprotectedRoutes].filter((l) => l != '/');

export const sessionRoutes = [...unprotectedRoutes].filter((l) => l != '/shop');
