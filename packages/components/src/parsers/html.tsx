'use client';

import React, { useEffect, useState } from 'react';
import { Typography } from '@mantine/core';
import { getHtml } from '@repo/libraries/html';

export default function Html({
  props,
}: {
  props: { html: string; raw?: boolean };
}) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadHtml = async () => {
      const html = await getHtml(props.html, { raw: props.raw });
      setContent(html);
    };

    loadHtml();
  }, []);

  return (
    <Typography>
      <div id={'html-parser'}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Typography>
  );
}
