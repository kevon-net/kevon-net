'use client';

import React from 'react';
import { ActionIcon, TextInput } from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { IconArrowRight } from '@tabler/icons-react';
import { useFormSubscribe } from '@/hooks/form/subscribe';
import classes from './subscribe.module.scss';

export default function Subscribe() {
  const { form, submit } = useFormSubscribe();

  return (
    <form onSubmit={submit}>
      <TextInput
        required
        aria-label="Email"
        placeholder="Enter your email"
        key={form.key('email')}
        {...form.getInputProps('email')}
        variant="filled"
        size={'lg'}
        w={{ md: 320 }}
        radius={'xl'}
        classNames={{ input: classes.textInput }}
        rightSection={
          <ActionIcon
            size={ICON_WRAPPER_SIZE}
            variant="light"
            color="gray"
            radius={'xl'}
            type="submit"
          >
            <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          </ActionIcon>
        }
      />
    </form>
  );
}
