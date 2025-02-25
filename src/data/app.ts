const companyName = 'Devokrann';
const appName = companyName;

export const phones = {
  main: '(254) 703 510-701',
};

export const emails = {
  info: process.env.NEXT_PUBLIC_EMAIL_INFO,
  noreply: process.env.NEXT_PUBLIC_EMAIL_NOREPLY,
};

export const socials = {
  github: {
    platform: `Github`,
    link: '#gh',
  },
  linkedin: {
    platform: `LinkedIn`,
    link: '#linkedin',
  },
};

export const locations = {
  main: {
    location: '73 Westlands Road, Nairobi, KE 00100',
    pin: '#pin',
  },
};

const appData = {
  name: { company: companyName, app: appName },
  phones,
  emails,
  socials,
  locations,
};

export default appData;
