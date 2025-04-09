'use client';

import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  ActionIcon,
  Anchor,
  Box,
  Divider,
  Grid,
  GridCol,
  Group,
  Modal,
  Stack,
  Title,
} from '@mantine/core';
import WrapperShellMain from '@/components/wrapper/shell/main';
import LayoutSection from '@/components/layout/section';
import {
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import { IconX } from '@tabler/icons-react';
import { contact, navbar, social } from '@/data/links';
import Link from 'next/link';
import classes from './navbar.module.scss';
import ImageDefault from '../images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';
import { usePathname } from 'next/navigation';
import { portfolioProjects } from '@/data/projects';
import { linkify } from '@/utilities/formatters/string';

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  const closeButton = (
    <ActionIcon
      onClick={close}
      size={ICON_WRAPPER_SIZE * 1.25}
      color="gray"
      variant="transparent"
    >
      <IconX size={ICON_WRAPPER_SIZE * 1.25} stroke={ICON_STROKE_WIDTH} />
    </ActionIcon>
  );

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        fullScreen
        styles={{ body: { padding: 0 } }}
      >
        <WrapperShellMain>
          <LayoutSection id="modal-navbar">
            <Grid gutter={0}>
              <GridCol span={{ base: 12, xs: 5 }}>
                <Stack h={'100%'} gap={0} pb={{ xs: 'xl' }}>
                  <Group my={headerPadding} justify="space-between">
                    <Anchor component={Link} href={'/'}>
                      <ImageDefault
                        src={images.brand.icon.dark}
                        alt={appData.name.app}
                        height={40}
                        width={24}
                        fit="contain"
                      />
                    </Anchor>

                    <Box hiddenFrom="xs">{closeButton}</Box>
                  </Group>

                  <Stack align="start" justify="center" h={'100%'}>
                    {navbar.map((nl, i) => (
                      <Anchor
                        key={i}
                        component={Link}
                        href={nl.link}
                        fz={{ base: 'lg', xs: 'var(--mantine-h1-font-size)' }}
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
                </Stack>
              </GridCol>

              <GridCol span={{ base: 12, xs: 1 }} mih={{ sm: '100vh' }}>
                <Group justify="center" h={'100%'} visibleFrom="xs">
                  <Divider orientation="vertical" />
                </Group>

                <Divider hiddenFrom="xs" my={'xl'} />
              </GridCol>

              <GridCol span={{ base: 12, xs: 6 }}>
                <Stack h={'100%'} gap={0} pb={'xl'}>
                  <Group justify="end" my={headerPadding} visibleFrom="xs">
                    {closeButton}
                  </Group>

                  <Stack justify="center" h={'100%'}>
                    <Grid gutter={0}>
                      <GridCol span={{ base: 12, xs: 6 }}>
                        <Stack>
                          <Title order={2} fz={'md'}>
                            Projects
                          </Title>

                          <Stack align="start">
                            {portfolioProjects.map((p, i) => (
                              <Anchor
                                key={i}
                                component={Link}
                                href={`/projects/${linkify(p.name)}-${p.id}`}
                                fz={'xs'}
                                className={classes.linkLight}
                              >
                                {p.name}
                              </Anchor>
                            ))}
                          </Stack>
                        </Stack>
                      </GridCol>

                      <GridCol span={{ base: 12, xs: 6 }}></GridCol>

                      <GridCol span={12}>
                        <Divider my={{ base: 'xl', md: SECTION_SPACING }} />
                      </GridCol>

                      <GridCol span={{ base: 12, sm: 6 }}>
                        <Stack>
                          <Title order={2} fz={'md'}>
                            Contact
                          </Title>

                          <Stack align="start">
                            {contact.map((c, i) => (
                              <Anchor
                                key={i}
                                component={Link}
                                href={c.link}
                                fz={'xs'}
                                className={classes.linkLight}
                              >
                                {c.label}
                              </Anchor>
                            ))}
                          </Stack>
                        </Stack>
                      </GridCol>

                      <GridCol span={{ base: 12, sm: 6 }}>
                        <Stack mt={{ base: 'xl', sm: 0 }}>
                          <Title order={2} fz={'md'}>
                            Social
                          </Title>

                          <Stack align="start">
                            {social.map((s, i) => (
                              <Anchor
                                key={i}
                                component={Link}
                                href={s.link}
                                fz={'xs'}
                                className={classes.linkLight}
                              >
                                {s.label}
                              </Anchor>
                            ))}
                          </Stack>
                        </Stack>
                      </GridCol>
                    </Grid>
                  </Stack>
                </Stack>
              </GridCol>
            </Grid>
          </LayoutSection>
        </WrapperShellMain>
      </Modal>

      <div onClick={open}>{children}</div>
    </>
  );
}

const headerPadding = 'xl';
