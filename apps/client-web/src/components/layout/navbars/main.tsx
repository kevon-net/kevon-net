'use client';

import React from 'react';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@/assets/images';
import { appName } from '@repo/constants/app';
import { Burger, Group } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWindowScroll } from '@mantine/hooks';

export default function Main({
  opened,
  toggle,
  containerized,
}: {
  opened: boolean;
  toggle: () => void;
  containerized?: boolean;
}) {
  const pathname = usePathname();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <LayoutSection
      id="navbar-main"
      w={{ base: '100%', md: 'fit-content' }}
      py={{ base: '1.5rem', md: '1rem', xl: '2.5rem' }}
      containerized={containerized}
    >
      <Group h="100%" justify="space-between">
        <Link
          href={'/'}
          onClick={(e) => {
            if (pathname != '/') return;
            e.preventDefault();
            if (scroll.y > 0) scrollTo({ y: 0 });
          }}
        >
          <ImageDefault
            src={images.brand.icon.dark}
            alt={appName}
            height={40}
            width={24}
            fit="contain"
          />
        </Link>

        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
      </Group>
    </LayoutSection>
  );
}
