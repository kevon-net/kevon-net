import React from 'react';
import { Box, Group, Paper, ScrollArea, Text } from '@mantine/core';
import { highlight } from '@repo/libraries/shiki';

export default async function CodeSnippet({
  props,
}: {
  props: { content: string; options?: { height: string } };
}) {
  const html = await highlight(props.content, {
    defaultLang: 'ts',
    isRawCode: true,
  });

  return (
    <Paper
      withBorder
      ff={'var(--font-monospace)'}
      style={{
        overflow: 'hidden',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      <Box px={'lg'} py={'md'} bg={'var(--mantine-color-gray-0)'}>
        {/* Fake window dots */}
        <Group gap={'xs'} justify="end">
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 99,
              background: '#ff5f56',
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 99,
              background: '#ffbd2e',
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 99,
              background: '#27c93f',
            }}
          />
        </Group>

        {/* Header */}
        <Text size="sm" c="dimmed">
          Example: Optimized Data Sync Logic
        </Text>
      </Box>

      {/* Code */}
      <ScrollArea h={props.options?.height}>
        <div
          className="shiki-container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ScrollArea>
    </Paper>
  );
}
