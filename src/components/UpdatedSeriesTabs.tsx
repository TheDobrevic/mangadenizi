'use client';
import { useState, useEffect } from 'react';

interface SeriesShort { id: string; title: string; updatedAt: string; type: 'Manga' | 'Anime' | 'Novel' }
const updatedSeries: SeriesShort[] = [
  { id: '1', title: 'Manga A', updatedAt: '2025-06-05', type: 'Manga' },
  { id: '2', title: 'Anime B', updatedAt: '2025-06-06', type: 'Anime' },
  // ...
];

export default function UpdatedSeriesTabs() {
  const [active, setActive] = useState<'Manga' | 'Anime' | 'Novel'>('Manga');
  const [list, setList] = useState<SeriesShort[]>([]);

  useEffect(() => {
    setList(updatedSeries.filter(s => s.type === active).sort((a, b) => (b.updatedAt > a.updatedAt ? 1 : -1)));
  }, [active]);

  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">Son Güncellenen Seriler</h2>
      <div className="flex space-x-4 mb-4">
        {['Manga', 'Anime', 'Novel'].map(t => (
          <button key={t} onClick={() => setActive(t as any)} className={`px-4 py-2 rounded ${active === t ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
            {t}
          </button>
        ))}
      </div>
      <ul className="space-y-2">
        {list.map(s => (
          <li key={s.id} className="p-4 bg-white dark:bg-gray-700 rounded shadow">
            <h3 className="text-lg font-medium dark:text-gray-100">{s.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">Güncelleme: {s.updatedAt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
