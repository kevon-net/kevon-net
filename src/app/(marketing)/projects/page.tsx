import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import IntroPage from '@/components/layout/intros/page';
import LayoutSection from '@/components/layout/section';
import { FONT_SIZE, SECTION_SPACING } from '@/data/constants';
import { Grid, GridCol, Text, Title } from '@mantine/core';
import CardProject from '@/components/common/cards/project';
import { portfolioProjects } from '@/data/projects';
import { chunkArray } from '@/utilities/helpers/array';
import CtaProject from '@/components/cta/project';

export const metadata: Metadata = { title: 'Projects' };

export default async function Projects() {
  const projects = chunkArray(portfolioProjects, 2);

  return (
    <LayoutPage>
      <IntroPage
        props={{
          title: (
            <Title order={1} fz={FONT_SIZE.TITLE_PAGE}>
              Building{' '}
              <Text component="span" inherit fw={'100'}>
                a Better
              </Text>
              <br />
              World{' '}
              <Text component="span" inherit fw={'100'}>
                Today
              </Text>
            </Title>
          ),
        }}
        options={{ alignment: 'start' }}
      />

      <LayoutSection
        id={'projects'}
        mt={SECTION_SPACING * 1.5}
        pb={SECTION_SPACING * 1.5}
        bordered
      >
        <Grid gutter={{ base: 'xl', md: 0 }}>
          {projects.map((c, ci) => (
            <GridCol key={ci} span={12}>
              <Grid gutter={'xl'} align="center">
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

      <CtaProject />
    </LayoutPage>
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
