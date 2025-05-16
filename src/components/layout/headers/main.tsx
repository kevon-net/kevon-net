'use client';

import React from 'react';
import { Paper } from '@mantine/core';
import UnderlayGlass from '@/components/wrapper/underlays/glass';
import NavbarMain from '../navbars/main';
import { useMediaQuery } from '@mantine/hooks';

export default function Main({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  const desktop = useMediaQuery('(min-width: 62em)');

  return (
    <Paper
      bg={'var(--mantine-color-gray-light)'}
      w={{ base: '100%', md: 'fit-content' }}
      radius={desktop ? 0 : undefined}
      style={{
        overflow: 'hidden',
        borderBottomRightRadius: desktop
          ? 'var(--mantine-radius-sm)'
          : undefined,
      }}
    >
      <UnderlayGlass opacity={0.5} blur={16}>
        <NavbarMain opened={opened} toggle={toggle} />
      </UnderlayGlass>
    </Paper>
  );
}
