'use client';

import React from 'react';
import LayoutSection from '@/components/layout/section';
import IntroPage from '@/components/layout/intros/page';
import { Button, Flex, Group, Stack } from '@mantine/core';
import { SECTION_SPACING } from '@/data/constants';

export default function Main({ reset }: { reset?: () => void }) {
  return (
    <LayoutSection id={'page-not-found'} containerized={false}>
      <Stack justify="center" mih={'100vh'} pb={SECTION_SPACING}>
        <IntroPage
          props={{
            path: `500`,
            title: 'Something Went Wrong!',
            desc: `The content you are trying to view has triggered an error. Our servers seem to have run into a problem. You can try again later.`,
          }}
        />

        <LayoutSection id={'not-found-content'}>
          <Group>
            <Flex
              direction={{ base: 'column', xs: 'row' }}
              align={'center'}
              gap={'md'}
            >
              <Button
                variant="light"
                onClick={() => {
                  if (!reset) {
                    window.location.reload();
                  } else {
                    reset();
                  }
                }}
              >
                Try Again
              </Button>
            </Flex>
          </Group>
        </LayoutSection>
      </Stack>
    </LayoutSection>
  );
}
