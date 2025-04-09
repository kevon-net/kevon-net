import React from 'react';
import LayoutPage from '@/components/layout/page';
import IntroPage from '@/components/layout/intros/page';
import LayoutSection from '@/components/layout/section';
import { blog } from '@/data/blog';
import CardPost from '@/components/common/cards/post';
import { Grid, GridCol, Group, Stack } from '@mantine/core';
import PaginationBlog from '@/components/common/pagination/blog';
import { SECTION_SPACING } from '@/data/constants';

export default async function Blog() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          title: 'My Publications',
        }}
      />

      <LayoutSection id={'grid'} padded={SECTION_SPACING * 1.5}>
        <Stack gap={SECTION_SPACING}>
          <Grid gutter={'xl'}>
            {blog.concat(blog).map(
              (p, i) =>
                i < 6 && (
                  <GridCol key={i} span={{ base: 12, md: 4 }}>
                    <CardPost props={p} />
                  </GridCol>
                )
            )}
          </Grid>

          <Group justify="center">
            <PaginationBlog props={{ list: blog.concat(blog).concat(blog) }} />
          </Group>
        </Stack>
      </LayoutSection>

      <LayoutSection id={'cta'} bg={'var(--mantine-color-gray-light)'} padded>
        cta
      </LayoutSection>
    </LayoutPage>
  );
}
