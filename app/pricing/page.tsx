import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Affordable pricing options for Bergen County Xpress track and field programs. Flexible payment plans available.',
};

export default function Pricing() {
  const plans = [
    {
      name: 'Seasonal',
      price: '$450',
      period: 'per season',
      description: 'Full access to training programs and competitions',
      features: [
        '3 training sessions per week',
        'Competition entry fees included',
        'BCX team uniform',
        'Coaching support',
        'Access to facilities',
        'Team events & social activities',
      ],
      popular: false,
    },
    {
      name: 'Annual',
      price: '$1,200',
      period: 'per year',
      description: 'Best value for year-round training',
      features: [
        'All seasonal benefits',
        'Year-round training access',
        'Priority meet registration',
        '2 BCX team uniforms',
        'Off-season training programs',
        'Performance tracking & analysis',
        '10% discount on camps & clinics',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '$1,800',
      period: 'per year',
      description: 'For serious competitors seeking maximum support',
      features: [
        'All annual benefits',
        'Individualized training plans',
        '1-on-1 coaching sessions (4/month)',
        'Nutrition & recovery guidance',
        'College recruitment support',
        'Competition travel support',
        'Advanced performance analytics',
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Pricing</h1>
          <p className="mt-4 text-xl text-blue-100">
            Flexible pricing options to fit your family's needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? 'border-blue-600 bg-blue-50 shadow-xl'
                    : 'border-gray-200 bg-white shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="ml-2 text-gray-600">{plan.period}</span>
                </div>
                <ul className="mt-8 space-y-4 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-blue-600' : 'text-green-500'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`mt-8 block w-full rounded-lg px-6 py-3 text-center text-base font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Additional Information</h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Payment Options</h3>
                <p className="mt-2 text-gray-600">
                  We offer flexible payment plans. Seasonal plans can be paid in 3 monthly installments. 
                  Annual and Elite plans can be paid in 6 or 12 monthly installments. Contact us for details.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Sibling Discount</h3>
                <p className="mt-2 text-gray-600">
                  Families with multiple athletes receive a 15% discount on each additional child's registration.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Financial Assistance</h3>
                <p className="mt-2 text-gray-600">
                  We believe every child should have access to quality athletics. Limited scholarships and 
                  financial assistance are available. Please contact us to learn more about eligibility and 
                  application process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
