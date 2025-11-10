import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import IntroSection from '@repo/components/layout/intros/section';
import { Title } from '@mantine/core';
import CarouselClients from '@/components/common/carousel/clients';

export default function Quotes() {
  return (
    <LayoutSection
      id={'testimonials'}
      py={{ base: SECTION_SPACING * 2, md: SECTION_SPACING }}
    >
      <IntroSection
        options={{ alignment: 'start', spacing: true }}
        props={{
          title: (
            <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
              Testimonials
              {/* <Text component="span" inherit fw={'100'}>
                                Kevon&apos;s
                              </Text>{' '}
                              History */}
            </Title>
          ),
        }}
      />

      <CarouselClients />
    </LayoutSection>
  );
}
