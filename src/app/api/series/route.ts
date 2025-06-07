// src/app/api/series/route.ts
import { NextResponse } from 'next/server';
import { seriesList } from '@/lib/data';

export async function GET() {
  const list = seriesList.map(({ id, title }) => ({ id, title }));
  return NextResponse.json(list);
}
