'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import { MantineProvider, MantineColorScheme } from '@mantine/core';
import appTheme from '@/styles/theme';
import appResolver from '@/styles/resolver';
import { linkify } from '@repo/utilities/url';
import { appName } from '@repo/constants/app';
import { Notifications } from '@mantine/notifications';
import { DEFAULT_COLOR_SCHEME } from '@repo/constants/other';

export default function Mantine({
  colorScheme,
  options,
  children,
}: {
  colorScheme?: MantineColorScheme;
  options?: { withNotifications?: boolean };
  children: React.ReactNode;
}) {
  return (
    <MantineProvider
      theme={appTheme}
      cssVariablesResolver={appResolver}
      classNamesPrefix={linkify(appName)}
      defaultColorScheme={colorScheme || DEFAULT_COLOR_SCHEME}
    >
      {children}

      {options?.withNotifications && <Notifications limit={3} />}
    </MantineProvider>
  );
}
