import { Loader, Stack } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import { SECTION_SPACING } from '@repo/constants/sizes';

export default function Content() {
  return (
    <LayoutSection id={'error-404'} containerized={false}>
      <Loader type="dots" />
    </LayoutSection>
  );
}
