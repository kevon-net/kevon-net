import React from 'react';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';
import { Anchor, Box } from '@mantine/core';
import LayoutSection from '../section';
import Link from 'next/link';
import { SECTION_SPACING } from '@/data/constants';

export default function Main() {
  const contents = (
    <Anchor component={Link} href={'/'}>
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
