const URL_PREFIX =
  process.env.NODE_ENV === 'production' &&
  process.env.NEXT_PUBLIC_HOST != 'localhost:3000'
    ? 'https://'
    : 'http://';

export const HOSTNAME = process.env.NEXT_PUBLIC_HOST;

export const BASE_URL = `${URL_PREFIX}${HOSTNAME}`;

export const AUTH_URLS = {
  SIGN_IN: `${BASE_URL}/auth/sign-in`,
  SIGN_UP: `${BASE_URL}/auth/sign-up`,
  VERIFY_REQUEST: `${BASE_URL}/auth/verify-request`,
  ERROR: `${BASE_URL}/auth/error`,
  SIGN_OUT: `${BASE_URL}/auth/sign-out`,
};

export const HOSTED_BASE_URL = {
  KEVON: `https://kevon.net`,
};

export const DEFAULT_COLOR_SCHEME: 'light' | 'dark' = 'dark';

export const API_URL = {
  API: `${BASE_URL}/api`,
  RESEND: `https://api.resend.com/emails`,
};

export const ICON_SIZE = 20;

export const ICON_WRAPPER_SIZE = ICON_SIZE + 8;

export const ICON_STROKE_WIDTH = 1.5;

export const SECTION_SPACING = 64;

export const TIMEOUT = { REDIRECT: 5000 };

export const EXPIRY = {
  MINUTE: 60,
  HOUR: 60 * 60,
  DAY: 60 * 60 * 24,
  WEEK: 60 * 60 * 24 * 7,
};

export const COOKIE_NAME = {
  CONSENT: { COOKIES: 'consent.cookies' },
  LOCAL: { COUNTRY: 'local.country', COUNTRIES: 'local.countries' },
  COLOR_SCHEME: 'theme.color-scheme',
  COLOR_SCHEME_STATE: 'theme.color-scheme-state',
};

export const LOCAL_STORAGE_NAME = {
  COUNTRY: 'country',
  COUNTRIES: 'countries',
};

export const SCROLL_BAR = {
  SHELL: 6,
};

export const FONT_SIZE = {
  TITLE_PAGE: {
    base: 'var(--mantine-h1-font-size)',
    md: '3rem',
    lg: '4rem',
  },
};
