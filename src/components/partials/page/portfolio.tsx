import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Grid, GridCol, Text, Title } from '@mantine/core';
import CardProject from '@/components/common/cards/project';
import { portfolioProjects } from '@/data/projects';
import IntroSection from '@/components/layout/intros/section';

export default function Portfolio() {
  return (
    <LayoutSection id={'portfolio'} padded={SECTION_SPACING}>
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

      <Grid gutter={'xl'}>
        {portfolioProjects.map(
          (p, i) =>
            i < 1 && (
              <GridCol key={i} span={{ base: 12, xl: 6 }}>
                <CardProject props={p} />
              </GridCol>
            )
        )}
      </Grid>
    </LayoutSection>
  );
}
