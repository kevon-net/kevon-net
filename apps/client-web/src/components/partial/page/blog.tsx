'use client';

import React from 'react';
import { useStorePost } from '@/libraries/zustand/stores/post';
import LayoutSection from '@repo/components/layout/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import IntroSection from '@repo/components/layout/intros/section';
import { Text, Title } from '@mantine/core';
import CarouselBlog from '@/components/common/carousel/blog';

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

      {posts === undefined ? (
        <>loading</>
      ) : !posts ? (
        <>no posts found</>
      ) : (
        <CarouselBlog posts={posts} />
      )}
    </LayoutSection>
  );
}
