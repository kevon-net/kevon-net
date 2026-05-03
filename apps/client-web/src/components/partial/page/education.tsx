import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import IntroSection from '@repo/components/layout/intros/section';
import ImageDefault from '@repo/components/common/images/default';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { Grid, GridCol, Group, Title } from '@mantine/core';
import TimelineCv from '@/components/common/timelines/cv';
import { timeline } from '@/data/timeline';
import { images } from '@repo/constants/images';

export default function Education() {
  return (
    <LayoutSection
      id={'experience'}
      py={{ base: SECTION_SPACING * 2, md: SECTION_SPACING }}
    >
      <IntroSection
        options={{ alignment: 'start', spacing: true }}
        props={{
          title: (
            <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
              Education
              {/* <Text component="span" inherit fw={'100'}>
                    Kevon&apos;s
                  </Text>{' '}
                  History */}
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
              src={images.cv.light.landscape}
              height={{ md: 360, lg: 480 }}
              width={'100%'}
              alt={'business card'}
              mode="wide"
              style={{ transform: 'scale(1.25)' }}
            />
          </Group>
        </GridCol>

        <GridCol span={{ base: 12, md: 7 }} pl={{ lg: 'xl' }}>
          <TimelineCv
            props={{
              list: timeline.education,
              active: timeline.education.length - 3,
            }}
          />
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}
