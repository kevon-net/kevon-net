'use client';

import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import IntroSection from '@repo/components/layout/intros/section';
import { Box, Grid, GridCol, Loader, Stack, Text, Title } from '@mantine/core';
import { useStorePost } from '@repo/libraries/zustand/stores/post';
import CardPost from '@repo/components/common/cards/post';
import { sortArray } from '@repo/utilities/array';
import { Order } from '@repo/types/enums';

export default function Blog() {
  const { posts } = useStorePost();

  return (
    <LayoutSection id={'blog'} py={{ base: SECTION_SPACING * 2 }}>
      <IntroSection
        options={{ alignment: 'start', spacing: true }}
        props={{
          title: (
            <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
              Blog
            </Title>
          ),
          desc: (
            <Text maw={{ xs: '66%', md: '50%' }}>
              <Text component="span" inherit c={'pri'}>
                Thoughts, tips, and insights
              </Text>{' '}
              from my day-to-day experience as a developer.
            </Text>
          ),
        }}
      />

      <Box mih={'50vh'}>
        {posts === undefined ? (
          <Loader />
        ) : !posts ? (
          <Stack c={'dimmed'}>
            <Text>No posts found</Text>
          </Stack>
        ) : (
          <Grid gutter={'xl'}>
            {sortArray(posts, (i) => i.created_at, Order.DESCENDING).map(
              (pi) => (
                <GridCol key={pi.id} span={{ base: 12, sm: 6 }}>
                  <CardPost props={pi} />
                </GridCol>
              )
            )}
          </Grid>
        )}
      </Box>
    </LayoutSection>
  );
}
