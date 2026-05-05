'use client';

import React from 'react';
import IntroPage from '@repo/components/layout/intros/page';
import LayoutSection from '@repo/components/layout/section';
import ImageDefault from '@repo/components/common/images/default';
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Loader,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import {
  IconArrowRight,
  IconBrandLinkedin,
  IconExternalLink,
  IconWorldWww,
} from '@tabler/icons-react';
import CarouselProjects from '@/components/common/carousel/projects';
import NextLink from '@repo/components/common/anchor/next-link';
import { useStoreProject } from '@repo/libraries/zustand/stores/project';
import IntroSection from '@repo/components/layout/intros/section';
import ParserHtml from '@repo/components/parsers/html';
import CardGithub from '@/components/common/cards/github';

export default function Project({ props }: { props: { projectId: string } }) {
  const { projectId } = props;
  const { projects } = useStoreProject();
  const project = projects?.find((p) => p.id == projectId);

  return (
    <>
      <LayoutSection
        id={'projects-detail'}
        pt={{ base: SECTION_SPACING }}
        containerized={false}
      >
        <IntroPage
          props={{
            title:
              projects === undefined ? (
                <Stack gap={'xs'} mih={45.9}>
                  <Skeleton h={32} w={'40%'} />
                </Stack>
              ) : !project ? null : (
                <Title
                  order={2}
                  fw={500}
                  fz={'var(--mantine-h1-font-size)'}
                  maw={{ xs: '66%', md: '60%' }}
                >
                  {project.title}
                </Title>
              ),
            desc:
              projects === undefined ? (
                <Stack gap={'xs'} mih={49.6}>
                  <Skeleton h={16} w={'50%'} />
                  <Skeleton h={16} w={'40%'} />
                </Stack>
              ) : !project ? null : (
                <Text maw={{ xs: '66%', md: '70%' }}>
                  {project?.description}
                </Text>
              ),
          }}
          options={{ alignment: 'start' }}
        />
      </LayoutSection>

      <LayoutSection
        id="content-body"
        containerized={false}
        margined={SECTION_SPACING * 2}
      >
        {projects === undefined ? (
          <LayoutSection id="loader" mih={'100vh'}>
            <Loader />
          </LayoutSection>
        ) : !project ? (
          <LayoutSection id="404">
            <Stack c={'dimmed'}>
              <Text>No project found</Text>
            </Stack>
          </LayoutSection>
        ) : (
          <>
            <LayoutSection id="media" containerized={false}>
              <ImageDefault
                src={project.image}
                alt={project.title}
                height={{
                  base: 280,
                  xs: 360,
                  sm: 480,
                  md: 560,
                  lg: 720,
                }}
                width={'100%'}
                mode="wide"
              />
            </LayoutSection>

            <LayoutSection id="content" mt={SECTION_SPACING * 2}>
              <Grid gutter={'xl'}>
                <GridCol span={{ base: 12, md: 8 }}>
                  <Box pr={{ md: 'xl', xl: SECTION_SPACING / 1 }}>
                    <ParserHtml props={{ html: project.content }} />
                  </Box>
                </GridCol>

                <GridCol span={{ base: 12, md: 4 }}>
                  <Box pos={'sticky'} top={SECTION_SPACING * 1.5}>
                    <Card
                      bg={'transparent'}
                      withBorder
                      p={{ base: 'md', md: 'xl' }}
                    >
                      <Stack gap={'xl'}>
                        <Stack>
                          <div>
                            <Title order={3} fz={'lg'}>
                              Highlight
                            </Title>
                          </div>

                          <Text fz={'sm'}>{project.highlight}</Text>
                        </Stack>

                        <Divider mt={'xs'} />

                        <Stack>
                          <div>
                            <Title order={3} fz={'lg'}>
                              Tech Stack
                            </Title>
                          </div>

                          <Group gap={'xs'} mih={62} align="start">
                            {project.tech.map((t, i) => (
                              <Badge
                                key={i}
                                variant="light"
                                tt={'none'}
                                size="lg"
                              >
                                {t}
                              </Badge>
                            ))}
                          </Group>
                        </Stack>

                        <Divider mt={'xs'} />

                        {(project.repo_link || project.live_link) && (
                          <>
                            <Stack>
                              <div>
                                <Title order={3} fz={'lg'}>
                                  Preview
                                </Title>
                              </div>

                              <Group grow>
                                {project.repo_link && (
                                  <NextLink
                                    href={project.repo_link}
                                    underline="never"
                                  >
                                    <CardGithub />
                                  </NextLink>
                                )}

                                {project.live_link && (
                                  <NextLink
                                    href={project.live_link}
                                    underline="never"
                                  >
                                    <CardLive />
                                  </NextLink>
                                )}
                              </Group>
                            </Stack>
                          </>
                        )}
                      </Stack>
                    </Card>
                  </Box>
                </GridCol>
              </Grid>
            </LayoutSection>
          </>
        )}
      </LayoutSection>

      <Divider />

      <LayoutSection
        id="similar"
        mt={SECTION_SPACING * 2}
        pb={SECTION_SPACING * 2}
      >
        <Group justify="space-between" align="start">
          <IntroSection
            options={{ alignment: 'start', spacing: true }}
            props={{
              title: (
                <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                  Other Works:
                </Title>
              ),
            }}
          />

          <NextLink href={'/projects'}>
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
          </NextLink>
        </Group>

        <CarouselProjects
          projects={projects?.filter((p) => p.id != projectId)}
        />
      </LayoutSection>
    </>
  );
}

function CardLive() {
  return (
    <Card
      padding={'lg'}
      bg={'var(--mantine-color-pri-6)'}
      c={'var(--mantine-color-white)'}
    >
      <Stack align="start">
        <Group>
          <IconWorldWww size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />

          <Title order={3} fz={'xl'}>
            Demo
          </Title>
        </Group>
      </Stack>
    </Card>
  );
}
