import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero, RegisterCTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Coaching',
  description: 'Meet the Bergen County Xpress coaching staff. USATF-certified coaches, experienced in sprints, throws, distance, and jumps. NCSI background-checked.',
  openGraph: {
    title: 'Coaching | Bergen County Xpress',
    description: 'Meet BCX coaching staff. USATF-certified, experienced in all track and field events. Dedicated to youth athlete development.',
    url: '/coaching',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching | Bergen County Xpress',
    description: 'Experienced, certified coaches for youth track and field in Bergen County.',
  },
};

const coaches = [
  {
    name: 'Phil Hogan',
    role: 'Head Coach',
    credentials: 'USATF Certified Level 1 & Level 2 Throws Coach',
    specialties: ['Shot Put', 'Discus', 'Javelin', 'Meet Entries', 'Practice Scheduling'],
    bio: 'Phil is entering his 11th season as Head Coach and co-founder of Bergen Xpress. He specializes in throwing events, including shot, discus and javelin, and oversees track meet entries and practice scheduling.',
    contact: 'Contact Coach Phil',
    image: '/images/coaches/phil-hogan.png',
  },
  {
    name: 'Michele Hogan',
    role: 'Team Admin and People Coach',
    credentials: 'Co-founder',
    specialties: ['Registration', 'Logistics', 'Team Finances', 'Parent & Staff Coaching'],
    bio: 'Michele is entering her 11th season as a co-founder of Bergen Xpress. She oversees all registration, logistics and team financial activities. She coaches the parents and the BCX coaching staff.',
    contact: 'Contact Michele',
    image: '/images/coaches/michele-hogan.png',
  },
  {
    name: 'Rob Douglas',
    role: 'Assistant Coach',
    credentials: 'Former NFL – New York Giants',
    specialties: ['Football background', 'Athletic development'],
    bio: 'Coach Rob is a former professional football player for the New York Giants. Born and raised in St. Louis, Missouri, he was an All State football player and State Football Champion. He attended the University of Memphis and played football for the Tigers from 2001–2005. Coach Rob was acquired by the New York Giants and played with the Giants from 2006–2008.',
    contact: '',
    image: '/images/coaches/rob-douglas.png',
  },
  {
    name: 'Coach Biggs',
    role: 'Hurdles and Sprint Coach',
    credentials: '',
    specialties: ['Hurdles', 'Sprints'],
    bio: '',
    contact: '',
    image: '👨‍🏫',
  },
  {
    name: 'Coach Rob A.',
    role: 'Middle and Long Distance Coach',
    credentials: '',
    specialties: ['Middle Distance', 'Long Distance'],
    bio: '',
    contact: '',
    image: '/images/coaches/coach-rob-a.png',
  },
  {
    name: 'Coach Obed',
    role: '9–11 Year Old Sprints',
    credentials: '',
    specialties: ['Sprints', 'Ages 9–11'],
    bio: '',
    contact: '',
    image: '/images/coaches/coach-obed.png',
  },
  {
    name: 'Coach Shalanda',
    role: 'Assistant Coach',
    credentials: '',
    specialties: [],
    bio: '',
    contact: '',
    image: '/images/coaches/coach-shalanda.png',
  },
  {
    name: 'Coach Alicia',
    role: '11–13 Elite Sprints',
    credentials: '',
    specialties: ['Elite Sprints', 'Ages 11–13'],
    bio: '',
    contact: '',
    image: '👩‍🏫',
  },
  {
    name: 'Coach Kertis',
    role: 'Assistant Coach',
    credentials: '',
    specialties: [],
    bio: '',
    contact: '',
    image: '/images/coaches/coach-alicia.png',
  },
  {
    name: 'Coach Marlon',
    role: '9 and Under',
    credentials: '',
    specialties: ['Ages 9 & Under'],
    bio: '',
    contact: '',
    image: '/images/coaches/coach-marlon.png',
  },
];

const philosophyItems = [
  {
    title: 'Athlete-Centered Approach',
    body: 'We believe in developing the whole athlete—physically, mentally, and emotionally. Our coaches focus on individual growth and long-term development over short-term results.',
  },
  {
    title: 'Technical Excellence',
    body: 'Proper technique is the foundation of performance and injury prevention. Our coaches emphasize fundamental skills and progressive skill development at every level.',
  },
  {
    title: 'Positive Environment',
    body: 'We create a supportive, encouraging atmosphere where athletes feel safe to take risks, make mistakes, and learn. Success is measured by effort, improvement, and character, not just wins and losses.',
  },
  {
    title: 'Continuous Learning',
    body: 'Our coaching staff regularly participates in continuing education, certifications, and professional development to stay current with best practices in track and field training and youth development.',
  },
];

function CoachCard({
  name,
  role,
  credentials,
  specialties,
  bio,
  contact,
  image,
}: {
  name: string;
  role: string;
  credentials: string;
  specialties: string[];
  bio: string;
  contact: string;
  image: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
      {/* Header: avatar + name/role */}
      <header className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#c8102e]/10 text-2xl sm:h-16 sm:w-16 sm:text-3xl"
          aria-hidden
        >
          {image.startsWith('/') ? (
            <Image
              src={image}
              alt={name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          ) : (
            image
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold tracking-tight text-[#0b0b0f] sm:text-xl">
            {name}
          </h2>
          <p className="mt-1 text-sm font-medium text-[#c8102e]">
            {role}
          </p>
          {credentials && (
            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              {credentials}
            </p>
          )}
        </div>
      </header>

      {/* Bio */}
      {bio && (
        <div className="mt-4 sm:mt-5">
          <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
            {bio}
          </p>
        </div>
      )}

      {/* Specialties */}
      {specialties.length > 0 && (
        <div className="mt-4 sm:mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Specialties
          </p>
          <ul className="mt-2 flex flex-wrap gap-2" role="list">
            {specialties.map((specialty) => (
              <li key={specialty}>
                <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {specialty}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact */}
      {contact && (
        <footer className="mt-4 border-t border-gray-100 pt-4 sm:mt-5 sm:pt-5">
          <p className="text-sm font-semibold text-[#c8102e]">
            {contact}
          </p>
        </footer>
      )}
    </article>
  );
}

export default function Coaching() {
  return (
    <div className="bg-white min-w-0">
      <PageHero
        title="Coaching Staff"
        subtitle="Experienced, certified coaches dedicated to your athlete's success"
        footnote="All Bergen Xpress staff have passed NCSI criminal background checks."
      />

      {/* Intro + Coaches Grid */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0b0f] sm:text-3xl">
              Meet the <span className="text-[#c8102e]">BCX</span> team
            </h2>
            <p className="mt-3 text-base text-gray-700 sm:mt-4 sm:text-lg">
              From head coach to event specialists, our staff brings years of experience and a shared commitment to youth development.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} {...coach} />
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0b0f] sm:text-3xl">
              Our <span className="text-[#c8102e]">Coaching Philosophy</span>
            </h2>
            <p className="mt-3 text-base text-gray-700 sm:mt-4 sm:text-lg">
              How we approach training, competition, and long-term athlete development.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {philosophyItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
                >
                  <h3 className="text-lg font-bold text-[#0b0b0f] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:mt-4 sm:text-base">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RegisterCTA
        headline="Train with our coaches."
        supportingCopy="Join BCX and work with our certified staff. Register for the 2026 season and start your track & field journey."
        buttonText="Register for the 2026 Season"
      />
    </div>
  );
}
