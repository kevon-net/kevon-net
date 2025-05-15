import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { services } from '@/data/services';
import {
  Card,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';

export default function Service({ props }: { props: (typeof services)[0] }) {
  return (
    <Card padding={0} bg={'transparent'}>
      <Grid align="center">
        <GridCol span={{ base: 12, sm: 5, lg: 4 }}>
          <Flex direction={{ sm: 'row' }} gap={'xl'} justify={{ sm: 'center' }}>
            <props.icon
              size={ICON_SIZE * 2}
              stroke={ICON_STROKE_WIDTH}
              color="var(--mantine-color-pri-6)"
            />

            <Title order={2}>{props.title}</Title>
          </Flex>
        </GridCol>

        <GridCol span={{ base: 12, sm: 7, lg: 8 }}>
          <Stack>
            <Text c={'var(--mantine-color-dark-0)'}>{props.desc}</Text>

            <Stack gap={0}>
              {props.list.map((li, i) => (
                <Group wrap="nowrap" key={i}>
                  <span>-</span>
                  <Text>{li}</Text>
                </Group>
              ))}
            </Stack>
          </Stack>
        </GridCol>
      </Grid>
    </Card>
  );
}
