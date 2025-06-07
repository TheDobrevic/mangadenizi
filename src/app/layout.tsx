// src/app/layout.tsx
import './globals.css';
import { Providers } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import Head from 'next/head';
import BottomNavBarWrapper from '@/components/BottomNavBarWrapper';

export const metadata = { title: 'MangaDenizi' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
        <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Providers>
          <header className="p-4 flex justify-end">
            <ThemeToggle />
          </header>

          {/* Burayı ekleyin: içeriğe alt boşluk veriyoruz */}
          <div className="pb-16">
            {children}
          </div>

          <BottomNavBarWrapper />
        </Providers>
      </body>
    </html>
  );
}
