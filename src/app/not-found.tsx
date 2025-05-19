import React from 'react';
import Link from 'next/link';
import { Stack, Button, Group, ThemeIcon } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import LayoutSection from '@/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import IntroPage from '@/components/layout/intros/page';

export default function NotFound() {
  return (
    <LayoutSection id={'page-not-found'} containerized={false}>
      <Stack justify="center" mih={'100vh'} pb={SECTION_SPACING}>
        <IntroPage
          props={{
            path: `404`,
            title: 'Page Not Found',
            desc: `The page you are trying to open does not exist.`,
          }}
          options={{ glitch: true }}
        />

        <LayoutSection id={'page-not-found'}>
          <Group>
            <Button
              leftSection={
                <ThemeIcon
                  size={ICON_WRAPPER_SIZE}
                  variant="light"
                  color="gray"
                  radius={'xl'}
                >
                  <IconArrowLeft size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ThemeIcon>
              }
              radius={'xl'}
              size="lg"
              component={Link}
              href={'/'}
              color="gray"
              variant="light"
            >
              Go To Home Page
            </Button>
          </Group>
        </LayoutSection>
      </Stack>
    </LayoutSection>
  );
}
