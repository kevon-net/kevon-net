'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { CSSVariablesResolver } from '@mantine/core';

const appResolver: CSSVariablesResolver = (theme) => ({
  variables: {},

  light: {
    '--mantine-color-body': `${theme.white}`,
    '--mantine-color-text': `var(--mantine-color-dark-6)`,
  },

  dark: {
    '--mantine-color-body': `${theme.black}`,
    '--mantine-color-text': `var(--mantine-color-dark-0)`,
  },
});

export default appResolver;
