// src/app/page.tsx
import PopularSlider from '@/components/PopularSlider';
import UpdatedSeriesTabs from '@/components/UpdatedSeriesTabs';

export default function Home() {
  return (
    <>
      <PopularSlider />
      <UpdatedSeriesTabs />
      {/* Other MVP components... */}
    </>
  );
}
