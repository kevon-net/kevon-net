import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@repo/components/layout/body';
import { APP_NAME } from '@repo/constants/app';

export type typeParams = Promise<{
  'projectTitle-projectId': string;
}>;

export const metadata: Metadata = {
  title: {
    default: 'Projects',
    template: `%s | ${APP_NAME.WEB}`,
  },
  description:
    'A collection of full-stack applications, SaaS products, developer tools, and technical experiments built by Kevon.',
};

export default function LayoutProject({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
