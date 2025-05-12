import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Grid, GridCol, Title } from '@mantine/core';
import CardProject from '@/components/common/cards/project';
import { portfolioProjects } from '@/data/projects';
import { chunkArray } from '@/utilities/helpers/array';
import IntroSection from '@/components/layout/intros/section';

export default function Portfolio() {
  const projects = chunkArray(portfolioProjects, 2);

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
        }}
      />

      <Grid gutter={{ base: 'xl', md: 0 }}>
        {projects.map((c, ci) => (
          <GridCol key={ci} span={12}>
            <Grid gutter={0} align="center">
              {c.map((p, i) => (
                <GridCol
                  key={i}
                  span={{
                    base: 12,
                    sm: 6,
                    md: getOrientation(ci, i) == 'vertical' ? 5.5 : 6.5,
                    lg: getOrientation(ci, i) == 'vertical' ? 5 : 7,
                  }}
                  pr={{ md: i == 0 ? SECTION_SPACING : undefined }}
                  pl={{ md: i == 1 ? SECTION_SPACING : undefined }}
                >
                  <CardProject
                    props={p}
                    options={{ orientation: getOrientation(ci, i) }}
                  />
                </GridCol>
              ))}
            </Grid>
          </GridCol>
        ))}
      </Grid>
    </LayoutSection>
  );
}

const getOrientation = (index: number, subIndex: number) => {
  if (index % 2 == 0) {
    if (subIndex == 0) return 'vertical';
    else return 'horizontal';
  } else {
    if (subIndex == 0) return 'horizontal';
    else return 'vertical';
  }
};
