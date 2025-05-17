'use server';

import { createClient } from '@/libraries/supabase/client';
import { ProjectGet } from '@/types/models/project';

export const projectsGet = async (): Promise<{
  data: ProjectGet[] | null;
  error: any;
}> => {
  const supabase = createClient();
  const { data: projects, error } = await supabase.from('projects').select();
  return { data: projects as ProjectGet[], error };
};
