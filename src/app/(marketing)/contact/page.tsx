import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import IntroPage from '@/components/layout/intros/page';
import LayouSection from '@/components/layout/section';
import IntroSection from '@/components/layout/intros/section';
import FormContact from '@/components/form/contact';
import { Text, Title } from '@mantine/core';
import { FONT_SIZE, SECTION_SPACING } from '@/data/constants';
import IframeContact from '@/components/common/iframes/contact';

export const metadata: Metadata = { title: 'Contact' };

export default async function Contact() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          title: (
            <Title order={1} fz={FONT_SIZE.TITLE_PAGE} ta={'center'}>
              Get In{' '}
              <Text component="span" inherit fw={'100'}>
                Touch
              </Text>
            </Title>
          ),
        }}
      />

      <LayouSection id={'map'} h={400} containerized={false}>
        <IframeContact />
      </LayouSection>

      <LayouSection
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
      </LayouSection>
    </LayoutPage>
  );
}
