'use client';

import React from 'react';
import IntroPage from '@repo/components/layout/intros/page';
import LayoutSection from '@repo/components/layout/section';
import ImageDefault from '@repo/components/common/images/default';
import {
  Box,
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
import ParserHtml from '@repo/components/parsers/html';
import { Status } from '@repo/types/models/enums';

export default function Post({ props }: { props: { postId: string } }) {
  const { postId } = props;
  const { posts } = useStorePost();
  const postsPublished = posts?.filter((pi) => pi.status == Status.PUBLISHED);
  const post = postsPublished?.find((p) => p.id == postId);

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
                  maw={{ xs: '70%', sm: '80%', md: '60%' }}
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
                <Text maw={{ xs: '80%', sm: '90%', md: '70%' }}>
                  {post?.excerpt}
                </Text>
              ),
          }}
          options={{ alignment: 'start' }}
        />
      </LayoutSection>

      <LayoutSection
        id="content-body"
        containerized={false}
        margined={SECTION_SPACING * 2}
      >
        {posts === undefined ? (
          <LayoutSection id="loader" mih={'100vh'}>
            <Loader />
          </LayoutSection>
        ) : !post ? (
          <LayoutSection id="404">
            <Stack c={'dimmed'}>
              <Text>No post found</Text>
            </Stack>
          </LayoutSection>
        ) : (
          <>
            <LayoutSection id="media" containerized={false}>
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

            <LayoutSection id="content" mt={SECTION_SPACING * 2}>
              <Box maw={{ md: '80%', xl: '70%' }}>
                <ParserHtml props={{ html: post.content }} />
              </Box>
            </LayoutSection>
          </>
        )}
      </LayoutSection>

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

          <NextLink href={'/blog'} visibleFrom="xs">
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

        <CarouselBlog
          props={{ posts: postsPublished?.filter((p) => p.id != postId) }}
        />
      </LayoutSection>
    </>
  );
}
