'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import cx from 'clsx';
import { Container, createTheme, Loader } from '@mantine/core';
import classesContainer from './mantine/container.module.scss';

const appTheme = createTheme({
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
  },

  primaryColor: 'pri',
  defaultRadius: 'sm',
  primaryShade: { light: 6, dark: 6 },
  cursorType: 'pointer',

  headings: {
    fontFamily: 'var(--font-geist-sans)',
  },

  components: {
    Container: Container.extend({
      defaultProps: {
        mx: 'auto',
      },

      classNames: (_: unknown, { size }: { size?: unknown }) => ({
        root: cx({ [classesContainer.root]: size === 'responsive' }),
      }),
    }),

    Loader: Loader.extend({
      defaultProps: {
        type: 'bars',
        size: 'sm',
      },
    }),
  },
});

export default appTheme;
