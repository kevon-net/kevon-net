import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import { typeParams } from '../layout';
import { extractUuidFromParam, linkify } from '@repo/utilities/url';
// import { postsGet } from '@repo/handlers/requests/database/posts';
import { samplePosts as posts } from '@/data/sample/posts';
import IntroPage from '@repo/components/layout/intros/page';
import LayoutSection from '@repo/components/layout/section';
import ImageDefault from '@repo/components/common/images/default';
import { Button, Group, Stack, ThemeIcon, Title } from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import CarouselBlog from '@/components/common/carousel/blog';
import { PostRelations } from '@repo/types/models/post';
import NextLink from '@repo/components/common/anchor/next-link';

export async function generateStaticParams() {
  // const { items: posts }: { items: PostRelations[] } = await postsGet();

  return posts.map((post) => ({
    'postTitle-postId': `${linkify(post.title)}-${post.id}`,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const postId = extractUuidFromParam((await params)['postTitle-postId']);
  const post: PostRelations | undefined = posts.find((p) => p.id == postId);

  if (!post) return <>post not found</>;

  return (
    <LayoutPage>
      <IntroPage props={{ title: post.title }} />

      <LayoutSection id="media" containerized={false} pr={'0.5rem'}>
        <ImageDefault
          src={post.image}
          alt={post.title}
          height={{ base: 280, xs: 360, sm: 480, md: 400, lg: 480, xl: 520 }}
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

          <CarouselBlog
            posts={posts.filter((p) => p.id != postId) as PostRelations[]}
          />
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
