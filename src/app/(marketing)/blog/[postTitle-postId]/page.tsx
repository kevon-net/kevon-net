import React from 'react';
import LayoutPage from '@/components/layout/page';
import { typeParams } from '../layout';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { redirect } from 'next/navigation';
import { blog } from '@/data/blog';
import IntroPage from '@/components/layout/intros/page';
import LayoutSection from '@/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import {
  Button,
  Grid,
  GridCol,
  Group,
  Stack,
  ThemeIcon,
  Title,
} from '@mantine/core';
import CardPost from '@/components/common/cards/post';
import { IconArrowRight } from '@tabler/icons-react';

export default async function Post({ params }: { params: typeParams }) {
  const paramValues = (await params)['postTitle-postId'];
  const postId = extractUuidFromParam(paramValues);
  const post = blog.find((p) => p.id == postId);

  if (!post) redirect('/404');

  return (
    <LayoutPage>
      <IntroPage props={{ title: post?.title }} />

      <LayoutSection id="content" margined={SECTION_SPACING * 1.5}>
        {post.content}
      </LayoutSection>

      <LayoutSection id="similar" margined={SECTION_SPACING * 1.5}>
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

          <Grid gutter={'xl'}>
            {blog.map(
              (p, i) =>
                i < 3 && (
                  <GridCol key={i} span={{ base: 12, md: 4 }}>
                    <CardPost props={p} />
                  </GridCol>
                )
            )}
          </Grid>
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
