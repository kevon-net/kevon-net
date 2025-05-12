import React from 'react';
import LayoutPage from '@/components/layout/page';
import IntroPage from '@/components/layout/intros/page';
import NavbarMain from '@/components/layout/navbars/main';
import {
  ActionIcon,
  Button,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Progress,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { images } from '@/assets/images';
import TimelineCv from '@/components/common/timelines/cv';
import IntroSection from '@/components/layout/intros/section';
import { timeline } from '@/data/timeline';
import ImageDefault from '@/components/common/images/default';
import CarouselClients from '@/components/common/carousel/clients';
import {
  IconArrowDown,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { FONT_SIZE, SECTION_SPACING } from '@/data/constants';
import { services } from '@/data/services';
import FormContact from '@/components/form/contact';
import IframeContact from '@/components/common/iframes/contact';
import CardPost from '@/components/common/cards/post';
import PaginationBlog from '@/components/common/pagination/blog';
import { blog } from '@/data/blog';
import { portfolioProjects } from '@/data/projects';
import CardProject from '@/components/common/cards/project';
import { chunkArray } from '@/utilities/helpers/array';

export default function Home() {
  const projects = chunkArray(portfolioProjects, 2);

  return (
    <LayoutPage>
      <Stack mih={'100vh'} justify="space-between">
        <NavbarMain />

        <IntroPage
          props={{
            path: null,
            title: (
              <Title order={1} fz={FONT_SIZE.TITLE_PAGE}>
                Modern{' '}
                <Text component="span" inherit fw={'100'}>
                  web solutions
                </Text>
                <br />
                one line of code{' '}
                <Text component="span" inherit fw={'100'}>
                  at a time
                </Text>
              </Title>
            ),
            desc: (
              <Text
                w={{ base: '90%', xs: '75%', sm: '50%', lg: '33%' }}
                fz={'md'}
                c={'dimmed'}
                mt={'md'}
              >
                Welcome to my world of imagination and creativity. Let&apos;s
                turn bold ideas into real-world experiences.
              </Text>
            ),
          }}
          options={{ alignment: 'start' }}
        />

        <LayoutSection id={'cta-1'} pb={SECTION_SPACING * 2}>
          <Group gap={'xs'}>
            <Button
              size="lg"
              radius={'xl'}
              component={Link}
              href={'/about'}
              rightSection={
                <ThemeIcon
                  size={ICON_WRAPPER_SIZE}
                  variant="white"
                  radius={'xl'}
                  visibleFrom="xs"
                >
                  <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ThemeIcon>
              }
            >
              What I Do
            </Button>

            <Button
              size="lg"
              radius={'xl'}
              component={Link}
              href={'/projects'}
              color="gray"
              variant="transparent"
              rightSection={
                <ThemeIcon
                  size={ICON_WRAPPER_SIZE}
                  color="gray"
                  variant="light"
                  radius={'xl'}
                >
                  <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ThemeIcon>
              }
            >
              View Works
            </Button>
          </Group>
        </LayoutSection>

        {/* about */}

        <LayoutSection id={'about'} my={SECTION_SPACING * 1.5}>
          <Grid gutter={'xl'} align="center">
            <GridCol span={{ base: 12, sm: 5, lg: 4 }}>
              <Group>
                <ImageDefault
                  src={images.me}
                  alt={'kevon'}
                  height={{ base: 320, sm: 280, md: 360, lg: 400 }}
                  width={{ base: '100%', xs: 360, sm: '100%' }}
                  mode="wide"
                  style={{
                    border: '8px solid var(--mantine-color-gray-light)',
                  }}
                />
              </Group>
            </GridCol>

            <GridCol span={{ base: 12, sm: 7, lg: 8 }} pl={{ lg: 'xl' }}>
              <Flex
                direction={'column'}
                gap={{ base: 'xl', lg: SECTION_SPACING / 1.5 }}
              >
                <Text
                  fz={{
                    base: 'md',
                    md: 'var(--mantine-h3-font-size)',
                    lg: 'var(--mantine-h2-font-size)',
                  }}
                >
                  Kevon Kibochi is a seasoned UX designer with over 8 years of
                  experience in crafting intuitive and engaging digital
                  experiences. His journey began with a background in graphic
                  design, where he discovered his passion for understanding user
                  behavior and translating it into seamless interactions.
                </Text>

                <Flex gap={'md'} align={'center'}>
                  <Button
                    size="lg"
                    color="gray"
                    variant="light"
                    radius={'xl'}
                    rightSection={
                      <ThemeIcon
                        size={ICON_WRAPPER_SIZE}
                        color="gray"
                        variant="light"
                        radius={'xl'}
                      >
                        <IconArrowDown
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>
                    }
                  >
                    <Text component="span" inherit visibleFrom="xs">
                      Download CV
                    </Text>
                    <Text component="span" inherit hiddenFrom="xs">
                      CV
                    </Text>
                  </Button>

                  <ActionIcon
                    size={ICON_WRAPPER_SIZE * 1.5}
                    radius={'xl'}
                    color="gray"
                    variant="light"
                  >
                    <IconBrandGithub
                      size={ICON_SIZE * 1.25}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </ActionIcon>

                  <ActionIcon
                    size={ICON_WRAPPER_SIZE * 1.5}
                    radius={'xl'}
                    color="gray"
                    variant="light"
                  >
                    <IconBrandLinkedin
                      size={ICON_SIZE * 1.25}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
            </GridCol>
          </Grid>
        </LayoutSection>

        <LayoutSection
          id={'cv'}
          mt={SECTION_SPACING * 1.5}
          pb={SECTION_SPACING * 1.5}
          bordered
        >
          <Flex
            direction={{ base: 'column', xs: 'row' }}
            align={{ base: 'stretch', xs: 'center' }}
            justify={{ xs: 'space-between' }}
            wrap="nowrap"
          >
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                {stats.indexOf(s) > 0 && (
                  <Divider orientation="vertical" visibleFrom="xs" />
                )}
                {stats.indexOf(s) > 0 && (
                  <Divider orientation="horizontal" hiddenFrom="xs" my={'xl'} />
                )}

                <Stack
                  key={i}
                  ta={'center'}
                  align="center"
                  gap={'xs'}
                  w={{ xs: `${100 / stats.length}%` }}
                >
                  <Text
                    inherit
                    component="span"
                    fz={{ base: '2rem', sm: '3rem' }}
                    fw={'bold'}
                    lh={1}
                  >
                    {s.value}
                  </Text>

                  <Text inherit fz={{ base: 'md', sm: 'xl' }}>
                    {s.label}
                  </Text>
                </Stack>
              </React.Fragment>
            ))}
          </Flex>
        </LayoutSection>

        <LayoutSection id={'cv'} padded={SECTION_SPACING * 1.5} bordered>
          <Stack gap={SECTION_SPACING}>
            <IntroSection
              props={{
                subTitle: 'Experience',
                title: (
                  <Title
                    order={2}
                    ta={'center'}
                    fw={500}
                    fz={'var(--mantine-h1-font-size)'}
                  >
                    <Text component="span" inherit fw={'100'}>
                      Kevon&apos;s
                    </Text>{' '}
                    History
                  </Title>
                ),
              }}
            />

            <Grid gutter={'xl'}>
              <GridCol span={{ base: 12, md: 5 }} visibleFrom="md">
                <Group
                  pos={'sticky'}
                  top={SECTION_SPACING}
                  style={{ overflow: 'hidden' }}
                >
                  <ImageDefault
                    src={images.cv.light}
                    height={{ md: 360, lg: 480 }}
                    width={'100%'}
                    alt={'business card'}
                    mode="wide"
                    style={{ transform: 'scale(1.25)' }}
                  />
                </Group>
              </GridCol>

              <GridCol span={{ base: 12, md: 7 }} pl={{ lg: 'xl' }}>
                <Grid>
                  <GridCol span={{ base: 12, md: 12 }}>
                    <TimelineCv
                      props={{
                        list: timeline.education,
                        active: timeline.education.length - 3,
                      }}
                    />
                  </GridCol>

                  <GridCol span={{ base: 12, md: 12 }}>
                    <Divider my={SECTION_SPACING / 1.5} />
                  </GridCol>

                  <GridCol span={{ base: 12, md: 12 }}>
                    <TimelineCv
                      props={{
                        list: timeline.work,
                        active: timeline.work.length - 3,
                      }}
                    />
                  </GridCol>
                </Grid>
              </GridCol>
            </Grid>
          </Stack>
        </LayoutSection>

        <LayoutSection id={'skills'} padded={SECTION_SPACING * 1.5} bordered>
          <Stack gap={SECTION_SPACING}>
            {/* <IntroSection
                    props={{
                      subTitle: 'Skills',
                      title: (
                        <Title
                          order={2}
                          ta={'center'}
                          fw={500}
                          fz={'var(--mantine-h1-font-size)'}
                        >
                          <Text component="span" inherit fw={'100'}>
                            Kevon&apos;s
                          </Text>{' '}
                          Tech Stack
                        </Title>
                      ),
                    }}
                  /> */}

            <Grid gutter={'xl'}>
              {skills.design.map((d, i) => (
                <GridCol key={i} span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
                  <Stack gap={'xs'}>
                    <Group justify="space-between">
                      <Text>{d.title}</Text>
                      {/* <Text>{d.value}%</Text> */}
                    </Group>

                    <Progress
                      radius={0}
                      size={'xs'}
                      value={d.value}
                      styles={{
                        root: {
                          backgroundColor: 'var(--mantine-color-gray-light)',
                        },
                      }}
                    />
                  </Stack>
                </GridCol>
              ))}

              <GridCol span={12}>
                <Divider my={'xl'} variant="dashed" />
              </GridCol>

              {skills.languages.map((s, i) => (
                <GridCol key={i} span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
                  <Stack gap={'xs'}>
                    <Group justify="space-between">
                      <Text>{s.title}</Text>
                      {/* <Text>{s.value}%</Text> */}
                    </Group>

                    <Progress
                      radius={0}
                      size={'xs'}
                      value={s.value}
                      styles={{
                        root: {
                          backgroundColor: 'var(--mantine-color-gray-light)',
                        },
                      }}
                    />
                  </Stack>
                </GridCol>
              ))}

              {skills.technologies.map((s, i) => (
                <GridCol key={i} span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
                  <Stack gap={'xs'}>
                    <Group justify="space-between">
                      <Text>{s.title}</Text>
                      {/* <Text>{s.value}%</Text> */}
                    </Group>

                    <Progress
                      radius={0}
                      size={'xs'}
                      value={s.value}
                      styles={{
                        root: {
                          backgroundColor: 'var(--mantine-color-gray-light)',
                        },
                      }}
                    />
                  </Stack>
                </GridCol>
              ))}
            </Grid>
          </Stack>
        </LayoutSection>

        <LayoutSection
          id={'testimonials'}
          margined={SECTION_SPACING * 1.5}
          containerized={'lg'}
          visibleFrom="md"
        >
          <IntroSection
            props={{
              title: (
                <Title
                  order={2}
                  fz={'var(--mantine-h1-font-size)'}
                  ta={'center'}
                >
                  Customer{' '}
                  <Text component="span" inherit fw={'100'}>
                    Voices:
                  </Text>
                  <br />
                  Hear What{' '}
                  <Text component="span" inherit fw={'100'}>
                    They Say
                  </Text>
                </Title>
              ),
            }}
            options={{ spacing: true }}
          />

          <CarouselClients />
        </LayoutSection>

        {/* services */}

        <LayoutSection
          id={'services'}
          mt={SECTION_SPACING * 1.5}
          pb={SECTION_SPACING * 1.5}
        >
          <Grid gutter={'xl'}>
            <GridCol span={{ base: 12, md: 5 }} visibleFrom="md">
              <Group
                pos={'sticky'}
                top={SECTION_SPACING}
                style={{ overflow: 'hidden' }}
              >
                <ImageDefault
                  src={images.card.dark.potrait}
                  height={{ md: 360, lg: 480 }}
                  width={'100%'}
                  alt={'business card'}
                  mode="wide"
                  style={{ transform: 'scale(1.33)' }}
                />
              </Group>
            </GridCol>

            <GridCol span={{ base: 12, md: 7 }} pl={{ lg: 'xl' }}>
              <Grid gutter={'xl'}>
                <GridCol span={{ base: 12, sm: 6 }}>
                  <Stack gap={SECTION_SPACING} pt={{ sm: SECTION_SPACING }}>
                    {services.map(
                      (s, i) =>
                        i % 2 == 0 && (
                          <Stack key={i}>
                            <Stack w={{ lg: '80%' }}>
                              <Title order={2}>{s.title}</Title>
                              <Text>{s.desc}</Text>
                            </Stack>

                            <Stack mt={'md'}>
                              {s.subServices.map((ss, j) => (
                                <React.Fragment key={j}>
                                  {s.subServices.indexOf(ss) > 0 && <Divider />}
                                  <Text>{ss.title}</Text>
                                </React.Fragment>
                              ))}
                            </Stack>
                          </Stack>
                        )
                    )}
                  </Stack>
                </GridCol>

                <GridCol span={{ base: 12, sm: 6 }}>
                  <Stack
                    gap={SECTION_SPACING}
                    mt={{ base: SECTION_SPACING, sm: 0 }}
                  >
                    {services.map(
                      (s, i) =>
                        i % 2 != 0 && (
                          <Stack key={i}>
                            <Stack w={{ lg: '80%' }}>
                              <Title order={2}>{s.title}</Title>
                              <Text>{s.desc}</Text>
                            </Stack>

                            <Stack mt={'md'}>
                              {s.subServices.map((ss, j) => (
                                <React.Fragment key={j}>
                                  {s.subServices.indexOf(ss) > 0 && <Divider />}
                                  <Text>{ss.title}</Text>
                                </React.Fragment>
                              ))}
                            </Stack>
                          </Stack>
                        )
                    )}
                  </Stack>
                </GridCol>
              </Grid>
            </GridCol>
          </Grid>
        </LayoutSection>

        {/* contact */}

        <LayoutSection id={'map'} h={400} containerized={false}>
          <IframeContact />
        </LayoutSection>

        <LayoutSection
          id={'contact-form'}
          containerized={'md'}
          padded={SECTION_SPACING * 1.5}
        >
          <IntroSection
            props={{
              title: (
                <Title
                  order={2}
                  ta={'center'}
                  fw={500}
                  fz={'var(--mantine-h1-font-size)'}
                >
                  Let&apos;s{' '}
                  <Text component="span" inherit fw={'100'}>
                    Talk
                  </Text>
                </Title>
              ),
            }}
            options={{ spacing: true }}
          />

          <FormContact />
        </LayoutSection>

        {/* blog */}

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
              <PaginationBlog
                props={{ list: blog.concat(blog).concat(blog) }}
              />
            </Group>
          </Stack>
        </LayoutSection>

        {/* projects */}

        <LayoutSection
          id={'projects'}
          mt={SECTION_SPACING * 1.5}
          pb={SECTION_SPACING * 1.5}
          bordered
        >
          <Grid gutter={{ base: 'xl', md: 0 }}>
            {projects.map((c, ci) => (
              <GridCol key={ci} span={12}>
                <Grid gutter={'xl'} align="center">
                  {c.map((p, i) => (
                    <GridCol
                      key={i}
                      span={{
                        base: 12,
                        sm: 6,
                        md: getOrientation(ci, i) == 'vertical' ? 5.5 : 6.5,
                        lg: getOrientation(ci, i) == 'vertical' ? 5 : 7,
                      }}
                      pr={{ md: i == 0 ? SECTION_SPACING : undefined }}
                      pl={{ md: i == 1 ? SECTION_SPACING : undefined }}
                    >
                      <CardProject
                        props={p}
                        options={{ orientation: getOrientation(ci, i) }}
                      />
                    </GridCol>
                  ))}
                </Grid>
              </GridCol>
            ))}
          </Grid>
        </LayoutSection>
      </Stack>
    </LayoutPage>
  );
}

