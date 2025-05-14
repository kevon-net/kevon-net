'use client';

import {
  Anchor,
  Button,
  Container,
  createTheme,
  Divider,
  Modal,
  Notification,
  Text,
  virtualColor,
} from '@mantine/core';
import cx from 'clsx';
import classesNotification from './mantine/notification.module.scss';
import classesContainer from './mantine/container.module.scss';
import classesAnchor from './mantine/anchor.module.scss';

const appTheme = createTheme({
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

    Anchor: Anchor.extend({
      defaultProps: { underline: 'never' },
      classNames: classesAnchor,
    }),

    Text: Text.extend({
      defaultProps: { fw: '300' },
    }),

    Container: Container.extend({
      defaultProps: {
        mx: 'auto',
      },

      classNames: (_: unknown, { size }: { size?: unknown }) => ({
        root: cx({ [classesContainer.root]: size === 'responsive' }),
      }),
    }),

    Notification: Notification.extend({ classNames: classesNotification }),
  },
});

export default appTheme;
