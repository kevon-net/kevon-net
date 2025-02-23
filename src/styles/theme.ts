'use client';

import {
  Anchor,
  Button,
  Container,
  createTheme,
  Notification,
  virtualColor,
} from '@mantine/core';

import cx from 'clsx';

import classesNotification from './mantine/notification.module.scss';
import classesContainer from './mantine/container.module.scss';
import classesButton from './mantine/button.module.scss';
import classesAnchor from './mantine/anchor.module.scss';

const appTheme = createTheme({
  focusClassName: 'focus',
  activeClassName: 'active',

  colors: {
    priWhite: [
      '#1f1f1f', // 0
      '#242424', // 1
      '#2e2e2e', // 2
      '#3b3b3b', // 3
      '#424242', // 4
      '#696969', // 5
      '#828282', // 6
      '#b8b8b8', // 7
      '#C9C9C9', // 8
      '#ffffff', // 9
    ],

    priBlack: [
      '#C9C9C9', // 0
      '#b8b8b8', // 1
      '#828282', // 2
      '#696969', // 3
      '#424242', // 4
      '#3b3b3b', // 5
      '#2e2e2e', // 6
      '#242424', // 7
      '#1f1f1f', // 8
      '#141414', // 9
    ],

    pri: virtualColor({
      name: 'pri',
      light: 'priBlack',
      dark: 'priWhite',
    }),
  },

  primaryColor: 'pri',

  defaultRadius: 0,

  primaryShade: { light: 9, dark: 9 },

  defaultGradient: {
    from: 'red',
    to: 'blue',
    deg: 45,
  },

  cursorType: 'pointer',

  components: {
    Button: Button.extend({
      defaultProps: { variant: 'filled' },
      classNames: classesButton,
    }),

    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'always',
      },
      classNames: classesAnchor,
    }),

    Container: Container.extend({
      defaultProps: {
        mx: 'auto',
      },

      classNames: (_: any, { size }: { size?: any }) => ({
        root: cx({ [classesContainer.root]: size === 'responsive' }),
      }),
    }),

    Notification: Notification.extend({ classNames: classesNotification }),
  },
});

export default appTheme;