const stats = [
  { value: '4 +', label: 'Years Of Experience' },
  { value: '50 +', label: 'Complete Projects' },
  { value: '90% +', label: 'Client Satisfactions' },
];

const skills = {
  design: [
    {
      title: 'UI / UX Design',
      value: 90,
    },
    {
      title: 'Responsive Design',
      value: 88,
    },
    {
      title: 'Wireframing / Prototyping',
      value: 86,
    },

    {
      title: 'Branding / Identity Design',
      value: 85,
    },
    {
      title: '3D Modeling / Mockups',
      value: 84,
    },
    {
      title: 'Illustration',
      value: 83,
    },
    {
      title: 'User Research / Testing',
      value: 80,
    },
    {
      title: 'Adobe Illustrator',
      value: 88,
    },
    {
      title: 'Adobe Photoshop',
      value: 80,
    },
    {
      title: 'Adobe InDesign',
      value: 86,
    },
    {
      title: 'Figma',
      value: 79,
    },
    {
      title: 'Canva',
      value: 77,
    },
  ],
  languages: [
    {
      title: 'HTML',
      value: 90,
    },
    {
      title: 'CSS / SCSS',
      value: 88,
    },
    {
      title: 'JavaScript / TypeScript',
      value: 85,
    },
    {
      title: 'React',
      value: 88,
    },
    {
      title: 'SQL',
      value: 77,
    },
  ],
  technologies: [
    {
      title: 'Node.js',
      value: 87,
    },
    {
      title: 'Vite',
      value: 90,
    },
    {
      title: 'Next.js',
      value: 85,
    },
    {
      title: 'PostgreSQL',
      value: 80,
    },
    {
      title: 'Prisma',
      value: 72,
    },
    {
      title: 'TurboPack',
      value: 68,
    },
    {
      title: 'Supabase',
      value: 80,
    },
  ],
};

const getOrientation = (index: number, subIndex: number) => {
  if (index % 2 == 0) {
    if (subIndex == 0) return 'vertical';
    else return 'horizontal';
  } else {
    if (subIndex == 0) return 'horizontal';
    else return 'vertical';
  }
};
