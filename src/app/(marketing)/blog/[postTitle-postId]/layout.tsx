import React from 'react';
import LayoutBody from '@/components/layout/body';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { PostRelations } from '@/types/models/post';
import { createClient } from '@/libraries/supabase/server';

export const generateMetadata = async ({
  params,
}: {
  params: typeParams;
}): Promise<Metadata> => {
  const postId = extractUuidFromParam((await params)['postTitle-postId']);

  const supabase = await createClient();

  const { data: posts } = await supabase.from('posts').select();

  const post = ((posts || []) as PostRelations[]).find((p) => p.id == postId);

  return {
    title: post?.title,
    description: post?.excerpt,
    category: post?.category?.title,
  };
};

export default function LayoutPost({
  children, // will be a page or nested layout
  // params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
