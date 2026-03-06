import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, RegisterCTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Bergen County Xpress pricing: First Half Elite $625, Full Novice $300. Payment after second practice. Flexible options for youth track & field in Bergen County.',
  openGraph: {
    title: 'Pricing | Bergen County Xpress',
    description: 'Affordable pricing for BCX track and field programs. First Half Elite and Full Novice options. Payment after your second practice.',
    url: '/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Bergen County Xpress',
    description: 'Affordable pricing for youth track and field programs in Bergen County.',
  },
};

export default function Pricing() {
  const plans = [
    {
      name: 'First Half Elite',
      price: '$625',
      description: 'Elite training program for the first half of the season with advanced coaching and competition opportunities.',
    },
    {
      name: 'Full Novice',
      price: '$300',
      description: 'Complete novice program designed for athletes new to track and field, covering fundamentals and skill development.',
    },
  ];

  return (
    <div className="bg-white min-w-0">
      <PageHero
        title="Pricing"
        subtitle="Choose the plan that fits your athlete's level."
      />

      {/* Pricing Cards */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-lg transition-shadow hover:shadow-xl sm:p-8"
              >
                <h2 className="text-xl font-bold text-[#0b0b0f] sm:text-2xl">{plan.name}</h2>
                <p className="mt-2 text-sm text-gray-600 sm:mt-3 sm:text-base">{plan.description}</p>
                <div className="mt-4 sm:mt-6">
                  <span className="text-4xl font-bold text-[#0b0b0f] sm:text-5xl">{plan.price}</span>
                </div>
                <Link
                  href="/register"
                  className="mt-6 flex items-center justify-center min-h-[48px] w-full rounded-lg bg-[#c8102e] px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#9f0d24] focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2 sm:mt-8"
                >
                  Register
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Policy */}
      <section className="bg-gray-50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0b0f] sm:text-3xl">Payment Policy</h2>
            <div className="mt-6 rounded-lg bg-white p-4 shadow-sm sm:mt-8 sm:p-6">
              <ul className="space-y-4 text-sm text-gray-700 sm:text-base">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#c8102e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="ml-3">Fee will not be collected until after the second practice.</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#c8102e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="ml-3">Payment is due by Wednesday, March 11th.</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#c8102e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="ml-3">
                    Parents will be responsible for registering their athletes for USATF under the Bergen County Xpress Club. 
                    <span className="block mt-1 text-sm text-gray-600 italic">USATF registration link coming soon.</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Requirement */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border-2 border-[#c8102e] bg-[#c8102e]/5 p-4 shadow-sm sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <svg
                  className="h-5 w-5 shrink-0 mt-0.5 text-[#c8102e] sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-[#0b0b0f] sm:text-xl">Equipment Requirement</h3>
                  <p className="mt-2 text-sm text-gray-700 sm:text-base">
                    <strong>Running shoes only — no Jordans</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegisterCTA
        headline="Ready to get started?"
        supportingCopy="Select your plan and register for the 2026 season. Payment is collected after your second practice."
        buttonText="Register for the 2026 Season"
      />
    </div>
  );
}
