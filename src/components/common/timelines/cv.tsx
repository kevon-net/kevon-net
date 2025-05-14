import React from 'react';
import { Timeline, Text, TimelineItem, Stack, Group } from '@mantine/core';
import { IconCircleFilled } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { timeline } from '@/data/timeline';
import classes from './cv.module.scss';

export default function Cv({
  props,
}: {
  props: { list: typeof timeline.education; active?: number };
}) {
  return (
    <Timeline
      bulletSize={ICON_WRAPPER_SIZE * 1.25}
      lineWidth={2}
      classNames={classes}
      active={props.active}
      radius={0}
    >
      {props.list.map((t, i) => (
        <TimelineItem
          key={i}
          bullet={<t.icon size={ICON_SIZE * 1.25} stroke={ICON_STROKE_WIDTH} />}
          title={t.title}
          fz={'xl'}
          lineVariant={
            props.list.indexOf(t) == props.list.length - 2
              ? 'dashed'
              : undefined
          }
        >
          <Text c="var(--mantine-color-dark-0)">{t.where}</Text>

          <Text fz="sm" mt={4}>
            {t.when}
          </Text>

          <Stack mt={'sm'} gap={'xs'}>
            {t.accomplishments.map((a, i) => (
              <Group key={i} gap={'xs'} wrap={'nowrap'} align={'start'}>
                <IconCircleFilled
                  size={4}
                  color="var(--mantine-color-white)"
                  style={{ marginTop: 8 }}
                />

                <Text inherit fz={'sm'}>
                  {a}
                </Text>
              </Group>
            ))}
          </Stack>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
