/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@repo/components/layout/body';
import { APP_NAME } from '@repo/constants/app';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';

export const metadata: Metadata = {
  title: { default: APP_NAME.WEB, template: `%s - ${APP_NAME.WEB}` },
};

export default async function LayoutMarketing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody nav={<NavbarMain />} footer={<FooterMain />}>
      <main>{children}</main>
    </LayoutBody>
  );
}
