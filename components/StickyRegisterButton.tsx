'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StickyRegisterButton() {
  const pathname = usePathname();
  
  // Hide on register page
  if (pathname === '/register') {
    return null;
  }

  return (
    <Link
      href="/register"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#c8102e] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#9f0d24] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2"
      aria-label="Register for BCX"
    >
      <span className="hidden sm:inline">Register Now</span>
      <span className="sm:hidden">Register</span>
      <svg
        className="ml-2 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </Link>
  );
}
