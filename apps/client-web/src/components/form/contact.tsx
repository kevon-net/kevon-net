'use client';

import React from 'react';
import {
  Button,
  Grid,
  GridCol,
  Group,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
} from '@mantine/core';
import { useFormEmailInquiry } from '@/hooks/form/inquiry';
import TooltipInputInfo from '@repo/components/common/tooltips/input/info';
import classes from './contact.module.scss';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import { IconArrowRight } from '@tabler/icons-react';

export default function Contact({
  props,
  options,
}: {
  props?: { subject?: string; message?: string };
  options?: { modal?: boolean; close?: () => void };
}) {
  const { form, submitted, handleSubmit } = useFormEmailInquiry(
    {
      subject: props?.subject,
      message: props?.message,
    },
    { close: options?.close }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      noValidate
    >
      <Grid>
        <GridCol span={{ base: 12, xs: 6 }}>
          <TextInput
            withAsterisk
            aria-label="Name"
            placeholder="Your Name"
            key={form.key('name')}
            {...form.getInputProps('name')}
            variant="filled"
            classNames={{ input: classes.textInput }}
          />
        </GridCol>

        <GridCol span={{ base: 12, xs: 6 }}>
          <TextInput
            withAsterisk
            aria-label="Email"
            placeholder="your@email.com"
            rightSection={<TooltipInputInfo />}
            key={form.key('email')}
            {...form.getInputProps('email')}
            variant="filled"
            classNames={{ input: classes.textInput }}
          />
        </GridCol>

        <GridCol span={12}>
          <Textarea
            withAsterisk
            aria-label="Message"
            placeholder="Your Message"
            key={form.key('message')}
            {...form.getInputProps('message')}
            variant="filled"
            classNames={{ input: classes.textArea }}
            minRows={5}
            maxRows={10}
            autosize
          />
        </GridCol>

        <GridCol span={12}>
          <Grid align="center" mt={'md'}>
            <GridCol span={{ base: 12, xs: 9 }}>
              <Text maw={{ xs: '80%', sm: '100%', md: '80%', lg: '100%' }}>
                <Text component="span" inherit c={'pri'}>
                  *
                </Text>{' '}
                Your personal information will not be disclosed to third
                parties.
              </Text>
            </GridCol>

            <GridCol span={{ base: 12, xs: 3 }}>
              <Group justify="end">
                <Button
                  type="submit"
                  color="gray"
                  variant="light"
                  size="md"
                  radius={'xl'}
                  loading={submitted}
                  rightSection={
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.25}
                      radius={'xl'}
                      color="pri"
                    >
                      <IconArrowRight
                        size={ICON_SIZE / 1.25}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>
                  }
                >
                  Submit
                </Button>
              </Group>
            </GridCol>
          </Grid>
        </GridCol>
      </Grid>
    </form>
  );
}
