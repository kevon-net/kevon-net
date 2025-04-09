import React from 'react';
import LayoutBody from '@/components/layout/body';
import AffixTop from '@/components/common/affixi/top';
import ProviderStore from '@/components/providers/store';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footer/main';

export default function LayoutMarketing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderStore>
      <LayoutBody nav={<NavbarMain />} footer={<FooterMain />}>
        <main>{children}</main>

        <AffixTop />
      </LayoutBody>
    </ProviderStore>
  );
}
