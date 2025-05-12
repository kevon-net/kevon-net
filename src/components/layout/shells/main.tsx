'use client';

import React from 'react';
import {
  Anchor,
  AppShell,
  AppShellAside,
  AppShellHeader,
  AppShellMain,
  Box,
  Burger,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { navbar, social } from '@/data/links';
import classes from './main.module.scss';
import { usePathname } from 'next/navigation';
import UnderlayGlass from '@/components/wrapper/underlays/glass';
import appData from '@/data/app';
import { SECTION_SPACING } from '@/data/constants';

export default function Main({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  const burgerComponent = (
    <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
  );

  const headerHeight = 105;

  return (
    <AppShell
      header={{ height: { base: headerHeight, md: 0 } }}
      aside={{
        width: { md: 440 },
        breakpoint: 'md',
        collapsed: { mobile: !opened, desktop: false },
      }}
      layout="alt"
      withBorder={false}
      // transitionDuration={0}
      // padding="md"
    >
      <AppShellHeader p={'0.5rem'} bg={'transparent'} hiddenFrom="md">
        <UnderlayGlass
          opacity={0.5}
          blur={16}
          underlayStyles={{
            borderRadius: 'var(--mantine-radius-sm)',
            overflow: 'hidden',
          }}
        >
          <Paper
            bg={'var(--mantine-color-gray-light)'}
            p={{ base: '1.5rem', md: '1rem' }}
          >
            <Group h="100%" justify="space-between">
              {header}

              {burgerComponent}
            </Group>
          </Paper>
        </UnderlayGlass>
      </AppShellHeader>

      <AppShellMain>
        <Box visibleFrom="md">{header}</Box>

        {children}
      </AppShellMain>

      <AppShellAside p={'0.5rem'} bg={'transparent'}>
        <Paper
          bg={{
            base: 'var(--mantine-color-body)',
            md: 'var(--mantine-color-gray-light)',
          }}
          p={{ base: '1.5rem', md: '1rem' }}
          h={'calc(100vh - 1rem)'}
        >
          <Flex
            h={'100%'}
            direction={'column'}
            justify={{ md: 'space-between' }}
            p={{ md: SECTION_SPACING / 2, xl: SECTION_SPACING }}
          >
            <Group
              justify="space-between"
              hiddenFrom="md"
              pos={'sticky'}
              top={{ base: '1.5rem', md: '1rem' }}
            >
              {header}

              {burgerComponent}
            </Group>

            <Stack visibleFrom="md">
              <Group mt={{ base: 'xl', md: 0 }}>
                {social.map((s, i) => (
                  <Anchor
                    key={i}
                    component={Link}
                    href={s.link}
                    fz={'xs'}
                    className={classes.linkLight}
                  >
                    {s.label}.
                  </Anchor>
                ))}
              </Group>

              <Title order={2} fw={'normal'} fz={'var(--mantine-h1-font-size)'}>
                Kevon Kibochi
              </Title>
            </Stack>

            <Stack align="start" mt={{ base: SECTION_SPACING, md: 0 }}>
              {navbar.map((nl, i) => (
                <Anchor
                  key={i}
                  component={Link}
                  href={nl.link}
                  fz={{ xs: 'lg' }}
                  className={classes.link}
                  style={{
                    color:
                      pathname == nl.link
                        ? 'var(--mantine-color-pri-6) !important'
                        : undefined,
                  }}
                >
                  {nl.label}
                </Anchor>
              ))}
            </Stack>

            <Stack visibleFrom="md">
              <Text>&copy; Kevon {appData.year}.</Text>
            </Stack>
          </Flex>
        </Paper>
      </AppShellAside>
    </AppShell>
  );
}
