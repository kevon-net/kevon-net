'use client';

import React from 'react';
import IntroPage from '@repo/components/layout/intros/page';
import LayoutSection from '@repo/components/layout/section';
import ImageDefault from '@repo/components/common/images/default';
import {
  Button,
  Group,
  Skeleton,
  Stack,
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
                <Stack gap={'xs'} mih={92}>
                  <Skeleton h={32} w={'70%'} />
                  <Skeleton h={32} w={'40%'} />
                </Stack>
              ) : !post ? null : (
                <Title
                  order={2}
                  fw={500}
                  fz={'var(--mantine-h1-font-size)'}
                  maw={{ md: '80%', lg: '70%' }}
                  mih={92}
                >
                  {post.title}
                </Title>
              ),
          }}
          options={{ alignment: 'start' }}
        />
      </LayoutSection>

      {posts === undefined ? (
        <>loading</>
      ) : !post ? null : (
        <>
          <LayoutSection id="media" containerized={false} pr={'0.5rem'}>
            <ImageDefault
              src={post.image}
              alt={post.title}
              height={{
                base: 280,
                xs: 360,
                sm: 480,
                md: 400,
                lg: 480,
                xl: 520,
              }}
              width={'100%'}
              mode="wide"
              style={{
                borderTopRightRadius: 'var(--mantine-radius-sm)',
                borderBottomRightRadius: 'var(--mantine-radius-sm)',
              }}
            />
          </LayoutSection>

          <LayoutSection id="content" margined={SECTION_SPACING}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </LayoutSection>

          <LayoutSection id="similar" mt={SECTION_SPACING} pb={SECTION_SPACING}>
            <Stack gap={SECTION_SPACING}>
              <Group justify="space-between">
                <Title order={2} fz={'var(--mantine-h1-font-size)'} lh={1}>
                  Similar Publications:
                </Title>

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
                        <IconArrowRight
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>
                    }
                  >
                    View All
                  </Button>
                </NextLink>
              </Group>

              {posts === undefined ? (
                <>loading...</>
              ) : !posts ? (
                <>no posts</>
              ) : (
                <CarouselBlog
                  props={{ posts: posts.filter((p) => p.id != postId) }}
                />
              )}
            </Stack>
          </LayoutSection>
        </>
      )}
    </>
  );
}
