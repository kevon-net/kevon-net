import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';

import appData from '@/data/app';

export type typeParams = Promise<{
  'projectTitle-projectId': string;
  categoryId: string;
  tagId: string;
}>;

export const metadata: Metadata = {
  title: { default: 'Project', template: `%s - Project - ${appData.name.app}` },
};

export default function LayoutProject({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
