'use server';

import { createClient } from '@/libraries/supabase/client';
import { PostGet } from '@/types/models/post';

export const postsGet = async (): Promise<{
  data: PostGet[] | null;
  error: any;
}> => {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from('posts').select();
  return { data: posts as PostGet[], error };
};
