'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/program', label: 'Program' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/register', label: 'Register' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-0 sm:gap-3">
            <div className="relative h-10 w-28 shrink-0 sm:h-12 sm:w-40 lg:w-48">
              <Image
                src="/bcx-logo.png"
                alt="Bergen County Xpress"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">
                Bergen County Xpress
              </div>
              <div className="text-xs text-gray-600">
                Track & Field Club
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  link.href === '/register'
                    ? 'rounded-lg bg-[#c8102e] px-4 py-2 text-white hover:bg-[#9f0d24] focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2'
                    : 'text-gray-700 hover:text-[#c8102e]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#c8102e] transition-colors duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>

            {!isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 border-t border-gray-200 px-4 pb-4 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 min-h-[44px] flex items-center ${
                  link.href === '/register'
                    ? 'bg-[#c8102e] text-white hover:bg-[#9f0d24]'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#c8102e]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
