'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import {
  alpha,
  ConvertCSSVariablesInput,
  CSSVariablesResolver,
} from '@mantine/core';

export const getAppResolver = (params?: {
  cssVars?: ConvertCSSVariablesInput;
}) => {
  const appResolver: CSSVariablesResolver = (theme) => {
    const baseCssVars = {
      variables: {},

      light: {
        '--mantine-color-body': `${theme.white}`,
        '--mantine-color-text': `var(--mantine-color-dark-6)`,
        '--mantine-color-default-border': `var(--mantine-color-gray-3)`,
      },

      dark: {
        '--mantine-color-body': `${theme.black}`,
        '--mantine-color-text': `var(--mantine-color-white)`,
        '--mantine-color-default-border': `var(--mantine-color-dark-8)`,
        '--mantine-shadow-xs': `0 0.0625rem 0.1875rem ${alpha(theme.black, 0.05)}, 0 0.0625rem 0.125rem ${alpha(
          theme.black,
          0.1
        )}`,
      },
    };

    return { ...baseCssVars, ...(params?.cssVars || {}) };
  };

  return appResolver;
};
