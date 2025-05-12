import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Grid, GridCol, Group, Title } from '@mantine/core';
import { blog } from '@/data/blog';
import CardPost from '@/components/common/cards/post';
import PaginationBlog from '@/components/common/pagination/blog';
import IntroSection from '@/components/layout/intros/section';

export default function Blog() {
  return (
    <LayoutSection id={'blog'} margined={SECTION_SPACING}>
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
        }}
      />

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

      <Group justify="center" mt={SECTION_SPACING}>
        <PaginationBlog props={{ list: blog.concat(blog).concat(blog) }} />
      </Group>
    </LayoutSection>
  );
}
