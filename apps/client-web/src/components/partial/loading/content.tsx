import { Loader } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';

export default function Content() {
  return (
    <LayoutSection id={'error-404'} containerized={false}>
      <Loader type="dots" />
    </LayoutSection>
  );
}
