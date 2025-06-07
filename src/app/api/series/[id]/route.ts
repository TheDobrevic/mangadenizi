// src/app/api/series/[id]/route.ts
import { NextResponse } from 'next/server';
import { seriesList } from '@/lib/data';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const serie = seriesList.find(s => s.id === id);
  if (!serie) {
    return NextResponse.json({ error: 'Series not found' }, { status: 404 });
  }
  const { title, chapters } = serie;
  return NextResponse.json({
    id,
    title,
    chapters: chapters.map(c => ({ num: c.num })),
  });
}
