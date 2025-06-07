'use client';

import dynamic from 'next/dynamic';

// ssr: false ile sadece client-side’da yüklensin
const BottomNavBar = dynamic(
  () => import('@/components/BottomNavBar'),
  { ssr: false }
);

export default function BottomNavBarWrapper() {
  return <BottomNavBar />;
}
