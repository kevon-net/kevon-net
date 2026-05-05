'use client';

import React from 'react';
import {
  Anchor,
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Overlay,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { getRegionalDate } from '@repo/utilities/date-time';
import { linkify } from '@repo/utilities/url';
import { ProjectGet } from '@repo/types/models/project';
import NextLink from '@repo/components/common/anchor/next-link';
import { IconArrowRight, IconExternalLink } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import WrapperUnderlayBlur from '@repo/components/wrappers/underlays/blur';

export default function Project({ project }: { project: ProjectGet }) {
  const link = `/projects/${linkify(project.title)}-${project.id}`;

  return (
    <Card h={'100%'} bg={'transparent'} padding={0} withBorder>
      {/* <BackgroundImage pos={'relative'} src={project.image} c={'var(--mantine-color-white)'}> */}
      {/* <WrapperUnderlayBlur props={{ blur: 16 }}> */}
      {/* <Overlay backgroundOpacity={0.2} style={{ zIndex: 0 }} /> */}

      <Stack
        p={{ base: 'md', xs: 'xl' }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Group>
          <NextLink href={link} pos="relative">
            <Title order={3}>{project.title}</Title>
          </NextLink>
        </Group>

        <Box mih={50}>
          <Text inherit>{project.description}</Text>
        </Box>

        <Divider
          // color="var(--mantine-color-white)"
          // opacity={0.3}
          my={'sm'}
        />

        <Text inherit>{project.highlight}</Text>

        <Divider
          // color="var(--mantine-color-white)"
          // opacity={0.3}
          my={'sm'}
        />

        <Group gap={'xs'} maw={{ md: '50%', xl: '70%' }} mih={62} align="start">
          {project.tech.map((t, i) => (
            <Badge
              key={i}
              variant="light"
              // color="var(--mantine-color-white)"
              tt={'none'}
              size="lg"
              // style={{ boxShadow: 'var(--mantine-shadow-xs)' }}
            >
              {t}
            </Badge>
          ))}
        </Group>

        <Group mt={{ md: SECTION_SPACING }}>
          <NextLink href={`/projects/${linkify(project.title)}-${project.id}`}>
            <Button
              // color="white"
              // variant="light"
              rightSection={
                <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
            >
              View Case Study
            </Button>
          </NextLink>
        </Group>
      </Stack>
      {/* </WrapperUnderlayBlur> */}
      {/* </BackgroundImage> */}
    </Card>
  );
}

{
  /* <Group mt={{ md: SECTION_SPACING }}>
              <Anchor href={project.live_link || ''} target="_blank">
                <Button
                  // size="xs"
                  // color="dark"
                  rightSection={
                    <IconExternalLink
                      size={ICON_SIZE}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                >
                  View Project
                </Button>
              </Anchor>

              <Anchor href={project.repo_link || ''} target="_blank">
                <Button
                  // size="xs"
                  color="white"
                  variant="outline"
                  rightSection={
                    <IconExternalLink
                      size={ICON_SIZE}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                >
                  View Source Code
                </Button>
              </Anchor>
            </Group> */
}
