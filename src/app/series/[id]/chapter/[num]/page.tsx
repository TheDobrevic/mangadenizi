// src/app/series/[id]/chapter/[num]/page.tsx
import ChapterReader from './ChapterReader';
import { seriesList } from '@/lib/data';

interface Params { params: { id: string; num: string } }

export default function Page({ params: { id, num } }: Params) {
  const serie = seriesList.find(s => s.id === id)!;
  const chapter = serie.chapters.find(c => c.num === num)!;

  return <ChapterReader chapter={chapter} />;
}
