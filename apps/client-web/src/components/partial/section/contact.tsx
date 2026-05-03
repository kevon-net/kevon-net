import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import { FONT_SIZE, SECTION_SPACING } from '@repo/constants/sizes';
import {
  Anchor,
  Box,
  Button,
  Card,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import NextLink from '@repo/components/common/anchor/next-link';
import { EMAILS } from '@repo/constants/app';

export default function Contact() {
  return (
    <LayoutSection
      id={'contact'}
      py={{ base: SECTION_SPACING * 2 }}
      bg={
        'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
      }
    >
      <Card
        withBorder
        bg={'var(--mantine-color-body)'}
        maw={{ xs: '66%', sm: '50%', md: '66%' }}
        mx={'auto'}
        py={SECTION_SPACING}
      >
        <Stack align="center" ta="center" gap={SECTION_SPACING}>
          <Stack>
            <Title order={1} fz={FONT_SIZE.TITLE_PAGE}>
              Interested in working together or hiring me?
            </Title>

            <Text>
              I’m currently open to{' '}
              <Text component="span" inherit c={'pri'}>
                Full-time roles, Remote work, and Freelance projects
              </Text>
              .
            </Text>
          </Stack>

          <Group gap={'xs'}>
            <NextLink href={'/projects'}>
              <Button size="md">View My Work</Button>
            </NextLink>

            <NextLink href={'/contact'}>
              <Button size="md" color="dark" variant="subtle">
                Get In Touch
              </Button>
            </NextLink>
          </Group>

          <Box c={'dimmed'} fz={'sm'}>
            <Anchor inherit href={`mailto:${EMAILS.CONTACT}`}>
              {EMAILS.CONTACT}
            </Anchor>
            <Text inherit>Based in Kenya</Text>
          </Box>
        </Stack>
      </Card>
    </LayoutSection>
  );
}
