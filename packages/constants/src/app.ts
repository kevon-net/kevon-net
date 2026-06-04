/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

export const COMPANY_NAME = 'Kevon Net';

export const PHONES = {
  MAIN: '(254) 703 510-701',
};

export const EMAILS = {
  NO_REPLY: process.env.NEXT_PUBLIC_EMAIL_NOREPLY,
  DELIVERY: process.env.NEXT_PUBLIC_EMAIL_DELIVERY,
  DEV: process.env.NEXT_PUBLIC_EMAIL_DEV,
  CONTACT: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
  NEWSLETTER: process.env.NEXT_PUBLIC_EMAIL_NEWSLETTER,
};

export const BUSINESS_HOURS = {
  DAYS: 'Mon - Fri',
  TIMES: '8 AM - 5 PM',
};

export const LOCATIONS = {
  MAIN: {
    LOCATION: 'Westlands, Nairobi, KE',
    PIN: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.682238005543!2d36.810028700000004!3d-1.2681247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1744114805984!5m2!1sen!2ske',
  },
};

export const SOCIALS = {
  GH: {
    LABEL: `GitHub`,
    LINK: 'https://github.com/kevon-net',
  },
  LI: {
    LABEL: `LinkedIn`,
    LINK: 'https://www.linkedin.com/in/kevon-net',
  },
};

export const APP_NAME = {
  WEB: COMPANY_NAME,
  SERVER: `${COMPANY_NAME} Server`,
};

export const APP_DESC = {
  WEB: 'Innovative software developer passionate about crafting elegant solutions to complex problems, with a strong commitment to excellence and forward-thinking design.',
  SERVER: 'API server resource for kevon.net',
};
