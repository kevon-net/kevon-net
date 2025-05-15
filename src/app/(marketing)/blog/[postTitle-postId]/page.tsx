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
import { createClient } from '@/libraries/supabase/server';

export default async function Post({ params }: { params: typeParams }) {
  const paramValues = (await params)['postTitle-postId'];
  const postId = extractUuidFromParam(paramValues);
  const supabase = await createClient();
  const { data: posts, error } = await supabase.from('posts').select();
  if (error) throw new Error('Could not fetch posts');

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

          {posts != null && (
            <CarouselBlog
              posts={posts.filter((p) => p.id != postId) as PostGet[]}
            />
          )}
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
