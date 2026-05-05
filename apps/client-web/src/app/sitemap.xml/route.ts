// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { sitemapRoutes } from '@/data/links';
import { PostRelations } from '@repo/types/models/post';
import { postsGet } from '@repo/handlers/requests/database/posts';
import { linkify } from '@repo/utilities/url';

export const dynamic = 'force-static';
export const revalidate = 604800; // Revalidate at most every week (in seconds)

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const { items: posts }: { items: PostRelations[] } = await postsGet();
  const postRoutes = posts.map((p) => `/blog/${linkify(p.title)}-${p.id}`);

  const staticRoutes = [
    '', // homepage
    ...sitemapRoutes,
    ...postRoutes,
  ].map((route) => ({
    loc: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}${route}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // --- MERGE ALL ROUTES ---
  const allRoutes = [...staticRoutes];

  // --- CONVERT TO XML ---
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((r) => {
    return `<url>
  <loc>${escapeXml(r.loc)}</loc>
  <lastmod>${escapeXml(r.lastmod)}</lastmod>
  <changefreq>${escapeXml(r.changefreq)}</changefreq>
  <priority>${escapeXml(String(r.priority))}</priority>
</url>`;
  })
  .join('\n')}
</urlset>`.trim();

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
