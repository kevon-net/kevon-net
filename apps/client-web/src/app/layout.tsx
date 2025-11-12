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
import { Kanit, Tomorrow } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import ProviderMantine from '@/components/provider/mantine';
import ProviderStore from '@/components/provider/store';
import UnderlayMist from '@repo/components/wrapper/underlays/mist';
import ShellMain from '@/components/layout/shells/main';
import { appName, companyOneLiner } from '@repo/constants/app';
import { images } from '@/assets/images';
import { DEFAULT_COLOR_SCHEME } from '@repo/constants/other';
import { isProduction } from '@repo/utilities/misc';
import { GoogleAnalytics } from '@next/third-parties/google';

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

export const metadata: Metadata = {
  title: `${appName} - Web Development Solutions`,
  description: companyOneLiner,
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
        <meta name="description" content={companyOneLiner} />

        <title>{appName}</title>

        <ColorSchemeScript defaultColorScheme={DEFAULT_COLOR_SCHEME} />
      </head>

      <body className={`${kanitSans.variable} ${tomorrowSans.variable}`}>
        <ProviderMantine options={{ withNotifications: true }}>
          <ProviderStore>
            <UnderlayMist
              props={{
                image: images.background.imagejx29gq,
                noiseImage: images.background.noise,
              }}
            >
              <ShellMain>{children}</ShellMain>
            </UnderlayMist>
          </ProviderStore>
        </ProviderMantine>

        {isProduction() && gaMeasurementId && (
          <GoogleAnalytics gaId={gaMeasurementId} />
        )}
      </body>
    </html>
  );
}
