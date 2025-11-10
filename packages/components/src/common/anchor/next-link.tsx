'use client';

import Link from 'next/link';
import { Anchor, AnchorProps } from '@mantine/core';

export default function NextLink({
  href,
  children,
  ...restProps
}: { href: string; children: React.ReactNode } & AnchorProps) {
  return (
    <Anchor component={Link} href={href} {...restProps}>
      {children}
    </Anchor>
  );
}
