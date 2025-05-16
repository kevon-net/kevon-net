import React from 'react';
import LayoutPage from '@/components/layout/page';
import { typeParams } from '../layout';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { redirect } from 'next/navigation';
import IntroPage from '@/components/layout/intros/page';
import LayoutSection from '@/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import { Button, Group, Stack, ThemeIcon, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { PostGet } from '@/types/models/post';
import CarouselBlog from '@/components/common/carousel/blog';
import Link from 'next/link';
import ImageDefault from '@/components/common/images/default';
import { postsGet } from '@/services/database/posts';
import ErrorMain from '@/components/partials/errors/main';
import { linkify } from '@/utilities/formatters/string';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const { data: posts, error } = await postsGet();

  if (error) throw error;
  if (posts == null) return [];

  return posts.map((post) => ({
    'postTitle-postId': `${linkify(post.title)}-${post.id}`,
  }));
}

export default async function Post({ params }: { params: typeParams }) {
  const { data: posts, error } = await postsGet();

  if (error) {
    console.error(error);
    return <ErrorMain />;
  }

  if (posts == null) {
    console.error('Posts is null');
    return <ErrorMain />;
  }

  const paramValues = (await params)['postTitle-postId'];
  const postId = extractUuidFromParam(paramValues);
  const post: PostGet | undefined = posts.find((p) => p.id == postId);

  if (!post) redirect('/404');

  return (
    <LayoutPage>
      <IntroPage props={{ title: post?.title }} />

      <LayoutSection id="media" containerized={false} pr={'0.5rem'}>
        <ImageDefault
          src={post.cover}
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

      <LayoutSection id="content">
        <Stack>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Stack>
      </LayoutSection>

      <LayoutSection id="similar" padded={SECTION_SPACING * 1.5}>
        <Stack gap={SECTION_SPACING}>
          <Group justify="space-between">
            <Title order={2} fz={'var(--mantine-h1-font-size)'} lh={1}>
              Similar Publications:
            </Title>

            <Button
              size="md"
              color="gray"
              variant="light"
              radius={'xl'}
              component={Link}
              href={'/blog'}
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
          </Group>

          <CarouselBlog
            posts={posts.filter((p) => p.id != postId) as PostGet[]}
          />
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
