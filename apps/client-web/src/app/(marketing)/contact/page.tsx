import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageContact from '@/components/partial/page/contact';
import { Metadata } from 'next';

const metaTitle = 'Contact';
const metaDesc =
  'Get in touch with Kevon for web development projects, technical consulting, collaborations, or freelance opportunities.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,

  openGraph: {
    title: metaTitle,
    description: metaDesc,
  },
};

export default async function Contact() {
  return (
    <LayoutPage>
      <PartialPageContact />
    </LayoutPage>
  );
}
