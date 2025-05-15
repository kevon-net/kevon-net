'use client';

import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Loader, Text, Title } from '@mantine/core';
import IntroSection from '@/components/layout/intros/section';
import CarouselBlog from '@/components/common/carousel/blog';
import { useSupabaseQuery } from '@/hooks/fetch';
import { PostGet } from '@/types/models/post';

export default function Blog() {
  const { data: posts, loading, error } = useSupabaseQuery('posts');

  if (error) {
    console.error(error);
    return <Text>Failed to load posts.</Text>;
  }

  return (
    <LayoutSection
      id={'blog'}
      py={{ base: SECTION_SPACING * 2, md: SECTION_SPACING }}
    >
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

      {loading ? (
        <Loader color="var(--mantine-color-gray-light)" type="dots" />
      ) : (
        posts != null && <CarouselBlog posts={posts as PostGet[]} />
      )}
    </LayoutSection>
  );
}
