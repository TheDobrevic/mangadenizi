// src/app/series/[id]/page.tsx
import Link from 'next/link';

interface Params { params: { id: string } }
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export default async function SeriesPage({ params: { id } }: Params) {
  const res = await fetch(`${baseUrl}/api/series/${id}`, { cache: 'no-store' });
  const serie: { id: string; title: string; chapters: { num: string }[] } = await res.json();

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-4">{serie.title}</h1>
      <ul className="list-decimal ml-6 space-y-2">
        {serie.chapters.map(c => (
          <li key={c.num}>
            <Link
              href={`/series/${id}/chapter/${c.num}`}
              className="text-blue-600 hover:underline"
            >
              Bölüm {c.num}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
