/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';

// custom styles
import '../styles/globals.scss';

import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import ProviderMantine from '@repo/components/provider/mantine';
import ProviderStore from '@/components/provider/store';
import { APP_DESC, APP_NAME } from '@repo/constants/app';
import { DEFAULT_COLOR_SCHEME } from '@repo/constants/other';
import { isProduction } from '@repo/utilities/misc';
import { mantine } from '@/data/styles';
import { GoogleAnalytics } from '@next/third-parties/google';
import { images } from '@repo/constants/images';

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

const metaTitle = `${APP_NAME.WEB} - Full-Stack Developer Building Fast, Scalable Web Applications`;

export const metadata: Metadata = {
  title: { default: metaTitle, template: `%s | ${APP_NAME.WEB}` },
  description: APP_DESC.WEB,
  metadataBase: new URL('https://kevon.net'),

  alternates: {
    canonical: 'https://kevon.net',
  },

  openGraph: {
    title: metaTitle,
    description: APP_DESC.WEB,
    url: 'https://kevon.net',
    siteName: APP_NAME.WEB,
    images: [
      {
        url: images.brand.logo.meta.landscape.dark,
        width: 1200,
        height: 630,
        alt: `Kevon's Portfolio`,
      },
      {
        url: images.brand.logo.meta.square.dark,
        width: 1200,
        height: 1200,
        alt: `Kevon's Portfolio`,
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: APP_DESC.WEB,
    images: [images.brand.logo.meta.landscape.dark],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      data-mantine-color-scheme={DEFAULT_COLOR_SCHEME}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={APP_DESC.WEB} />

        <title>{APP_NAME.WEB}</title>

        <ColorSchemeScript defaultColorScheme={DEFAULT_COLOR_SCHEME} />
      </head>

      <body className={`${fontBody.variable} ${fontMono.variable}`}>
        <ProviderMantine
          options={{ withNotifications: true }}
          appThemeProps={{ styleSheets: { ...mantine } }}
        >
          <ProviderStore>{children}</ProviderStore>
        </ProviderMantine>

        {isProduction() && gaMeasurementId && (
          <GoogleAnalytics gaId={gaMeasurementId} />
        )}
      </body>
    </html>
  );
}
