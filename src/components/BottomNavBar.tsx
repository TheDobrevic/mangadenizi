// src/components/BottomNavBar.tsx
'use client';

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home as HomeIcon,
  BookOpen as SerilerIcon,
  Search as SearchIcon,
  User as UserIcon,
  Settings as SettingsIcon,
} from 'lucide-react';

// Renk paleti: ana (primary) = mavi, yardımcı (accent) = turuncu
const navItems = [
  { href: '/', label: 'Anasayfa', icon: HomeIcon },
  { href: '/series', label: 'Seriler', icon: SerilerIcon },
  { href: '/search', label: 'Arama', icon: SearchIcon },
  { href: '/profile', label: 'Profil', icon: UserIcon },
  { href: '/settings', label: 'Ayarlar', icon: SettingsIcon },
];

export default function BottomNavBar() {
  const pathname = usePathname() || '/';
  const [searchActive, setSearchActive] = useState(false);
  const [popoverLeft, setPopoverLeft] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Otomatik odak
  useEffect(() => {
    if (searchActive) inputRef.current?.focus();
  }, [searchActive]);

  // Popover pozisyonu
  useLayoutEffect(() => {
    if (searchActive && buttonRef.current && popoverRef.current) {
      const btn = buttonRef.current.getBoundingClientRect();
      const pop = popoverRef.current.getBoundingClientRect();
      const x = btn.left + btn.width / 2 - pop.width / 2;
      setPopoverLeft(x);
    }
  }, [searchActive]);

  const toggleSearch = () => setSearchActive(prev => !prev);

  return (
    <>
      <AnimatePresence>
        {searchActive && (
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '4.5rem',
              left: popoverLeft,
              width: '300px',
            }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 z-40"
          >
            <div className="flex items-center space-x-2">
              <SearchIcon size={20} className="text-blue-500" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Seri ara..."
                className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isSearch = href === '/search';
            const isActive = href === pathname || (isSearch && searchActive);
            const classes = `flex-1 flex flex-col items-center py-2 cursor-pointer select-none ${
              isActive ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'
            }`;

            if (isSearch) {
              return (
                <button key={href} onClick={toggleSearch} ref={buttonRef} className={classes}>
                  <Icon size={24} />
                  <span className="text-xs mt-1">{label}</span>
                </button>
              );
            }

            return (
              <Link key={href} href={href} className={classes}>
                <Icon size={24} />
                <span className="text-xs mt-1">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
