import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Title } from '@mantine/core';
import CarouselClients from '@/components/common/carousel/clients';
import IntroSection from '@/components/layout/intros/section';

export default function Quotes() {
  return (
    <LayoutSection
      id={'testimonials'}
      padded={SECTION_SPACING}
      // visibleFrom="md"
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
