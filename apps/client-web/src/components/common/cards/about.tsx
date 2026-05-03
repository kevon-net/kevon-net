import React from 'react';
// import { documents } from '@/assets/documents';
import { contact } from '@/data/links';
import { Anchor, Card, Stack, Text, Title } from '@mantine/core';

export default function About() {
  return (
    <Card
      bg={{
        base: 'var(--mantine-color-gray-light)',
        xs: 'var(--mantine-color-black)',
      }}
      p={{ lg: 'xl' }}
      style={{ borderTop: '4px solid var(--mantine-color-pri-6)' }}
    >
      <Stack gap={'xl'}>
        <Stack align="start" gap={5}>
          <Title order={3}>Email</Title>
          <Anchor href={contact[0].link}>{contact[0].label}</Anchor>
        </Stack>

        <Stack align="start" gap={5}>
          <Title order={3}>Role</Title>
          <Text c={'var(--mantine-color-dark-0)'}>
            Web Designer and Developer
          </Text>
        </Stack>

        <Stack align="start" gap={5}>
          <Title order={3}>Phone</Title>
          <Anchor href={contact[1].link}>{contact[1].label}</Anchor>
        </Stack>

        {/* <Stack align="start" gap={5}>
          <Title order={3}>CV</Title>
          <Anchor href={documents.cv.light} download={'kevon-cv.pdf'}>
            Download CV
          </Anchor>
        </Stack> */}
      </Stack>
    </Card>
  );
}
