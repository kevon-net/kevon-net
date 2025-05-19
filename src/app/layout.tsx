import type { Metadata } from 'next';
import { Kanit, Tomorrow } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import appTheme from '@/styles/theme';
import { DEFAULT_COLOR_SCHEME } from '@/data/constants';
import appResolver from '@/styles/resolver';
import { Notifications } from '@mantine/notifications';
import { linkify } from '@/utilities/formatters/string';
import appData from '@/data/app';
import ShellMain from '@/components/layout/shells/main';
import UnderlayMist from '@/components/wrapper/underlays/mist';

// core styles are required for all packages
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

// other css files are required only if you are using components from the corresponding package
import '@mantine/dates/styles.css';

import '../styles/globals.scss';

// fonts
const kanitSans = Kanit({
  variable: '--font-kanit-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
  return (
    <html lang="en" data-mantine-color-scheme={DEFAULT_COLOR_SCHEME}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={appData.companyOneLiner} />

        <title>{appData.name.app}</title>

        <ColorSchemeScript defaultColorScheme={DEFAULT_COLOR_SCHEME} />
      </head>

      <body className={`${kanitSans.variable} ${tomorrowSans.variable}`}>
        <MantineProvider
          theme={appTheme}
          cssVariablesResolver={appResolver}
          defaultColorScheme={DEFAULT_COLOR_SCHEME}
          classNamesPrefix={linkify(appData.name.app)}
        >
          <UnderlayMist>
            <ShellMain>{children}</ShellMain>
          </UnderlayMist>

          <Notifications limit={3} position="top-center" />
        </MantineProvider>
      </body>
    </html>
  );
}
