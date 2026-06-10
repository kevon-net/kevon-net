import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageBlog from '@/components/partial/page/blog';
import { Metadata } from 'next';

const metaTitle = 'Blog';
const metaDesc =
  'Articles, tutorials, and insights on web development, software engineering, Next.js, React, TypeScript, and modern technologies.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,

  openGraph: {
    title: metaTitle,
    description: metaDesc,
  },
};

export default async function Blog() {
  return (
    <LayoutPage>
      <PartialPageBlog />
    </LayoutPage>
  );
}
