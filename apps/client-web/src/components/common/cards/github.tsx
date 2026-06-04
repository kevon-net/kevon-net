import { Card, Group, Stack, Text, Title } from '@mantine/core';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import React from 'react';

export default function Github({ props }: { props?: { label?: string } }) {
  return (
    <Card
      padding={'lg'}
      bg={'var(--mantine-color-dark-9)'}
      c={'var(--mantine-color-white)'}
    >
      <Stack align="start">
        <Group>
          <IconBrandGithub size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />

          <Title order={3} fz={'xl'}>
            GitHub
            {!props?.label && (
              <sup>
                <IconExternalLink
                  size={ICON_SIZE - 4}
                  stroke={ICON_STROKE_WIDTH}
                />
              </sup>
            )}
          </Title>
        </Group>

        {props?.label && (
          <Text component="span" inherit>
            <span>{props?.label}</span>
            <IconExternalLink size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
          </Text>
        )}
      </Stack>
    </Card>
  );
}
