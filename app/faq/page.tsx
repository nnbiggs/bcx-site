'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What age groups does BCX serve?',
    answer: 'We welcome athletes from ages 6-18. Our programs are divided into age-appropriate groups: Beginners (ages 6-10), Youth (ages 11-13), and Junior/Senior (ages 14-18).',
  },
  {
    question: 'Do athletes need prior experience?',
    answer: 'No prior experience is required! We welcome athletes of all skill levels, from complete beginners to experienced competitors. Our coaches will assess each athlete and place them in appropriate training groups.',
  },
  {
    question: 'What equipment do athletes need?',
    answer: 'Athletes need appropriate running shoes and athletic clothing. We provide all event-specific equipment (hurdles, shot puts, discus, etc.). Team uniforms are included with registration.',
  },
  {
    question: 'How often are practices?',
    answer: 'During the regular season, practices are held 3-4 times per week (Monday-Thursday evenings and Saturday mornings). During competition season, additional sessions may be scheduled. Elite program athletes may have more frequent training.',
  },
  {
    question: 'What is the competition schedule like?',
    answer: 'Competition schedules vary by age group and event. Most meets occur on weekends during the spring and summer seasons. We participate in local, regional, and state-level competitions. The full schedule is provided at the start of each season.',
  },
  {
    question: 'Are parents required to volunteer?',
    answer: 'While not required, parent volunteers are greatly appreciated! We often need help with meet management, timing, and team events. Volunteering is a great way to be involved in your child\'s athletic experience.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'Full refunds are available within the first two weeks of the season. After that, refunds are prorated based on the remaining season. Please contact us for specific situations or concerns.',
  },
  {
    question: 'Do you offer private coaching?',
    answer: 'Yes! Private coaching sessions are available for athletes in our Elite program, or can be arranged separately. Contact us to discuss private coaching options and availability.',
  },
  {
    question: 'How do you handle injuries?',
    answer: 'Athlete safety is our top priority. We have certified athletic trainers available at practices and meets. We work with injured athletes to modify training as needed and coordinate with medical professionals to ensure safe return to activity.',
  },
  {
    question: 'Can athletes participate in other sports?',
    answer: 'Absolutely! We encourage multi-sport participation and work with athletes to balance their commitments. Many of our athletes successfully participate in other sports during the off-season.',
  },
  {
    question: 'What makes BCX different from other track clubs?',
    answer: 'BCX combines expert coaching, comprehensive training programs, and a supportive community atmosphere. Our coaches are highly certified, our facilities are excellent, and we focus on long-term athlete development rather than just short-term results.',
  },
  {
    question: 'How do I register?',
    answer: 'You can register online through our registration page, or contact us to schedule a visit and learn more. We recommend attending an information session or practice to see if BCX is the right fit for your athlete.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-blue-100">
            Everything you need to know about Bergen County Xpress
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're here to help! Contact us and we'll get back to you as soon as possible.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@bergencountyxpress.com"
                className="rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Email Us
              </a>
              <a
                href="tel:+12015551234"
                className="rounded-lg border-2 border-gray-900 px-8 py-3 text-base font-semibold text-gray-900 transition-all hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
