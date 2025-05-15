'use client';

import { useSupabaseQuery } from '@/hooks/fetch';
import React from 'react';
import LayoutSection from '@/components/layout/section';
import { Divider, Group, Loader, Pagination, Stack, Text } from '@mantine/core';
import CardPost from '@/components/common/cards/post';
import { PostGet } from '@/types/models/post';
import { SECTION_SPACING } from '@/data/constants';
import { usePaginate } from '@/hooks/paginate';
import classes from './blog-list.module.scss';

export default function BlogList() {
  const { data: posts, loading, error } = useSupabaseQuery('posts');
  const pageSize = 5;

  const { items, activePage, setActivePage } = usePaginate(
    posts || [],
    pageSize
  );

  if (error) {
    console.error(error);
    return <Text>Failed to load posts.</Text>;
  }

  return (
    <LayoutSection id={'blog-contact'} pb={SECTION_SPACING}>
      {loading ? (
        <Loader color="var(--mantine-color-gray-light)" type="dots" />
      ) : (
        posts != null && (
          <Stack>
            {items.map((post, i) => (
              <Stack key={i}>
                {i > 0 && <Divider my={SECTION_SPACING} />}
                <CardPost props={post as PostGet} />
              </Stack>
            ))}

            {posts && posts.length > pageSize && (
              <Group justify="center" py={SECTION_SPACING}>
                <Pagination
                  classNames={classes}
                  total={(posts || []).length}
                  value={activePage}
                  onChange={setActivePage}
                />
              </Group>
            )}
          </Stack>
        )
      )}
    </LayoutSection>
  );
}
