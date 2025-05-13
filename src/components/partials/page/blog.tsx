import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Grid, GridCol, Text, Title } from '@mantine/core';
import { blog } from '@/data/blog';
import CardPost from '@/components/common/cards/post';
import IntroSection from '@/components/layout/intros/section';

export default function Blog() {
  return (
    <LayoutSection id={'blog'} padded={SECTION_SPACING}>
      <IntroSection
        options={{ alignment: 'start', spacing: true }}
        props={{
          title: (
            <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
              Blog
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
              <Text component="span" inherit c={'pri'}>
                Thoughts, tips, and insights
              </Text>{' '}
              from my day-to-day experience as a developer.
            </Text>
          ),
        }}
      />

      <Grid gutter={'xl'}>
        {blog.concat(blog).map(
          (p, i) =>
            i < 1 && (
              <GridCol key={i} span={{ base: 12, xl: 6 }}>
                <CardPost props={p} />
              </GridCol>
            )
        )}
      </Grid>
    </LayoutSection>
  );
}
