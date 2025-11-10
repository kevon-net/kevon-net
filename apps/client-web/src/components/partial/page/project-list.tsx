'use client';

import React from 'react';
import { Divider, Group, Stack } from '@mantine/core';
import CardProject from '@/components/common/cards/project';
import LayoutSection from '@repo/components/layout/section';
import { ProjectRelations } from '@repo/types/models/project';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { usePaginate } from '@repo/hooks/paginate';
import PaginationMain from '@repo/components/common/pagination/main';

export default function ProjectsList({
  projects,
}: {
  projects: ProjectRelations[];
}) {
  const pageSize = 5;
  const { items, activePage, setActivePage } = usePaginate(projects, pageSize);

  return (
    <LayoutSection id={'blog-list'} pb={SECTION_SPACING}>
      <Stack>
        {items.map((p, i) => (
          <Stack key={i}>
            {i > 0 && <Divider my={SECTION_SPACING} />}
            <CardProject project={p as ProjectRelations} />
          </Stack>
        ))}

        {projects && projects.length > pageSize && (
          <Group justify="center" py={SECTION_SPACING}>
            <PaginationMain
              total={(projects || []).length}
              value={activePage}
              onChange={setActivePage}
            />
          </Group>
        )}
      </Stack>
    </LayoutSection>
  );
}
