import React from 'react';
import { Text, Title } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import IntroSection from '@repo/components/layout/intros/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import CarouselPortfolio from '@/components/common/carousel/portfolio';
import { projectsGet } from '@repo/handlers/requests/database/projects';
import { ProjectRelations } from '@repo/types/models/project';

export default async function Portfolio() {
  const { items: projects }: { items: ProjectRelations[] } =
    await projectsGet();

  return (
    <LayoutSection
      id={'portfolio'}
      py={{ base: SECTION_SPACING * 2, md: SECTION_SPACING }}
    >
      <IntroSection
        options={{ alignment: 'start', spacing: true }}
        props={{
          title: (
            <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
              Portfolio
              {/* <Text component="span" inherit fw={'100'}>
                          Kevon&apos;s
                        </Text>{' '}
                        History */}
            </Title>
          ),
          desc: (
            <Text
              maw={{ xs: '66%', sm: '50%', md: '66%', lg: '50%', xl: '33%' }}
            >
              A selection of recent{' '}
              <Text component="span" inherit c={'pri'}>
                projects showcasing my work
              </Text>{' '}
              and problem-solving approach.
            </Text>
          ),
        }}
      />

      <CarouselPortfolio projects={projects} />
    </LayoutSection>
  );
}
