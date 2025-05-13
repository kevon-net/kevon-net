'use client';

import React from 'react';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';
import { Anchor, Box } from '@mantine/core';
import LayoutSection from '../section';
import Link from 'next/link';
import { SECTION_SPACING } from '@/data/constants';
import { usePathname } from 'next/navigation';
import { useWindowScroll } from '@mantine/hooks';

export default function Main() {
  const pathname = usePathname();
  const [scroll, scrollTo] = useWindowScroll();

  const contents = (
    <Anchor
      component={Link}
      href={'/'}
      onClick={(e) => {
        if (pathname != '/') return;
        e.preventDefault();
        if (scroll.y > 0) scrollTo({ y: 0 });
      }}
    >
      <ImageDefault
        src={images.brand.icon.dark}
        alt={appData.name.app}
        height={40}
        width={24}
        fit="contain"
      />
    </Anchor>
  );

  return (
    <>
      <LayoutSection
        id="navbar-main"
        visibleFrom="md"
        padded={SECTION_SPACING / 2}
      >
        {contents}
      </LayoutSection>

      <Box component="section" id="navbar-main" hiddenFrom="md">
        {contents}
      </Box>
    </>
  );
}
