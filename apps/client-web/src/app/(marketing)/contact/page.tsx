import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageContact from '@/components/partial/page/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contact`,
};

export default async function Contact() {
  return (
    <LayoutPage>
      <PartialPageContact />
    </LayoutPage>
  );
}
