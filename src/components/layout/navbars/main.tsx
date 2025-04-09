import React from 'react';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';
import { ActionIcon, Anchor, Group } from '@mantine/core';
import LayoutSection from '../section';
import ModalNavbar from '@/components/common/modals/navbar';
import { ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE } from '@/data/constants';
import { IconMenuDeep } from '@tabler/icons-react';
import Link from 'next/link';

export default function Main() {
  return (
    <LayoutSection id="navbar-main" padded={'xl'}>
      <Group justify="space-between">
        <Anchor component={Link} href={'/'}>
          <ImageDefault
            src={images.brand.icon.dark}
            alt={appData.name.app}
            height={40}
            width={24}
            fit="contain"
          />
        </Anchor>

        <ModalNavbar>
          <ActionIcon
            size={ICON_WRAPPER_SIZE * 1.25}
            color="gray"
            variant="transparent"
          >
            <IconMenuDeep
              size={ICON_WRAPPER_SIZE * 1.25}
              stroke={ICON_STROKE_WIDTH}
            />
          </ActionIcon>
        </ModalNavbar>
      </Group>
    </LayoutSection>
  );
}
