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
  Grid,
  GridCol,
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
      <LayoutSection id={'about'} padded={SECTION_SPACING}>
        <IntroSection
          options={{ alignment: 'start', spacing: true }}
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
                maw={{ xs: '66%', sm: '50%', md: '66%', lg: '50%', xl: '33%' }}
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

        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12 }}>
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

          <GridCol span={{ base: 12 }} pl={{ lg: 'xl' }}>
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

                <Text inherit fz={{ base: 'md', sm: 'xl' }} maw={{ md: '80%' }}>
                  {s.label}
                </Text>
              </Stack>
            </React.Fragment>
          ))}
        </Flex>
      </LayoutSection>
    </>
  );
}

const stats = [
  { value: '4 +', label: 'Years Of Experience' },
  { value: '50 +', label: 'Complete Projects' },
  { value: '90% +', label: 'Client Satisfactions' },
];
