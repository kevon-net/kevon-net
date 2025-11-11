import { Loader } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';

export default function Content() {
  return (
    <LayoutSection id={'loading-content'} containerized={false}>
      <Loader type="dots" />
    </LayoutSection>
  );
}
