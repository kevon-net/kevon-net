import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@repo/components/layout/body';
import { APP_NAME } from '@repo/constants/app';

export type typeParams = Promise<{
  'postTitle-postId': string;
}>;

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: `%s | ${APP_NAME.WEB}`,
  },
  description:
    'Articles, tutorials, and insights on web development, software engineering, Next.js, React, TypeScript, and modern technologies.',
};

export default function LayoutBlog({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
