'use client';

import React from 'react';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';
import {
  Anchor,
  Box,
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import LayoutSection from '../section';
import FormSubscribe from '@/components/form/subscribe';
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import classes from './main.module.scss';
import { contact, navbar } from '@/data/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { portfolioProjects } from '@/data/projects';
// import { linkify } from '@/utilities/formatters/string';

export default function Main() {
  const pathname = usePathname();

  const finePrint = (
    <Stack>
      <Group>
        {socials.map((s, i) => (
          <Anchor
            key={i}
            href={s.link}
            target="_blank"
            title={s.title}
            className={classes.link}
          >
            <s.icon size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          </Anchor>
        ))}
      </Group>

      <Text>&copy; Copyright {appData.year} - K. All Rights Reserved</Text>
    </Stack>
  );

  return (
    <LayoutSection
      id="navbar-main"
      padded={SECTION_SPACING * 1.5}
      bg={'var(--mantine-color-black)'}
    >
      <Grid gutter={0}>
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack h={'100%'} justify="space-between" gap={SECTION_SPACING}>
            <Stack gap={'xl'}>
              <div>
                <ImageDefault
                  src={images.brand.icon.dark}
                  alt={appData.name.app}
                  height={40}
                  width={24}
                  fit="contain"
                />
              </div>

              <Text maw={{ md: '75%' }} visibleFrom="sm">
                {appData.companyDescription}
              </Text>

              <Stack align="start" gap={'xs'}>
                <Text>Subscribe to our newsletter:</Text>

                <FormSubscribe />
              </Stack>
            </Stack>

            <Box visibleFrom="md">{finePrint}</Box>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 6 }}>
          <Grid gutter={0}>
            <GridCol span={{ base: 12, xs: 6 }}>
              <Stack align="start" mt={{ base: SECTION_SPACING, md: 0 }}>
                {navbar.map((n, i) => (
                  <Anchor
                    key={i}
                    component={Link}
                    href={n.link}
                    className={classes.link}
                    fz={'xl'}
                    style={{
                      color:
                        pathname == n.link
                          ? 'var(--mantine-color-pri-6) !important'
                          : undefined,
                    }}
                  >
                    {n.label}
                  </Anchor>
                ))}
              </Stack>
            </GridCol>

            <GridCol span={{ base: 12, xs: 6 }}>
              <Stack mt={{ base: SECTION_SPACING, md: 0 }}>
                <Title order={2} fz={'md'}>
                  Projects
                </Title>

                {/* <Stack align="start">
                  {portfolioProjects.map((p, i) => (
                    <Anchor
                      key={i}
                      component={Link}
                      href={`/projects/${linkify(p.name)}-${p.id}`}
                      fz={'sm'}
                      className={classes.linkLight}
                    >
                      {p.name}
                    </Anchor>
                  ))}
                </Stack> */}
              </Stack>
            </GridCol>

            <GridCol span={12}>
              <Divider my={SECTION_SPACING} />
            </GridCol>

            <GridCol span={{ base: 12, xs: 6 }}>
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
                      fz={'sm'}
                      className={classes.linkLight}
                    >
                      {c.label}
                    </Anchor>
                  ))}
                </Stack>
              </Stack>
            </GridCol>

            <GridCol span={{ base: 12, xs: 6 }}>
              <Stack mt={{ base: SECTION_SPACING, xs: 0 }}>
                <Title order={2} fz={'md'}>
                  Social
                </Title>

                <Stack align="start">
                  {socials.map((s, i) => (
                    <Anchor
                      key={i}
                      component={Link}
                      href={s.link}
                      fz={'sm'}
                      className={classes.linkLight}
                    >
                      {s.title}
                    </Anchor>
                  ))}
                </Stack>
              </Stack>
            </GridCol>
          </Grid>
        </GridCol>

        <GridCol span={12} hiddenFrom="md">
          <Box mt={SECTION_SPACING}>{finePrint}</Box>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}

const socials = [
  {
    link: appData.socials.github.link,
    title: appData.socials.github.platform,
    icon: IconBrandGithubFilled,
  },
  {
    link: appData.socials.linkedin.link,
    title: appData.socials.linkedin.platform,
    icon: IconBrandLinkedinFilled,
  },
];
