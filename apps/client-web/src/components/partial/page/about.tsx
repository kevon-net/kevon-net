import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@/assets/images';
import IntroSection from '@repo/components/layout/intros/section';
import CardAbout from '@/components/common/cards/about';

export default function About() {
  return (
    <>
      <LayoutSection
        id={'about'}
        py={{ base: SECTION_SPACING * 2 }}
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
            src={images.banner}
            height={{ base: 120, xs: 150, sm: 190, md: 165, lg: 200, xl: 250 }}
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
            bottom={{ base: -90, xs: -120 }}
            left={{
              base: '2.5vw',
              xs: '8vw',
              md: '6vw',
              xl: '8vw',
            }}
          >
            <ImageDefault
              src={images.me}
              alt={'kevon'}
              height={{
                base: 180,
                xs: 200,
                sm: 220,
                md: 200,
                lg: 220,
              }}
              width={{ base: 180, xs: 200, sm: 220, md: 200, lg: 220 }}
              mode="wide"
              radius={'50%'}
              style={{
                border: '8px solid var(--mantine-color-gray-light)',
              }}
            />
          </Group>
        </LayoutSection>

        <LayoutSection id={'about-content'}>
          <Grid gutter={{ base: 'md', xs: 'xl' }}>
            <GridCol span={{ base: 12, xs: 6 }} order={{ base: 2, xs: 2 }}>
              <Text>
                Hi there! I&apos;m Kevon Kibochi, a native Kenyan driven by
                innovation and a passion for technical and creative expression.
                My journey into the digital realm began with a deep interest in
                the intersection of design and technology, and over the years, I
                developed a keen interest in harnessing technology to improve
                our digital lives.
              </Text>
            </GridCol>

            <GridCol span={{ base: 12, xs: 6 }} order={{ base: 1, xs: 2 }}>
              <Box
                pos={{ xs: 'relative' }}
                bottom={{ sm: 90, lg: 110 }}
                h={{ sm: 290, lg: 310 }}
                w={'100%'}
                px={{ sm: 'md', md: 0, lg: 'xl' }}
              >
                <CardAbout />
              </Box>
            </GridCol>

            <GridCol span={{ base: 12, xs: 6 }} order={3}>
              <Text>
                What sets me apart is not just my technical expertise but also
                my commitment to sharing great ideas that elevate the digital
                presence of my clients. I believe that collaboration and
                creativity are the cornerstones of progress, and I am dedicated
                to bringing a fresh perspective to every project I undertake.
              </Text>
            </GridCol>

            <GridCol span={{ base: 12, xs: 6 }} order={4}>
              <Text>
                My academic pursuit led me to Chuka University, where I delved
                into the world of code and digital art. It was here that my
                creative instincts flourished, and I discovered the power of
                merging artistic concepts with the limitless possibilities of
                the digital landscape.
              </Text>
            </GridCol>

            <GridCol span={12} order={5}>
              <Text>
                Fuelled by appreciation for both art and technology, I embarked
                on a career path that seamlessly blends these two worlds.
                Currently, I offer Web Design and Development and Digital
                Marketing services to ambitious companies and individuals
                brimming with incredible potential for success. Whether
                it&apos;s crafting visually captivating websites or devising
                innovative digital marketing strategies, I thrive on
                transforming ideas into impactful digital experiences.
              </Text>
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

                  <Text
                    inherit
                    fz={{ base: 'md', sm: 'xl', md: 'md', lg: 'xl' }}
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
