/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

// custom styles
import '../styles/globals.scss';

import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import ProviderMantine from '@repo/components/provider/mantine';
import { APP_DESC, APP_NAME } from '@repo/constants/app';
import { DEFAULT_COLOR_SCHEME } from '@repo/constants/other';
import { mantine } from '@/data/styles';

const fontBody = Space_Grotesk({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const fontMono = Space_Mono({
  variable: '--font-monospace',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const metaTitle = `${APP_NAME.WEB} - API Engine`;

export const metadata: Metadata = {
  title: { default: metaTitle, template: `%s | ${APP_NAME.WEB}` },
  description: APP_DESC.SERVER,

  alternates: {
    canonical: 'https://kevon.net',
  },

  openGraph: {
    title: metaTitle,
    description: APP_DESC.SERVER,
    url: 'https://kevon.net',
    siteName: APP_NAME.WEB,
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      data-mantine-color-scheme={DEFAULT_COLOR_SCHEME}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={APP_DESC.SERVER} />

        <title>{APP_NAME.SERVER}</title>

        <ColorSchemeScript defaultColorScheme={DEFAULT_COLOR_SCHEME} />
      </head>

      <body className={`${fontBody.variable} ${fontMono.variable}`}>
        <ProviderMantine
          appThemeProps={{ styleSheets: { ...mantine } }}
          options={{ withNotifications: true }}
        >
          {children}
        </ProviderMantine>
      </body>
    </html>
  );
}
