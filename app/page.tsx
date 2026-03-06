import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RegisterCTA } from '@/components/sections';
import { FadeInSection } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Bergen County Xpress (BCX) is your premier youth track & field club in Bergen County. Expert coaching, full-event training, and a supportive team for athletes ages 13–18. Register for the 2026 season.',
  openGraph: {
    title: 'Bergen County Xpress | Youth Track & Field Club',
    description: 'Premier youth track and field club in Bergen County. Expert coaching, full-event training, and a supportive team for athletes ages 13–18.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bergen County Xpress | Youth Track & Field Club',
    description: 'Premier track and field club in Bergen County. Expert coaching for youth athletes ages 13–18.',
  },
};

const PILLARS = [
  { title: 'Expert coaching', line: 'Certified. Experienced. Dedicated.' },
  { title: 'Full-event training', line: 'Sprints to throws. Every discipline.' },
  { title: 'Real community', line: 'One team. One standard.' },
];

const TESTIMONIALS = [
  { quote: 'BCX gave my daughter the confidence and skills she needed. The coaches truly care about every athlete.', by: 'Parent, Teaneck' },
  { quote: 'From first practice to AAU Junior Olympics—BCX supported our whole journey. Worth every minute.', by: 'Parent, Bergen County' },
  { quote: 'Best track club around. My teammates are awesome.', by: 'Youth athlete' },
];

export default function Home() {
  return (
    <>
      {/* Hero — full-bleed, bold, minimal */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-black" aria-label="Introduction">
        <Image
          src="/gallery/athlete-in-action.png"
          alt=""
          fill
          className="object-cover object-center opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative z-10 w-full max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-sm">
            Youth track & field · Ages 13–18 · Bergen County
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Run fast.<br />Jump high.<br /><span className="text-[#c8102e]">Throw far.</span>
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-lg text-white/90 sm:text-xl">
            Bergen County Xpress. Expert coaching. One team.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="bcx-btn w-full min-w-[200px] bg-white text-black hover:bg-gray-100 sm:w-auto px-8 py-4 text-base font-bold"
            >
              Join 2026
            </Link>
            <Link
              href="/program"
              className="text-sm font-medium text-white underline underline-offset-4 hover:text-[#c8102e] transition-colors"
            >
              Program →
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars — three columns, minimal text, generous space */}
      <FadeInSection>
        <section className="bg-white py-20 sm:py-28 lg:py-36" aria-label="Why BCX">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 lg:gap-20">
              {PILLARS.map(({ title, line }) => (
                <div key={title} className="text-center">
                  <h2 className="text-xl font-bold uppercase tracking-widest text-black sm:text-2xl">
                    {title}
                  </h2>
                  <p className="mt-4 text-sm text-gray-600 sm:text-base">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Statement — single bold line */}
      <section className="bg-black py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            First practice <span className="text-[#c8102e]">March 8</span> · Teaneck High School
          </p>
          <Link
            href="/program"
            className="mt-6 inline-block text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white transition-colors"
          >
            Full schedule & details →
          </Link>
        </div>
      </section>

      {/* Achievements — clean grid, minimal copy */}
      <FadeInSection>
        <section className="bg-white py-20 sm:py-28 lg:py-36" aria-labelledby="achievements-heading">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <h2 id="achievements-heading" className="text-center text-2xl font-bold uppercase tracking-widest text-black sm:text-3xl">
              Recent results
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <article className="border-b border-gray-200 pb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c8102e]">AAU Junior Olympics</p>
                <p className="mt-2 text-sm text-gray-600">July 2025 · Nationals qualifiers, medals across events</p>
              </article>
              <article className="border-b border-gray-200 pb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c8102e]">USATF NJ Open</p>
                <p className="mt-2 text-sm text-gray-600">June 2025 · 1st Girls 11–12 100m, shot put, more</p>
              </article>
              <article className="border-b border-gray-200 pb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c8102e]">Icahn Stadium</p>
                <p className="mt-2 text-sm text-gray-600">April 2025 · 12 athletes, PRs, 4×100 relay 3rd</p>
              </article>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials — three, large type, lots of space */}
      <FadeInSection>
        <section className="bg-gray-50 py-20 sm:py-28 lg:py-36" aria-labelledby="testimonials-heading">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <h2 id="testimonials-heading" className="text-center text-2xl font-bold uppercase tracking-widest text-black sm:text-3xl">
              What families say
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 lg:gap-20">
              {TESTIMONIALS.map(({ quote, by }) => (
                <blockquote key={by} className="text-center">
                  <p className="text-lg font-medium leading-relaxed text-gray-900 sm:text-xl">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-gray-500">— {by}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <RegisterCTA
        headline="Join the team."
        supportingCopy="Register for the 2026 season. First practice March 8."
        buttonText="Register now"
      />
    </>
  );
}
