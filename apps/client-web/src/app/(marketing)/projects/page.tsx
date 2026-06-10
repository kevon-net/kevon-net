import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageProjects from '@/components/partial/page/projects';
import { Metadata } from 'next';

const metaTitle = 'Projects';
const metaDesc =
  'A collection of full-stack applications, SaaS products, developer tools, and technical experiments built by Kevon.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,

  openGraph: {
    title: metaTitle,
    description: metaDesc,
  },
};

export default async function Projects() {
  return (
    <LayoutPage>
      <PartialPageProjects />
    </LayoutPage>
  );
}
