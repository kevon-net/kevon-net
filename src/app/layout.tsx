import type { Metadata } from 'next';
import { Outfit, Tomorrow } from 'next/font/google';
import {
  ColorSchemeScript,
  MantineColorScheme,
  MantineProvider,
} from '@mantine/core';
import appTheme from '@/styles/theme';
import { COOKIE_NAME, DEFAULT_COLOR_SCHEME } from '@/data/constants';
import appResolver from '@/styles/resolver';
import { Notifications } from '@mantine/notifications';
import { linkify } from '@/utilities/formatters/string';
import appData from '@/data/app';
import WrapperShellMain from '@/components/wrapper/shell/main';

// core styles are required for all packages
import '@mantine/core/styles.css';

// other css files are required only if you are using components from the corresponding package
import '@mantine/dates/styles.css';

import '../styles/globals.scss';
import { getCookieServer } from '@/utilities/helpers/cookie-server';

// fonts
const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
});

const tomorrowSans = Tomorrow({
  variable: '--font-tomorrow-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// metadata
export const metadata: Metadata = {
  title: appData.name.app,
  description: appData.companyOneLiner,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const coScCo = await getCookieServer(COOKIE_NAME.COLOR_SCHEME_STATE);
  const colorScheme = coScCo || DEFAULT_COLOR_SCHEME;

  return (
    <html lang="en" data-mantine-color-scheme={colorScheme}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={appData.companyOneLiner} />

        <title>{appData.name.app}</title>

        <ColorSchemeScript
          defaultColorScheme={colorScheme as MantineColorScheme}
        />
      </head>

      <body className={`${outfitSans.variable} ${tomorrowSans.variable}`}>
        <MantineProvider
          theme={appTheme}
          cssVariablesResolver={appResolver}
          defaultColorScheme={colorScheme as MantineColorScheme}
          classNamesPrefix={linkify(appData.name.app)}
        >
          <WrapperShellMain>
            {children}

            <Notifications limit={3} />
          </WrapperShellMain>
        </MantineProvider>
      </body>
    </html>
  );
}
