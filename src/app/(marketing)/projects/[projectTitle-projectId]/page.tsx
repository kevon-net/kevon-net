import React from 'react';
import LayoutPage from '@/components/layout/page';
import { typeParams } from '../layout';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { redirect } from 'next/navigation';
import IntroPage from '@/components/layout/intros/page';
import { categories, portfolioProjects } from '@/data/projects';
import LayoutSection from '@/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import ImageDefault from '@/components/common/images/default';
import { Button, Divider, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { getRegionalDate } from '@/utilities/formatters/date';
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandGithub,
  IconWorldWww,
} from '@tabler/icons-react';
import Link from 'next/link';
import { linkify } from '@/utilities/formatters/string';
import CtaProject from '@/components/cta/project';

export default async function Project({ params }: { params: typeParams }) {
  const paramValues = (await params)['projectTitle-projectId'];
  const projectId = extractUuidFromParam(paramValues);
  const project = portfolioProjects.find((p) => p.id == projectId);
  const category =
    categories.find((c) => c.id == project?.categoryId) || categories[0];

  if (!project) redirect('/404');

  const projectIndex = portfolioProjects.indexOf(project);

  return (
    <LayoutPage>
      <IntroPage
        props={{ title: project?.name }}
        options={{ alignment: 'start' }}
      />

      <LayoutSection id="content" my={SECTION_SPACING * 1.5}>
        <Stack gap={SECTION_SPACING / 1.25}>
          <ImageDefault
            src={project.cover}
            alt={project.name}
            height={720}
            width={'100%'}
            mode="wide"
          />

          <Group justify="space-between" tt={'uppercase'} fz={'xs'} lts={2}>
            <Text inherit>
              Date:{' '}
              <Text
                component="span"
                inherit
                c={'var(--mantine-color-pri-6)'}
                fw={500}
              >
                {getRegionalDate(project.date).date}
              </Text>
            </Text>

            <Group gap={0}>
              <Button
                radius={0}
                size="xs"
                color="pri"
                variant="solid"
                w={{ md: 180 }}
                fw={'normal'}
                component="a"
                href={project.repoUrl}
                target="_blank"
                leftSection={
                  <IconBrandGithub
                    size={ICON_SIZE}
                    stroke={ICON_STROKE_WIDTH}
                  />
                }
              >
                Repository
              </Button>
              <Button
                radius={0}
                size="xs"
                color="gray"
                variant="light"
                w={{ md: 180 }}
                fw={'normal'}
                component="a"
                href={project.liveUrl}
                target="_blank"
                leftSection={
                  <IconWorldWww size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
              >
                Live Preview
              </Button>
            </Group>

            <Text inherit>
              Category:{' '}
              <Text
                component="span"
                inherit
                c={'var(--mantine-color-pri-6)'}
                fw={500}
              >
                {category?.title}
              </Text>
            </Text>
          </Group>

          <Divider />
        </Stack>
      </LayoutSection>

      <LayoutSection id="content" my={SECTION_SPACING * 1.5}>
        <Stack gap={SECTION_SPACING / 1.25}>
          <div>gallery</div>
          <div>description</div>
        </Stack>
      </LayoutSection>

      <LayoutSection id="nav" my={SECTION_SPACING * 1.5}>
        <Stack gap={SECTION_SPACING / 1.25}>
          <Divider />

          <Group justify="space-between">
            <Button
              size="lg"
              color="gray"
              variant="transparent"
              radius={'xl'}
              fw={'normal'}
              component={projectIndex == 0 ? undefined : Link}
              disabled={projectIndex == 0}
              href={
                projectIndex == 0
                  ? '#'
                  : `/projects/${linkify(portfolioProjects[projectIndex - 1].name)}-${portfolioProjects[projectIndex - 1].id}`
              }
              leftSection={
                <ThemeIcon
                  size={ICON_WRAPPER_SIZE}
                  color="gray"
                  variant="light"
                  radius={'xl'}
                >
                  <IconArrowLeft
                    size={ICON_SIZE}
                    stroke={ICON_STROKE_WIDTH * 1.5}
                  />
                </ThemeIcon>
              }
            >
              Prev Project
            </Button>

            <Button
              size="lg"
              color="gray"
              variant="transparent"
              radius={'xl'}
              fw={'normal'}
              component={Link}
              href={'/projects'}
            >
              All Projects
            </Button>

            <Button
              size="lg"
              color="gray"
              variant="transparent"
              radius={'xl'}
              fw={'normal'}
              component={
                projectIndex == portfolioProjects.length - 1 ? undefined : Link
              }
              disabled={projectIndex == portfolioProjects.length - 1}
              href={
                projectIndex == portfolioProjects.length - 1
                  ? '#'
                  : `/projects/${linkify(portfolioProjects[projectIndex + 1].name)}-${portfolioProjects[projectIndex + 1].id}`
              }
              rightSection={
                <ThemeIcon
                  size={ICON_WRAPPER_SIZE}
                  color="gray"
                  variant="light"
                  radius={'xl'}
                >
                  <IconArrowRight
                    size={ICON_SIZE}
                    stroke={ICON_STROKE_WIDTH * 1.5}
                  />
                </ThemeIcon>
              }
            >
              Next Project
            </Button>
          </Group>
        </Stack>
      </LayoutSection>

      <CtaProject />
    </LayoutPage>
  );
}
