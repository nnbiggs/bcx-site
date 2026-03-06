'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submissions, setSubmissions] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return;
    setSubmissions((prev) => [...prev, trimmed]);
    setEmail('');
    setSubmitted(true);
  };

  return (
    <footer className="bg-[#0b0b0f] text-gray-400 w-full min-w-0" role="contentinfo" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 md:col-span-2 min-w-0">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c8102e] to-[#9f0d24] text-white" aria-hidden="true">
                <span className="text-base font-bold tracking-tight">BCX</span>
              </div>
              <div className="min-w-0">
                <div className="text-base font-bold tracking-tight text-white sm:text-lg">Bergen County Xpress</div>
                <div className="text-xs text-gray-500 sm:text-sm">Track & Field Club</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              Empowering young athletes to reach their full potential through excellence in track and field.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/program" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1">Program</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1">Pricing</Link></li>
              <li><Link href="/coaching" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1">Coaching</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Stay updated</h3>
            <p className="text-sm text-gray-500 mb-3 leading-relaxed">Get season news and updates.</p>
            {submitted ? (
              <p className="text-sm text-green-400">Thanks! We&apos;ll be in touch.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2" aria-label="Newsletter signup">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full min-h-[44px] rounded-lg border border-gray-600 bg-gray-800 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#c8102e] focus:outline-none focus:ring-1 focus:ring-[#c8102e]"
                  aria-describedby="footer-email-hint"
                />
                <span id="footer-email-hint" className="sr-only">Enter your email to receive season updates.</span>
                <button
                  type="submit"
                  className="w-full min-h-[44px] rounded-lg bg-[#c8102e] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9f0d24] focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="mailto:info@bergencountyxpress.com" className="hover:text-white transition-colors break-all" aria-label="Email Bergen County Xpress">info@bergencountyxpress.com</a></li>
              <li><a href="tel:+12015551234" className="hover:text-white transition-colors inline-block py-1" aria-label="Call Bergen County Xpress">(201) 555-1234</a></li>
              <li className="pt-2">
                <Link href="/register" className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-[#c8102e] px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#9f0d24]">Register Now</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 border-t border-gray-800 pt-8 sm:pt-10">
          <p className="text-center text-xs text-gray-500 sm:text-sm">&copy; {new Date().getFullYear()} Bergen County Xpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
