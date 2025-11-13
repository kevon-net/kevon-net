'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import {
  Anchor,
  Button,
  Container,
  createTheme,
  Divider,
  MantineThemeOverride,
  Modal,
  Notification,
  Text,
  virtualColor,
} from '@mantine/core';
import cx from 'clsx';

export type AppThemeProps = {
  theme?: MantineThemeOverride;
  styleSheets?: { anchor?: any; container?: any; notification?: any };
};

export const getAppTheme = (params?: AppThemeProps) => {
  const componentAnchor = {
    Anchor: Anchor.extend({
      defaultProps: { underline: 'never' },
      classNames: params?.styleSheets?.anchor,
    }),
  };

  const componentContainer = {
    Container: Container.extend({
      defaultProps: {
        mx: 'auto',
      },

      classNames: (_: unknown, { size }: { size?: unknown }) => ({
        root: cx({
          [params?.styleSheets?.container.root]: size === 'responsive',
        }),
      }),
    }),
  };

  const componentNotification = {
    Notification: Notification.extend({
      classNames: params?.styleSheets?.notification,
    }),
  };

  const componentsWithStyles = {
    ...(params?.styleSheets?.anchor ? componentAnchor : {}),
    ...(params?.styleSheets?.container ? componentContainer : {}),
    ...(params?.styleSheets?.notification ? componentNotification : {}),
  };

  const baseTheme: MantineThemeOverride = {
    focusClassName: 'focus',
    activeClassName: 'active',

    colors: {
      pri: virtualColor({
        name: 'pri',
        light: 'blue',
        dark: 'cyan',
      }),
    },

    primaryColor: 'pri',

    defaultRadius: 'sm',

    primaryShade: { light: 6, dark: 6 },

    // autoContrast: true,
    // luminanceThreshold: 0.3,

    headings: {
      fontFamily: 'var(--font-kanit-sans)',
    },

    defaultGradient: {
      from: 'red',
      to: 'blue',
      deg: 45,
    },

    cursorType: 'pointer',

    components: {
      Button: Button.extend({
        defaultProps: { tt: 'uppercase', fz: 'xs', lts: 2, fw: '500' },
      }),

      Divider: Divider.extend({
        defaultProps: { color: 'var(--mantine-color-gray-light)' },
      }),

      Modal: Modal.extend({
        defaultProps: {
          transitionProps: { transition: 'fade' },
          overlayProps: { backgroundOpacity: 0.5, blur: 4 },
        },
      }),

      Text: Text.extend({
        defaultProps: { fw: '300' },
      }),

      ...componentsWithStyles,
    },
  };

  return createTheme({
    ...baseTheme,
    ...(params?.theme || {}),
  });
};
