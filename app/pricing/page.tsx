import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Affordable pricing options for Bergen County Xpress track and field programs. Flexible payment plans available.',
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
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#c8102e] to-[#9f0d24] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Pricing</h1>
          <p className="mt-6 text-xl text-red-50 sm:text-2xl">
            Choose the plan that fits your athlete's level.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <h2 className="text-2xl font-bold text-[#0b0b0f]">{plan.name}</h2>
                <p className="mt-3 text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-[#0b0b0f]">{plan.price}</span>
                </div>
                <Link
                  href="/register"
                  className="mt-8 block w-full rounded-lg bg-[#c8102e] px-6 py-3 text-center text-base font-semibold text-white transition-colors duration-200 hover:bg-[#9f0d24] focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2"
                >
                  Register
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Policy */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#0b0b0f]">Payment Policy</h2>
            <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
              <ul className="space-y-4 text-gray-700">
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
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border-2 border-[#c8102e] bg-[#c8102e]/5 p-6 shadow-sm">
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 flex-shrink-0 mt-0.5 text-[#c8102e]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-[#0b0b0f]">Equipment Requirement</h3>
                  <p className="mt-2 text-gray-700">
                    <strong>Running shoes only — no Jordans</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
