// src/app/api/series/[id]/chapter/[num]/route.ts
import { NextResponse } from 'next/server';
import { seriesList } from '@/lib/data';

export async function GET(
  request: Request,
  context: { params: { id: string; num: string } }
) {
  const { id, num } = context.params;
  const serie = seriesList.find(s => s.id === id);
  if (!serie) {
    return NextResponse.json({ error: 'Series not found' }, { status: 404 });
  }
  const chapter = serie.chapters.find(c => c.num === num);
  if (!chapter) {
    return NextResponse.json({ error: 'Chapter not found' }, { status: 404 });
  }
  return NextResponse.json({
    id,
    num,
    pages: chapter.pages,
  });
}
