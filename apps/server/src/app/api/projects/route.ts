/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET() {
  try {
    const projectRecords = await prisma.project.findMany({
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      { items: projectRecords },
      { status: 200, statusText: 'Projects Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get projects):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
