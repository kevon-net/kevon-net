'use client';

import React from 'react';
import {
  AppShell,
  AppShellAside,
  AppShellHeader,
  AppShellMain,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AsideMain from '../asides/main';
import HeaderMain from '../headers/main';

export default function Main({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 105 } }}
      aside={{
        width: { md: 360, lg: 400, xl: 440 },
        breakpoint: 'md',
        collapsed: { mobile: !opened, desktop: false },
      }}
      layout="alt"
      withBorder={false}
    >
      <AppShellHeader bg={'transparent'} p={'0.5rem'}>
        <HeaderMain opened={opened} toggle={toggle} />
      </AppShellHeader>

      <AppShellMain>{children}</AppShellMain>

      <AppShellAside
        py={'0.5rem'}
        pr={'0.5rem'}
        pl={{ base: '0.5rem', md: 0 }}
        bg={'transparent'}
      >
        <AsideMain opened={opened} toggle={toggle} close={close} />
      </AppShellAside>
    </AppShell>
  );
}
