'use server';

import { createClient } from '@/libraries/supabase/client';
import { CategoryGet } from '@/types/models/category';

export const categoriesGet = async (): Promise<{
  data: CategoryGet[] | null;
  error: any;
}> => {
  const supabase = createClient();
  const { data: categories, error } = await supabase
    .from('categories')
    .select();
  return { data: categories as CategoryGet[], error };
};
