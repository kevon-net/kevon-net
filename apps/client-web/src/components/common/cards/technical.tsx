import React from 'react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import { services } from '@/data/services';
import {
  Card,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { Icon } from '@tabler/icons-react';

export default function Technical({
  props,
}: {
  props: { icon: Icon; title: string; points: string[] };
}) {
  return (
    <Card
      bg={'transparent'}
      withBorder
      padding={0}
      p={{ base: 'md', md: 'xl' }}
    >
      <Stack>
        <div>
          <Stack gap={'xl'}>
            <ThemeIcon size={ICON_WRAPPER_SIZE * 2} variant="light">
              <props.icon
                size={ICON_SIZE * 1.5}
                stroke={ICON_STROKE_WIDTH}
                color="var(--mantine-color-pri-6)"
              />
            </ThemeIcon>

            <Title order={2} fz={'xl'}>
              {props.title}
            </Title>
          </Stack>
        </div>

        <div>
          <Stack>
            <Stack gap={'xs'}>
              {props.points?.map((li, i) => (
                <Group wrap="nowrap" key={i} fz={'sm'} align="start">
                  <span>-</span>
                  <Text inherit>{li}</Text>
                </Group>
              ))}
            </Stack>
          </Stack>
        </div>
      </Stack>
    </Card>
  );
}
