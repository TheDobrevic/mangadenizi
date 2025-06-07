// src/app/series/[id]/chapter/[num]/ChapterReader.tsx
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Chapter {
  id: string;
  num: string;
  pages: string[];
}
interface Props { chapter: Chapter; }

export default function ChapterReader({ chapter }: Props) {
  const [visibleCount, setVisibleCount] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && visibleCount < chapter.pages.length) {
      setVisibleCount(prev => prev + 1);
    }
  }, [visibleCount, chapter.pages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { rootMargin: '200px' });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);

  return (
    <div className="p-8 bg-white dark:bg-gray-800">
      <h1 className="text-xl font-medium mb-4">
        Seri {chapter.id} – Bölüm {chapter.num}
      </h1>
      <div className="space-y-4">
        {chapter.pages.slice(0, visibleCount).map((page, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded p-4 text-gray-500"
          >
            {/* Gerçek resim URL’leri için <img src={page} /> kullan */}
            {page}
          </div>
        ))}
      </div>
      <div ref={loaderRef} className="h-8" />
    </div>
  );
}
