import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Bergen County Xpress (BCX) - Premier youth track and field club developing young athletes through expert coaching and comprehensive training programs.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section — What BCX is, who it's for, primary CTA */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle accent for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            {/* Who it's for — badge */}
            <p className="inline-flex items-center rounded-full bg-[#c8102e]/10 px-4 py-1.5 text-sm font-semibold text-[#c8102e] ring-1 ring-[#c8102e]/20">
              For youth athletes ages 6–18 in Bergen County
            </p>

            {/* What BCX is — clear headline */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#0b0b0f] sm:text-5xl lg:text-6xl">
              <span className="text-[#c8102e]">Bergen County Xpress</span> is your premier youth track & field club.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700 sm:text-xl lg:text-2xl max-w-2xl mx-auto">
              Expert coaching, full-event training, and a supportive team—so every young athlete can run fast, jump high, and throw far.
            </p>

            {/* Primary CTA — one clear action */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/register"
                className="bcx-btn w-full sm:w-auto min-w-[200px] text-lg px-8 py-4 shadow-lg hover:shadow-xl"
              >
                Register for the 2026 Season
              </Link>
              <Link
                href="/program"
                className="text-[#0b0b0f] font-medium underline underline-offset-4 hover:text-[#c8102e] transition-colors"
              >
                See program details →
              </Link>
            </div>

            {/* Trust / urgency line */}
            <p className="mt-8 text-sm text-gray-500">
              First practice <span className="font-semibold text-gray-700">Sunday, March 8</span> at Teaneck High School
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-[#0b0b0f] sm:text-5xl">
              Why Choose <span className="text-[#c8102e]">BCX</span>?
            </h2>
            <p className="mt-6 text-xl text-gray-700">
              We provide the training, support, and opportunities young athletes need to excel.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8 transition-shadow hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#c8102e] text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0b0b0f]">Expert Coaching</h3>
              <p className="mt-3 text-base leading-7 text-gray-700">
                Certified coaches with years of experience developing young athletes and preparing them for competition.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8 transition-shadow hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#c8102e] text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15m5 0v18a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 21V3m3.75 4.5v10.5m0 0h7.5m-7.5 0H9m3.75-13.5v10.5m0-10.5h7.5m-7.5 0H15M9 7.5h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 0H15m-1.5 0h1.5m-1.5 3H15m-1.5 0H15m-1.5 0h1.5" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0b0b0f]">Comprehensive Training</h3>
              <p className="mt-3 text-base leading-7 text-gray-700">
                Full spectrum programs covering sprints, distance, jumps, throws, and multi-events for all skill levels.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8 transition-shadow hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#c8102e] text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.645-5.963-1.88A6.979 6.979 0 017.5 15.25M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0b0b0f]">Supportive Community</h3>
              <p className="mt-3 text-base leading-7 text-gray-700">
                Join a team of dedicated athletes, supportive families, and coaches who celebrate every achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Season Information Section */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-[#0b0b0f] sm:text-5xl">
                2026 Season <span className="text-[#c8102e]">Information</span>
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Important dates, schedules, and details for the upcoming season
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {/* First Day of Practice */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8102e] text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0b0b0f]">First Day of Practice</h3>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#c8102e]">Sunday, March 8th at 3:00 PM</span>
                </p>
              </div>

              {/* Practice Schedule */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8102e] text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0b0b0f]">Practice Schedule</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#c8102e] mr-2">•</span>
                    <span><strong>Sundays</strong> at <span className="text-[#c8102e] font-semibold">3:00 PM</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c8102e] mr-2">•</span>
                    <span><strong>Tuesdays, Wednesdays, and Thursdays</strong> at <span className="text-[#c8102e] font-semibold">6:00 PM</span></span>
                  </li>
                  <li className="flex items-start mt-3 pt-3 border-t border-gray-200">
                    <span className="text-[#c8102e] mr-2">📍</span>
                    <div>
                      <p className="font-semibold">Location: Teaneck High School</p>
                      <p className="text-sm text-gray-600">GPS: 158 Cranford Place, Teaneck</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* First Two Meets */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8102e] text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0b0b0f]">First Two Meets</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#c8102e] mr-2">•</span>
                    <span><span className="font-semibold text-[#c8102e]">April 12</span> at Icahn Stadium</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c8102e] mr-2">•</span>
                    <span><span className="font-semibold text-[#c8102e]">April 19</span> at Icahn Stadium</span>
                  </li>
                </ul>
              </div>

              {/* Payment Information */}
              <div className="rounded-xl bg-white p-6 shadow-sm border-2 border-[#c8102e]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8102e] text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0a3 3 0 11-6 0 3 3 0 016 0zM6.75 18a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0b0b0f]">Payment Information</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#c8102e] mr-2">•</span>
                    <span>Fee will not be collected until after the second practice.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c8102e] mr-2">•</span>
                    <span><strong>First Half Elite:</strong> <span className="text-[#c8102e] font-semibold">$625</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c8102e] mr-2">•</span>
                    <span><strong>Full Novice:</strong> <span className="text-[#c8102e] font-semibold">$300</span></span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t-2 border-[#c8102e] bg-[#c8102e]/5 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Payment Due Date</p>
                  <p className="text-xl font-bold text-[#c8102e]">Wednesday, March 11th</p>
                </div>
              </div>

              {/* USATF Registration */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8102e] text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0b0b0f]">USATF Registration</h3>
                </div>
                <p className="text-gray-700 mb-2">
                  Parents will be responsible for registering their athletes for USATF under the <span className="font-semibold text-[#c8102e]">Bergen County Xpress Club</span>.
                </p>
                <p className="text-sm text-gray-500 italic">
                  USATF registration link coming soon.
                </p>
              </div>

              {/* Equipment Requirement */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8102e] text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0b0b0f]">Equipment Requirement</h3>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#c8102e]">Running shoes only</span> — no Jordans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0b0b0f] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to join BCX?
            </h2>
            <p className="mt-6 text-xl text-gray-300">
              Register for the 2026 season and take the first step toward your track & field goals.
            </p>
            <div className="mt-10">
              <Link
                href="/register"
                className="bcx-btn text-lg px-8 py-4"
              >
                Register for the 2026 Season
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
