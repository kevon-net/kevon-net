'use client';

import React from 'react';
import LayoutSection from '@/components/layout/section';
import { Divider, Group, Stack } from '@mantine/core';
import CardProject from '@/components/common/cards/project';
import { ProjectGet } from '@/types/models/project';
import { SECTION_SPACING } from '@/data/constants';
import { usePaginate } from '@/hooks/paginate';
import PaginationMain from '@/components/common/pagination/main';

export default function ProjectsList({ projects }: { projects: ProjectGet[] }) {
  const pageSize = 5;
  const { items, activePage, setActivePage } = usePaginate(projects, pageSize);

  return (
    <LayoutSection id={'blog-list'} pb={SECTION_SPACING}>
      <Stack>
        {items.map((p, i) => (
          <Stack key={i}>
            {i > 0 && <Divider my={SECTION_SPACING} />}
            <CardProject project={p as ProjectGet} />
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
