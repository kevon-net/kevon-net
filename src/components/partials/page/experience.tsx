import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Text, Title } from '@mantine/core';
import TimelineCv from '@/components/common/timelines/cv';
import IntroSection from '@/components/layout/intros/section';
import ImageDefault from '@/components/common/images/default';
import { timeline } from '@/data/timeline';
import { images } from '@/assets/images';

export default function Experience() {
  return (
    <LayoutSection
      id={'experience'}
      padded={SECTION_SPACING}
      containerized={false}
    >
      <LayoutSection id={'experience-title'}>
        <IntroSection
          options={{ alignment: 'start' }}
          props={{
            title: (
              <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                Experience
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
                Highlights from{' '}
                <Text component="span" inherit c={'pri'}>
                  my journey as a developer
                </Text>{' '}
                and the roles I&apos;ve taken on.
              </Text>
            ),
          }}
        />
      </LayoutSection>

      <LayoutSection
        id={'experience-image'}
        containerized={false}
        padded
        pr={'0.5rem'}
      >
        <ImageDefault
          src={images.cv.light}
          height={{ base: 360, xs: 400, sm: 520, md: 480, lg: 560, xl: 600 }}
          width={'100%'}
          alt={'business card'}
          mode="wide"
          style={{
            borderTopRightRadius: 'var(--mantine-radius-sm)',
            borderBottomRightRadius: 'var(--mantine-radius-sm)',
          }}
        />
      </LayoutSection>

      <LayoutSection id={'experience-content'}>
        <TimelineCv
          props={{
            list: timeline.work,
            active: timeline.work.length - 3,
          }}
        />
      </LayoutSection>
    </LayoutSection>
  );
}
