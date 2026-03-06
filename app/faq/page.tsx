'use client';

import { useState } from 'react';
import { PageHero, RegisterCTA } from '@/components/sections';

type FaqItem = { question: string; answer: string };
type FaqGroup = { title: string; items: FaqItem[] };

const faqGroups: FaqGroup[] = [
  {
    title: 'Training',
    items: [
      {
        question: 'Do athletes need prior experience?',
        answer: 'No prior experience is required. We welcome athletes of all skill levels, from complete beginners to experienced competitors. Coaches assess each athlete and place them in appropriate training groups.',
      },
      {
        question: 'What equipment do athletes need?',
        answer: 'Running shoes only—no Jordans or fashion sneakers. We provide event-specific equipment (hurdles, shot puts, discus, etc.). Wear athletic clothing suitable for the weather.',
      },
      {
        question: 'How do you handle injuries?',
        answer: 'Athlete safety is our top priority. We have certified athletic trainers available at practices and meets. We work with injured athletes to modify training as needed and coordinate with medical professionals to ensure a safe return to activity.',
      },
      {
        question: 'Do you offer private coaching?',
        answer: 'Yes. Private coaching sessions are available for athletes in our Elite program, or can be arranged separately. Contact us to discuss options and availability.',
      },
      {
        question: 'Can athletes do other sports too?',
        answer: 'Absolutely. We encourage multi-sport participation and work with athletes to balance commitments. Many of our athletes participate in other sports during the off-season.',
      },
    ],
  },
  {
    title: 'Schedule',
    items: [
      {
        question: 'When is the first practice?',
        answer: 'First practice for the 2026 season is Sunday, March 8 at 3:00 PM at Teaneck High School (158 Cranford Place, Teaneck).',
      },
      {
        question: 'What is the practice schedule?',
        answer: 'Sundays at 3:00 PM; Tuesdays, Wednesdays, and Thursdays at 6:00 PM. All practices are at Teaneck High School. During competition season, additional sessions may be added.',
      },
      {
        question: 'What is the competition schedule like?',
        answer: 'Meets are typically on weekends in spring and summer. Our first two meets are April 12 and April 19 at Icahn Stadium. The full season schedule is provided at the start of the season.',
      },
      {
        question: 'How often are practices?',
        answer: 'Regular season: 3–4 times per week (Sunday plus select weeknights). Elite program athletes may have more frequent training. Schedules are shared at the start of the season.',
      },
    ],
  },
  {
    title: 'Registration & Payment',
    items: [
      {
        question: 'How do I register?',
        answer: 'Register online through our registration page. We recommend attending an information session or practice first to see if BCX is the right fit. We\'ll confirm within 2–3 business days.',
      },
      {
        question: 'What age groups does BCX serve?',
        answer: 'We welcome athletes ages 6–13. Programs are divided into age-appropriate groups: youth (6–9), and junior (10–13).',
      },
      {
        question: 'When is payment due and how much?',
        answer: 'Fees are not collected until after the second practice. Payment is due Wednesday, March 11. First Half Elite: $625. Full Novice: $300. Details are on the registration and pricing pages.',
      },
      {
        question: 'What is your refund policy?',
        answer: 'Full refunds are available within the first two weeks of the season. After that, refunds are prorated based on the remaining season. Contact us for specific situations.',
      },
      {
        question: 'Are parents required to volunteer?',
        answer: 'Volunteering is not required but greatly appreciated. We often need help with meet management, timing, and team events. It\'s a great way to be involved in your child\'s experience.',
      },
    ],
  },
  {
    title: 'General',
    items: [
      {
        question: 'What makes BCX different from other track clubs?',
        answer: 'BCX combines expert coaching, comprehensive training, and a supportive community. Our coaches are highly certified, we focus on long-term athlete development, and we offer a clear path from novice to elite competition.',
      },
    ],
  },
];

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  return (
    <div className="bg-white min-w-0">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Training, schedule, and registration—answers in one place"
      />

      {/* FAQ Accordion by category */}
      <section className="py-10 sm:py-16" aria-label="FAQ list">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <h2 className="mb-4 text-lg font-bold text-[#0b0b0f] sm:text-xl">
                  {group.title}
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {group.items.map((faq, index) => {
                    const key = `${group.title}-${index}`;
                    const keyId = key.replace(/\s+/g, '-').replace(/&/g, 'and');
                    const isOpen = openKey === key;
                    return (
                      <div
                        key={key}
                        className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                      >
                        <button
                          type="button"
                          className="flex w-full min-h-[48px] items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-inset transition-colors sm:px-6 sm:py-4"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${keyId}`}
                          id={`faq-question-${keyId}`}
                        >
                          <span className="text-base font-semibold text-gray-900 sm:text-lg pr-2">
                            {faq.question}
                          </span>
                          <svg
                            className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>
                        <div
                          id={`faq-answer-${keyId}`}
                          role="region"
                          aria-labelledby={`faq-question-${keyId}`}
                          className="grid transition-[grid-template-rows] duration-200 ease-out"
                          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                        >
                          <div className="overflow-hidden">
                            <div className="px-4 pb-4 pt-0 sm:px-6">
                              <p className="text-sm text-gray-600 sm:text-base leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-10 sm:py-16" aria-labelledby="still-have-questions-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="still-have-questions-heading" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Still Have Questions?
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-4 sm:text-lg">
              We're here to help. Contact us and we'll get back to you as soon as possible.
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

      <RegisterCTA
        headline="Ready to join BCX?"
        supportingCopy="Register online for the 2026 season. We'll be in touch within 2–3 business days."
        buttonText="Register for the 2026 Season"
      />
    </div>
  );
}
