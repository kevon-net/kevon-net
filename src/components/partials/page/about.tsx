import React from 'react';
import LayoutSection from '@/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import {
  IconArrowDown,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import IntroSection from '@/components/layout/intros/section';

export default function About() {
  return (
    <>
      <LayoutSection
        id={'about'}
        py={{ base: SECTION_SPACING * 2, md: SECTION_SPACING }}
        containerized={false}
      >
        <LayoutSection id={'about-title'}>
          <IntroSection
            options={{ alignment: 'start' }}
            props={{
              title: (
                <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                  About
                  {/* <Text component="span" inherit fw={'100'}>
                            Kevon&apos;s
                          </Text>{' '}
                          History */}
                </Title>
              ),
              desc: (
                <Text
                  maw={{
                    xs: '66%',
                    sm: '50%',
                    md: '66%',
                    lg: '50%',
                    xl: '33%',
                  }}
                >
                  A quick look at who I am and{' '}
                  <Text component="span" inherit c={'pri'}>
                    what drives my work
                  </Text>{' '}
                  in web development.
                </Text>
              ),
            }}
          />
        </LayoutSection>

        <LayoutSection
          id={'about-image'}
          containerized={false}
          mt={SECTION_SPACING}
          mb={SECTION_SPACING * 2.5}
          pr={'0.5rem'}
          pos={'relative'}
        >
          <ImageDefault
            src={images.background.image3lv7ey}
            height={{ base: 180, xs: 200, sm: 260, md: 240, lg: 280, xl: 300 }}
            width={'100%'}
            alt={'business card'}
            mode="wide"
            style={{
              borderTopRightRadius: 'var(--mantine-radius-sm)',
              borderBottomRightRadius: 'var(--mantine-radius-sm)',
            }}
          />

          <Group
            pos={'absolute'}
            bottom={{ base: -90, xs: -100 }}
            left={{
              base: '25%',
              xs: 'var(--mantine-spacing-xl)',
            }}
          >
            <ImageDefault
              src={images.me}
              alt={'kevon'}
              height={{
                base: 180,
                xs: 200,
                sm: 260,
                md: 240,
              }}
              width={{ base: 180, xs: 200, sm: 260, md: 240 }}
              mode="wide"
              radius={'50%'}
              style={{
                border: '8px solid var(--mantine-color-gray-light)',
              }}
            />
          </Group>
        </LayoutSection>

        <LayoutSection id={'about-content'}>
          <Flex
            direction={'column'}
            gap={{ base: 'xl', lg: SECTION_SPACING / 1.5 }}
          >
            <Text>
              Kevon Kibochi is a seasoned UX designer with over 8 years of
              experience in crafting intuitive and engaging digital experiences.
              His journey began with a background in graphic design, where he
              discovered his passion for understanding user behavior and
              translating it into seamless interactions.
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

          <Flex
            mt={SECTION_SPACING}
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

                  <Text
                    inherit
                    fz={{ base: 'md', sm: 'xl' }}
                    maw={{ md: '80%' }}
                  >
                    {s.label}
                  </Text>
                </Stack>
              </React.Fragment>
            ))}
          </Flex>
        </LayoutSection>
      </LayoutSection>
    </>
  );
}

const stats = [
  { value: '4 +', label: 'Years Of Experience' },
  { value: '50 +', label: 'Complete Projects' },
  { value: '90% +', label: 'Client Satisfactions' },
];
