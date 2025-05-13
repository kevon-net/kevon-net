const sampleSentence =
  'Innovative software developer passionate about crafting elegant solutions to complex problems, with a strong commitment to excellence and forward-thinking design.';

const sampleProse =
  'Kevon is a passionate software developer known for innovative thinking, strong problem-solving skills, and a commitment to delivering high-quality, user-friendly solutions. He thrives in collaborative environments and consistently brings elegant, efficient results to complex challenges.';

const sample = {
  text: { sentence: sampleSentence, prose: sampleProse },
};

const companyName = 'Kevon Kibochi';
const appName = companyName;
const companyOneLiner = sample.text.sentence;
const companyDescription = sample.text.prose;

export const phones = {
  main: '(254) 703 510-701',
};

export const emails = {
  contact: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
  noreply: process.env.NEXT_PUBLIC_EMAIL_NOREPLY,
};

export const socials = {
  github: {
    platform: `GitHub`,
    link: 'https://github.com/devokrann',
  },
  linkedin: {
    platform: `LinkedIn`,
    link: 'https://www.linkedin.com/in/kevon-kibochi/',
  },
};

export const hours = {
  days: 'Mon - Fri',
  times: '8 AM - 5 PM',
};

export const locations = {
  main: {
    location: 'Westlands, Nairobi, KE 00100',
    pin: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.682238005543!2d36.810028700000004!3d-1.2681247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1744114805984!5m2!1sen!2ske',
  },
};

const appData = {
  companyOneLiner,
  companyDescription,

  name: { company: companyName, app: appName },
  phones,
  emails,
  socials,
  hours,
  locations,
  year: new Date().getFullYear(),
};

export default appData;
