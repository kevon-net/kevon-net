'use client';

import {
  Anchor,
  Box,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import LayoutSection from '../section';
import { SECTION_SPACING } from '@/data/constants';
import NavbarMain from '../navbars/main';
import { navbar, social } from '@/data/links';
import Link from 'next/link';
import classes from './main.module.scss';
import { usePathname } from 'next/navigation';
import appData from '@/data/app';

export default function Main({
  opened,
  toggle,
  close,
}: {
  opened: boolean;
  toggle: () => void;
  close: () => void;
}) {
  const pathname = usePathname();

  return (
    <Paper
      bg={{
        base: 'var(--mantine-color-body)',
        md: 'var(--mantine-color-gray-light)',
      }}
      h={'calc(100vh - 1rem)'}
      px={{ md: '1.5rem', lg: '2rem', xl: 0 }}
    >
      <LayoutSection
        py={{ md: SECTION_SPACING / 2, xl: SECTION_SPACING }}
        id="navbar-main"
        h={'100%'}
      >
        <Flex
          h={'100%'}
          direction={'column'}
          justify={{ md: 'space-between' }}
          align={'stretch'}
        >
          <Box hiddenFrom="md">
            <NavbarMain opened={opened} toggle={toggle} containerized={false} />
          </Box>

          <Stack visibleFrom="md">
            <Group mt={{ base: 'xl', md: 0 }}>
              {social.map((s, i) => (
                <Anchor key={i} component={Link} href={s.link} fz={'sm'}>
                  {s.label}.
                </Anchor>
              ))}
            </Group>

            <Title order={2} fw={'normal'} fz={'var(--mantine-h1-font-size)'}>
              Kevon Kibochi
            </Title>
          </Stack>

          <Stack align="start" mt={{ base: 'md', md: 0 }}>
            {navbar.map((nl, i) => (
              <Anchor
                key={i}
                component={Link}
                href={nl.link}
                fz={{ xs: 'lg', md: 'xl' }}
                className={classes.link}
                onClick={opened ? close : undefined}
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
      </LayoutSection>
    </Paper>
  );
}
