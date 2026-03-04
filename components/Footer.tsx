import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#c8102e] to-[#9f0d24] text-white">
                <span className="text-lg font-bold">BCX</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">Bergen County Xpress</div>
                <div className="text-sm text-gray-400">Track & Field Club</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Empowering young athletes to reach their full potential through excellence in track and field.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/program" className="text-sm hover:text-white transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-sm hover:text-white transition-colors">
                  Coaching
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@bergencountyxpress.com" className="hover:text-white transition-colors">
                  info@bergencountyxpress.com
                </a>
              </li>
              <li>
                <a href="tel:+12015551234" className="hover:text-white transition-colors">
                  (201) 555-1234
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/register"
                  className="inline-block rounded-lg bg-[#c8102e] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#9f0d24]"
                >
                  Register Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Bergen County Xpress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
