'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/program', label: 'Program' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-md safe-area-inset-top"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 min-h-[64px] sm:h-20 items-center justify-between gap-2">
          {/* Logo - always first for focus order */}
          <Link
            href="/"
            className="flex items-center gap-2 min-w-0 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2 rounded-lg"
            onClick={closeMenu}
          >
            <div className="relative h-10 w-28 shrink-0 sm:h-12 sm:w-40 lg:w-48">
              <Image
                src="/bcx-logo.png"
                alt="Bergen County Xpress - Home"
                fill
                sizes="(max-width: 640px) 112px, (max-width: 1024px) 160px, 192px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Bergen County Xpress</span>
              <span className="block text-xs text-gray-600">Track & Field Club</span>
            </div>
          </Link>

          {/* Desktop: main links + primary CTA */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            <ul className="flex items-center gap-1 lg:gap-2" role="list">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#c8102e] focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-inset transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-2 lg:ml-4 border-l border-gray-200 pl-2 lg:pl-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-lg bg-[#c8102e] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#9f0d24] focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-3 min-h-[44px] min-w-[44px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-inset transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel - only in DOM when open so focus stays predictable */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-200 bg-white"
          aria-label="Mobile navigation"
        >
          <div className="px-4 pb-4 pt-2">
            {/* Primary action first on mobile */}
            <Link
              href="/register"
              className="mb-3 flex min-h-[48px] items-center justify-center rounded-lg bg-[#c8102e] px-4 py-3 text-base font-semibold text-white hover:bg-[#9f0d24] focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2"
              onClick={closeMenu}
            >
              Register for 2026 Season
            </Link>
            <ul className="space-y-0.5" role="list">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#c8102e] focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-inset min-h-[44px] flex items-center"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
