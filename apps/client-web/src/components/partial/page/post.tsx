'use client';

import React from 'react';
import IntroPage from '@repo/components/layout/intros/page';
import LayoutSection from '@repo/components/layout/section';
import ImageDefault from '@repo/components/common/images/default';
import {
  Button,
  Divider,
  Group,
  Loader,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconArrowRight } from '@tabler/icons-react';
import CarouselBlog from '@/components/common/carousel/blog';
import NextLink from '@repo/components/common/anchor/next-link';
import { useStorePost } from '@repo/libraries/zustand/stores/post';
import IntroSection from '@repo/components/layout/intros/section';

export default function Post({ props }: { props: { postId: string } }) {
  const { postId } = props;
  const { posts } = useStorePost();
  const post = posts?.find((p) => p.id == postId);

  return (
    <>
      <LayoutSection
        id={'blog-detail'}
        pt={{ base: SECTION_SPACING }}
        containerized={false}
      >
        <IntroPage
          props={{
            title:
              posts === undefined ? (
                <Stack gap={'xs'} mih={45.9}>
                  <Skeleton h={32} w={'40%'} />
                </Stack>
              ) : !post ? null : (
                <Title
                  order={2}
                  fw={500}
                  fz={'var(--mantine-h1-font-size)'}
                  maw={{ md: '40%', lg: '70%' }}
                >
                  {post.title}
                </Title>
              ),
            desc:
              posts === undefined ? (
                <Stack gap={'xs'} mih={49.6}>
                  <Skeleton h={16} w={'50%'} />
                  <Skeleton h={16} w={'40%'} />
                </Stack>
              ) : !post ? null : (
                <Text
                  maw={{
                    xs: '66%',
                    sm: '50%',
                    md: '66%',
                    lg: '50%',
                    xl: '33%',
                  }}
                >
                  {post?.excerpt}
                </Text>
              ),
          }}
          options={{ alignment: 'start' }}
        />
      </LayoutSection>

      {posts === undefined ? (
        <Loader />
      ) : !posts ? (
        <Stack c={'dimmed'}>
          <Text>No posts found</Text>
        </Stack>
      ) : !post ? (
        <Stack c={'dimmed'}>
          <Text>No post found</Text>
        </Stack>
      ) : (
        <>
          <LayoutSection id="media" containerized={false} pr={'0.5rem'}>
            <ImageDefault
              src={post.image}
              alt={post.title}
              height={{
                base: 280,
                xs: 360,
                sm: 480,
                md: 560,
                lg: 720,
              }}
              width={'100%'}
              mode="wide"
            />
          </LayoutSection>

          <LayoutSection id="content" margined={SECTION_SPACING * 2}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </LayoutSection>
        </>
      )}

      <Divider />

      <LayoutSection
        id="similar"
        mt={SECTION_SPACING * 2}
        pb={SECTION_SPACING * 2}
      >
        <Group justify="space-between" align="start">
          <IntroSection
            options={{ alignment: 'start', spacing: true }}
            props={{
              title: (
                <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                  Similar Publications:
                </Title>
              ),
            }}
          />

          <NextLink href={'/blog'}>
            <Button
              size="md"
              color="gray"
              variant="light"
              radius={'xl'}
              rightSection={
                <ThemeIcon
                  size={ICON_WRAPPER_SIZE}
                  color={'gray'}
                  variant={'light'}
                  radius={'xl'}
                >
                  <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ThemeIcon>
              }
            >
              View All
            </Button>
          </NextLink>
        </Group>

        <CarouselBlog props={{ posts: posts?.filter((p) => p.id != postId) }} />
      </LayoutSection>
    </>
  );
}
