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
import ImageDefault from '@/components/common/images/default';
import {
  Button,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { getRegionalDate } from '@/utilities/formatters/date';
import {
  IconArrowLeft,
  IconArrowRight,
  IconExternalLink,
} from '@tabler/icons-react';
import Link from 'next/link';
import { linkify } from '@/utilities/formatters/string';
import CtaProject from '@/components/cta/project';
import { projectsGet } from '@/services/database/projects';
import ErrorMain from '@/components/partials/errors/main';
import { CategoryLink } from '@/components/common/cards/project';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const { data: projects, error } = await projectsGet();

  if (error) throw error;
  if (projects == null) return [];

  return projects.map((p) => ({
    'projectTitle-projectId': `${linkify(p.title)}-${p.id}`,
  }));
}

export default async function Project({ params }: { params: typeParams }) {
  const { data: projects, error } = await projectsGet();

  if (error) {
    console.error(error);
    return <ErrorMain />;
  }

  if (projects == null) {
    console.error('Projects is null');
    return <ErrorMain />;
  }

  const paramValues = (await params)['projectTitle-projectId'];
  const projectId = extractUuidFromParam(paramValues);
  const project = projects.find((p) => p.id == projectId);

  if (!project) redirect('/404');

  const projectIndex = projects.indexOf(project);

  return (
    <LayoutPage>
      <IntroPage
        props={{ title: project.title, desc: project.desc }}
        options={{ alignment: 'start' }}
      />

      <LayoutSection id="intro-meta">
        <Divider />
      </LayoutSection>

      <LayoutSection id="meta" padded={SECTION_SPACING}>
        <Grid
          align="center"
          tt={'uppercase'}
          fz={'xs'}
          lts={2}
          gutter={{ base: 'xl', xs: 'md' }}
        >
          <GridCol span={{ base: 12, xs: 4 }}>
            <Flex direction={'column'} align={{ base: 'start' }} gap={'md'}>
              <Text inherit fz={'lg'} fw={500}>
                Client
              </Text>

              <Text component="span" inherit c={'var(--mantine-color-dark-0)'}>
                {project.client}
              </Text>
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, xs: 4 }}>
            <Flex direction={'column'} align={{ base: 'start' }} gap={'md'}>
              <Text inherit fz={'lg'} fw={500}>
                Category
              </Text>

              <CategoryLink project={project} height={18.6} />
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, xs: 4 }}>
            <Flex direction={'column'} align={{ base: 'start' }} gap={'md'}>
              <Text inherit fz={'lg'} fw={500}>
                Date
              </Text>

              <Text component="span" inherit c={'var(--mantine-color-dark-0)'}>
                {getRegionalDate(project.created_at).date}
              </Text>
            </Flex>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="media" containerized={false} pr={'0.5rem'}>
        <ImageDefault
          src={project.cover}
          alt={project.title}
          height={{ base: 280, xs: 360, sm: 480, md: 400, lg: 480, xl: 520 }}
          width={'100%'}
          mode="wide"
          style={{
            borderTopRightRadius: 'var(--mantine-radius-sm)',
            borderBottomRightRadius: 'var(--mantine-radius-sm)',
          }}
        />
      </LayoutSection>

      <LayoutSection id="actions" margined={SECTION_SPACING}>
        <Group justify={'center'}>
          {project.repo_link && (
            <Button
              size="xs"
              color="pri"
              variant="solid"
              w={{ md: 180 }}
              fw={'normal'}
              component="a"
              href={project.repo_link}
              target="_blank"
              rightSection={
                <IconExternalLink
                  size={ICON_SIZE / 1.5}
                  stroke={ICON_STROKE_WIDTH}
                />
              }
            >
              Repository
            </Button>
          )}

          {project.preview_link && (
            <Button
              size="xs"
              color="gray"
              variant="light"
              w={{ md: 180 }}
              fw={'normal'}
              component="a"
              href={project.preview_link}
              target="_blank"
              rightSection={
                <IconExternalLink
                  size={ICON_SIZE / 1.5}
                  stroke={ICON_STROKE_WIDTH}
                />
              }
            >
              Live Preview
            </Button>
          )}
        </Group>
      </LayoutSection>

      <LayoutSection id="content" margined={SECTION_SPACING}>
        <div dangerouslySetInnerHTML={{ __html: project.content }} />
      </LayoutSection>

      <LayoutSection id="nav" margined={SECTION_SPACING}>
        <Group justify="space-between">
          <Button
            size="lg"
            color="gray"
            variant="light"
            radius={'xl'}
            fw={'normal'}
            component={projectIndex == 0 ? undefined : Link}
            disabled={projectIndex == 0}
            href={
              projectIndex == 0
                ? '#'
                : `/projects/${linkify(projects[projectIndex - 1].title)}-${projects[projectIndex - 1].id}`
            }
            leftSection={
              <ThemeIcon
                size={ICON_WRAPPER_SIZE}
                color="gray"
                variant="light"
                radius={'xl'}
                visibleFrom="xs"
              >
                <IconArrowLeft
                  size={ICON_SIZE}
                  stroke={ICON_STROKE_WIDTH * 1.5}
                />
              </ThemeIcon>
            }
          >
            Prev
          </Button>

          <Button
            size="lg"
            color="gray"
            variant="light"
            radius={'xl'}
            fw={'normal'}
            component={Link}
            href={'/projects'}
            visibleFrom="xs"
          >
            All Projects
          </Button>

          <Button
            size="lg"
            color="gray"
            variant="light"
            radius={'xl'}
            fw={'normal'}
            component={projectIndex == projects.length - 1 ? undefined : Link}
            disabled={projectIndex == projects.length - 1}
            href={
              projectIndex == projects.length - 1
                ? '#'
                : `/projects/${linkify(projects[projectIndex + 1].title)}-${projects[projectIndex + 1].id}`
            }
            rightSection={
              <ThemeIcon
                size={ICON_WRAPPER_SIZE}
                color="gray"
                variant="light"
                radius={'xl'}
                visibleFrom="xs"
              >
                <IconArrowRight
                  size={ICON_SIZE}
                  stroke={ICON_STROKE_WIDTH * 1.5}
                />
              </ThemeIcon>
            }
          >
            Next
          </Button>
        </Group>
      </LayoutSection>

      <CtaProject />
    </LayoutPage>
  );
}
