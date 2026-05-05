'use client';

import React from 'react';
import {
  Box,
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

      <Box mih={'50vh'}>
        {projects === undefined ? (
          <Loader />
        ) : !projects?.length ? (
          <Stack c={'dimmed'}>
            <Text>No projects found</Text>
          </Stack>
        ) : (
          <Grid gutter={'xl'}>
            {projects.map(
              (pi, i) =>
                i < 3 && (
                  <GridCol key={pi.id} span={{ base: 12, md: 6 }}>
                    <CardProject project={pi} />
                  </GridCol>
                )
            )}
          </Grid>
        )}
      </Box>
    </LayoutSection>
  );
}
