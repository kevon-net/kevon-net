'use client';

import React from 'react';
import LayoutSection from '@/components/layout/section';
import { Divider, Group, Stack } from '@mantine/core';
import CardPost from '@/components/common/cards/post';
import { PostGet } from '@/types/models/post';
import { SECTION_SPACING } from '@/data/constants';
import { usePaginate } from '@/hooks/paginate';
import PaginationMain from '@/components/common/pagination/main';

export default function BlogList({ posts }: { posts: PostGet[] }) {
  const pageSize = 5;
  const { items, activePage, setActivePage } = usePaginate(posts, pageSize);

  return (
    <LayoutSection id={'blog-contact'} pb={SECTION_SPACING}>
      <Stack>
        {items.map((p, i) => (
          <Stack key={i}>
            {i > 0 && <Divider my={SECTION_SPACING} />}
            <CardPost props={p as PostGet} />
          </Stack>
        ))}

        {posts && posts.length > pageSize && (
          <Group justify="center" py={SECTION_SPACING}>
            <PaginationMain
              total={(posts || []).length}
              value={activePage}
              onChange={setActivePage}
            />
          </Group>
        )}
      </Stack>
    </LayoutSection>
  );
}
