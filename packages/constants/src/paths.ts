/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

const isProduction = process.env.NODE_ENV === 'production';

export const HOSTNAME_CLIENT_WEB = process.env.NEXT_PUBLIC_HOST_CLIENT_WEB;
export const HOSTNAME_SERVER = process.env.NEXT_PUBLIC_HOST_SERVER;

const getUrlPrefix = (host: string) => {
  if (!host) return 'http://';
  return isProduction && !host.includes('localhost') ? 'https://' : 'http://';
};

export const BASE_URL_CLIENT = `${getUrlPrefix(HOSTNAME_CLIENT_WEB as string)}${HOSTNAME_CLIENT_WEB}`;
export const BASE_URL_SERVER = `${getUrlPrefix(HOSTNAME_SERVER as string)}${HOSTNAME_SERVER}`;

export const API_URL = `${BASE_URL_SERVER}/api`;

export const GEO_DATA_URL = {
  COUNTRIES: `${process.env.NEXT_PUBLIC_REST_COUNTRIES_API_URL}`,
};

export const AUTH_URLS = {
  SIGN_IN: `${BASE_URL_CLIENT}/auth/sign-in`,
  SIGN_UP: `${BASE_URL_CLIENT}/auth/sign-up`,
  CHECK_EMAIL: `${BASE_URL_CLIENT}/auth/check-email`,
  ERROR: `${BASE_URL_CLIENT}/auth/error`,
  SIGN_OUT: `${BASE_URL_CLIENT}/auth/sign-out`,
  REDIRECT: {
    DEFAULT: '/app/home',
  },
};

export const HOSTED_BASE_URL = {
  CLIENT_WEB: `https://template-next.com`,
  SERVER: `https://api.template-next.com`,
};
