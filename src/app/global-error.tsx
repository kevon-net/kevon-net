'use client';

import React from 'react';
import ErrorMain from '@/components/partials/errors/main';

export default function GlobalError({
  // error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <ErrorMain reset={reset} />
      </body>
    </html>
  );
}
