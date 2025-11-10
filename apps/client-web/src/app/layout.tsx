/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import ProviderMantine from '@/components/provider/mantine';
import ProviderStore from '@/components/provider/store';

// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';

// custom styles
import '../styles/globals.scss';

import { appName } from '@repo/constants/app';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: appName,
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <ColorSchemeScript />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ProviderMantine options={{ withNotifications: true }}>
          <ProviderStore>{children}</ProviderStore>
        </ProviderMantine>
      </body>
    </html>
  );
}
