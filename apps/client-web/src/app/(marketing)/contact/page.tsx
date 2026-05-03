import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageContact from '@/components/partial/page/contact';

export default async function Contact() {
  return (
    <LayoutPage>
      <PartialPageContact />
    </LayoutPage>
  );
}
