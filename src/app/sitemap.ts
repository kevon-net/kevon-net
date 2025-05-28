import { HOSTED_BASE_URL } from '@/data/constants';
import { createClient } from '@/libraries/supabase/server';
import { linkify } from '@/utilities/formatters/string';
import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes = [
    '', // homepage
    // '/projects',
    '/blog',
  ].map((route) => ({
    url: `${HOSTED_BASE_URL.KEVON}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // generate blog urls
  const supabase = await createClient();
  const { data: posts } = await supabase.from('posts').select();

  const blogRoutes = (posts || []).map((p) => ({
    url: `${HOSTED_BASE_URL.KEVON}/blog/${linkify(p.title)}-${p.id}`,
    lastModified: p.updated_at,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
