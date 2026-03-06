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
      <section className="bg-gradient-to-br from-[#c8102e] to-[#9f0d24] py-12 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl sm:text-5xl lg:text-6xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-red-50 sm:mt-6 sm:text-xl lg:text-2xl">
            Everything you need to know about Bergen County Xpress
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  className="flex w-full min-h-[48px] items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-inset transition-colors sm:px-6 sm:py-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base font-semibold text-gray-900 sm:text-lg">{faq.question}</span>
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
                  <div className="px-4 pb-4 sm:px-6">
                    <p className="text-sm text-gray-600 sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Still Have Questions?
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-4 sm:text-lg">
              We're here to help! Contact us and we'll get back to you as soon as possible.
            </p>
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href="mailto:info@bergencountyxpress.com"
                className="bcx-btn"
              >
                Email Us
              </a>
              <a
                href="tel:+12015551234"
                className="bcx-btn-outline"
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
