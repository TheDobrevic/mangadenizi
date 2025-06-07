// src/lib/data.ts

export interface Chapter {
  num: string;
  pages: string[];
}

export interface Series {
  id: string;
  title: string;
  chapters: Chapter[];
}

export const seriesList: Series[] = [
  {
    id: '1',
    title: 'Example Manga A',
    chapters: [
      { num: '1', pages: ['Sayfa A1', 'Sayfa A2'] },
      { num: '2', pages: ['Sayfa A1', 'Sayfa A2', 'Sayfa A3'] },
    ],
  },
  {
    id: '2',
    title: 'Example Manga B',
    chapters: [
      { num: '1', pages: ['Sayfa B1', 'Sayfa B2'] },
      { num: '2', pages: ['Sayfa B1', 'Sayfa B2'] },
    ],
  },
];
