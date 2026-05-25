'use client';

import React from 'react';
import { Box, Grid, GridCol, Loader, Stack, Text, Title } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import IntroSection from '@repo/components/layout/intros/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { useStoreProject } from '@repo/libraries/zustand/stores/project';
import CardProject from '@/components/common/cards/project';
import { Status } from '@repo/types/models/enums';

export default function Projects() {
  const projects = useStoreProject((s) => s.projects);
  const projectsPublished = projects?.filter(
    (pi) => pi.status == Status.PUBLISHED
  );

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
        ) : !projectsPublished?.length ? (
          <Stack c={'dimmed'}>
            <Text>No projects found</Text>
          </Stack>
        ) : (
          <Grid gutter={'xl'}>
            {projectsPublished.map(
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
