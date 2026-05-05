'use client';

import React from 'react';
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useFormEmailInquiry } from '@repo/hooks/form/inquiry';
import TooltipInputInfo from '@repo/components/common/tooltips/input/info';
import AnchorNextLink from '@repo/components/common/anchor/next-link';

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
    <Box
      component="form"
      onSubmit={form.onSubmit(() => handleSubmit())}
      noValidate
    >
      <Grid>
        <GridCol span={{ base: 12, md: options?.modal ? 6 : undefined }}>
          <Grid>
            <GridCol span={12}>
              <TextInput
                required
                label={options?.modal ? undefined : 'Name'}
                aria-label={options?.modal ? 'Name' : undefined}
                placeholder={`Your Name${options?.modal ? ' *' : ''}`}
                {...form.getInputProps('name')}
              />
            </GridCol>

            <GridCol span={12}>
              <TextInput
                required
                label={options?.modal ? undefined : 'Email'}
                aria-label={options?.modal ? 'Email' : undefined}
                placeholder={`Your Email${options?.modal ? ' *' : ''}`}
                {...form.getInputProps('email')}
                rightSection={<TooltipInputInfo />}
              />
            </GridCol>
          </Grid>
        </GridCol>

        <GridCol span={{ base: 12, md: options?.modal ? 6 : undefined }}>
          <Grid>
            <GridCol span={12}>
              <Textarea
                required
                label={options?.modal ? undefined : 'Message'}
                aria-label={options?.modal ? 'Message' : undefined}
                placeholder={
                  options?.modal ? 'Message *' : 'Write your message here...'
                }
                autosize
                minRows={3}
                maxRows={5}
                {...form.getInputProps('message')}
              />
            </GridCol>
          </Grid>
        </GridCol>

        <GridCol span={12}>
          <Group justify="end">
            <Button type="submit" loading={submitted}>
              {submitted ? 'Sending' : 'Send'}
            </Button>
          </Group>
        </GridCol>

        <GridCol span={12}>
          <Box c={'dimmed'} fz={'sm'} mt={'md'}>
            <Text inherit>Typically responds within 24 hours.</Text>
          </Box>
        </GridCol>
      </Grid>
    </Box>
  );
}
