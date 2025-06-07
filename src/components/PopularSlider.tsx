// src/components/HeroSlider.tsx
'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const slides: HeroSlide[] = [
  {
    id: '1',
    title: 'Discover New Adventures',
    subtitle: 'Dive into thousands of manga and webtoons',
    imageUrl: 'C:\Users\mertc\OneDrive\Masaüstü\MangaWebsite\manga\manga-reader\public\covers\mangaA.jpg',
    ctaText: 'Explore Now',
    ctaLink: '/series'
  },
  {
    id: '2',
    title: 'Earn with Your Stories',
    subtitle: 'Publish and monetize your own webtoons',
    imageUrl: '/hero/slide2.jpg',
    ctaText: 'Learn How',
    ctaLink: '/about'
  },
  {
    id: '3',
    title: 'Download the App',
    subtitle: 'Read on the go – Available on iOS & Android',
    imageUrl: '/hero/slide3.jpg',
    ctaText: 'Get the App',
    ctaLink: '/download'
  }
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
        className="w-full h-[400px] md:h-[500px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              {/* Left: Image */}
              <div
                className="col-span-2 h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              />

              {/* Right: Text & CTA */}
              <div className="col-span-1 flex flex-col justify-center items-start p-8 bg-white dark:bg-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}