/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import LoadingMain from '@/components/partial/loading/main';
import ProviderMantine from '@/components/provider/mantine';

export default function Loading() {
  return (
    <ProviderMantine>
      <LoadingMain />
    </ProviderMantine>
  );
}
