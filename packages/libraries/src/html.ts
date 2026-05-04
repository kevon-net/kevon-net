'use server';

import { highlight } from './shiki';

export const getHtml = async (content: string) => {
  return await highlight(content, 'ts');
};
