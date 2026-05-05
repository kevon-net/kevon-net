'use server';

import { highlight } from './shiki';

export const getHtml = async (content: string, options?: { raw?: boolean }) => {
  return await highlight(content, {
    defaultLang: 'ts',
    isRawCode: !!options?.raw,
  });
};
