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
  Card,
  Container,
  createTheme,
  Divider,
  Loader,
  MantineThemeOverride,
  Modal,
  Notification,
  ScrollArea,
  Select,
  Text,
  Textarea,
  TextInput,
  Tooltip,
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
      pri: [
        '#e1f8ff',
        '#cbedff',
        '#9ad7ff',
        '#64c1ff',
        '#3aaefe',
        '#20a2fe',
        '#099cff',
        '#0088e4',
        '#0079cd',
        '#0068b6',
      ],

      // pri: virtualColor({
      //   name: 'pri',
      //   light: 'blue',
      //   dark: 'cyan',
      // }),
    },

    primaryColor: 'pri',

    defaultRadius: 'lg',

    primaryShade: { light: 6, dark: 6 },

    autoContrast: true,
    luminanceThreshold: 0.6,

    headings: {
      fontFamily: 'var(--font-monospace)',
    },

    defaultGradient: {
      from: 'red',
      to: 'blue',
      deg: 45,
    },

    cursorType: 'pointer',

    components: {
      // Anchor: Anchor.extend({
      //   defaultProps: { underline: 'never' },
      // }),

      Loader: Loader.extend({
        defaultProps: { type: 'bars', size: 'sm' },
      }),

      Card: Card.extend({
        defaultProps: {
          style: { borderColor: 'var(--mantine-color-default-border)' },
        },
      }),

      Tooltip: Tooltip.extend({
        defaultProps: { withArrow: true, transitionProps: { enterDelay: 250 } },
      }),

      TextInput: TextInput.extend({
        defaultProps: {
          styles: {
            input: {
              borderColor: 'var(--mantine-color-default-border)',
              backgroundColor:
                'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-9))',
            },
          },
        },
      }),

      Textarea: Textarea.extend({
        defaultProps: {
          styles: {
            input: {
              borderColor: 'var(--mantine-color-default-border)',
              backgroundColor:
                'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-9))',
            },
          },
        },
      }),

      Select: Select.extend({
        defaultProps: {
          styles: {
            input: {
              borderColor: 'var(--mantine-color-default-border)',
              backgroundColor:
                'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-9))',
            },
            dropdown: {
              borderColor: 'var(--mantine-color-default-border)',
              backgroundColor:
                'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-9))',
            },
          },
        },
      }),

      ScrollArea: ScrollArea.extend({
        defaultProps: {
          scrollbarSize: 8,
          styles: {
            scrollbar: {
              backgroundColor:
                'light-dark(var(--mantine-color-gray-light), var(--mantine-color-dark-light))',
            },
            thumb: { backgroundColor: 'var(--mantine-color-pri-6)' },
          },
        },
      }),

      Divider: Divider.extend({
        defaultProps: { color: 'var(--mantine-color-default-border)' },
      }),

      Modal: Modal.extend({
        defaultProps: {
          centered: true,
          overlayProps: {
            backgroundOpacity: 0.1,
            blur: 4,
          },
          transitionProps: {
            duration: 100,
          },
          styles: {
            body: { padding: 'var(--mantine-spacing-xl)' },
          },
        },
      }),

      ...componentsWithStyles,
    },
  };

  return createTheme({
    ...baseTheme,
    ...(params?.theme || {}),
  });
};
