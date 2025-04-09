import { generateUUID } from '@/utilities/generators/id';

const sampleText = {
  paragraph:
    'Quisque eros lacus, dictum quis accumsan vel, venenatis sed mi. Pellentesque lacus sapien, dictum eget ligula at, viverra posuere magna. Vivamus tempus bibendum magna sed sodales. Proin vitae nulla pulvinar, finibus dolor a, tempus enim. In a ligula eleifend nisi finibus scelerisque non non lectus. Duis ut erat molestie, laoreet ipsum a, posuere mauris. Integer mollis purus vel mi facilisis interdum. Proin in elit sagittis, commodo urna sit amet, tincidunt nunc. Mauris bibendum condimentum venenatis. Pellentesque tempus lectus sit amet ullamcorper tempor. Mauris tempor eu eros eget aliquet. Sed nibh sapien, vehicula sit amet dapibus nec, sodales sed velit. In nec ligula at lorem consequat finibus. Nullam sit amet viverra magna, vel mollis mi. Sed porttitor commodo magna id sodales.',
};

export const categories = [
  {
    id: generateUUID(),
    title: 'Technology',
  },
  {
    id: generateUUID(),
    title: 'Art',
  },
  {
    id: generateUUID(),
    title: 'Design',
  },
  {
    id: generateUUID(),
    title: 'Code',
  },
];

export const blog = [
  {
    id: generateUUID(),
    cover: 'https://w.wallhaven.cc/full/2k/wallhaven-2koo76.jpg',
    title: 'How To Never Reach Creative Burnout',
    excerpt: sampleText.paragraph,
    content: 'content',
    date: new Date(),
    categoryId: categories[3].id,
  },
  {
    // id: generateUUID(),
    id: 'bb65b5c2-60da-4386-a8c6-fbffd3579b39',
    cover: 'https://w.wallhaven.cc/full/j5/wallhaven-j5yeqp.png',
    title: 'How To Design a Repeating Pattern',
    excerpt: sampleText.paragraph,
    content: 'content',
    date: new Date(),
    categoryId: categories[2].id,
  },
  {
    id: generateUUID(),
    cover: 'https://w.wallhaven.cc/full/nz/wallhaven-nz562j.jpg',
    title: 'Color Psychology in Art and Design',
    excerpt: sampleText.paragraph,
    content: 'content',
    date: new Date(),
    categoryId: categories[1].id,
  },
  {
    id: generateUUID(),
    cover: 'https://w.wallhaven.cc/full/kw/wallhaven-kw97e7.jpg',
    title: 'How To Creat a Brand Guide for Your Client',
    excerpt: sampleText.paragraph,
    content: 'content',
    date: new Date(),
    categoryId: categories[0].id,
  },
];
