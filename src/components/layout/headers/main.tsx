import React from 'react';
import { Paper } from '@mantine/core';
import UnderlayGlass from '@/components/wrapper/underlays/glass';
import NavbarMain from '../navbars/main';

export default function Main({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  return (
    <Paper
      bg={'var(--mantine-color-gray-light)'}
      w={{ base: '100%', md: 'fit-content' }}
      style={{ overflow: 'hidden' }}
    >
      <UnderlayGlass opacity={0.5} blur={16}>
        <NavbarMain opened={opened} toggle={toggle} />
      </UnderlayGlass>
    </Paper>
  );
}
