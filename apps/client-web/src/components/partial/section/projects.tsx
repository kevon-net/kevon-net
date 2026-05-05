'use client';

import React from 'react';
import {
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import IntroSection from '@repo/components/layout/intros/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { useStoreProject } from '@repo/libraries/zustand/stores/project';
import CardProject from '@/components/common/cards/project';
import NextLink from '@repo/components/common/anchor/next-link';
import { IconArrowRight } from '@tabler/icons-react';

export default function Projects() {
  const projects = useStoreProject((s) => s.projects);

  return (
    <LayoutSection id={'projects'} py={{ base: SECTION_SPACING * 2 }}>
      <IntroSection
        options={{ alignment: 'start', spacing: true }}
        props={{
          title: (
            <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
              Selected Work
            </Title>
          ),
          desc: (
            <Text maw={{ xs: '66%', md: '50%' }}>
              A selection of projects focused on{' '}
              <Text component="span" inherit c={'pri'}>
                performance, scalability, and real-world impact
              </Text>
              .
            </Text>
          ),
        }}
      />

      {projects === undefined ? (
        <Stack mih={'60vh'}>
          <Loader />
        </Stack>
      ) : !projects?.length ? (
        <Stack c={'dimmed'} mih={'50vh'}>
          <Text inherit>No projects found</Text>
        </Stack>
      ) : (
        <Grid gutter={'xl'}>
          {projects.map(
            (pi, i) =>
              i < 3 && (
                <GridCol
                  key={pi.id}
                  span={{
                    base: 12,
                    md: 6,
                    // xl: 4
                  }}
                >
                  <CardProject project={pi} />
                </GridCol>
              )
          )}
        </Grid>
      )}

      <Group justify="center" mt={SECTION_SPACING}>
        <NextLink href="/projects">
          <Button
            variant="light"
            rightSection={
              <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            }
          >
            See all projects
          </Button>
        </NextLink>
      </Group>
    </LayoutSection>
  );
}
