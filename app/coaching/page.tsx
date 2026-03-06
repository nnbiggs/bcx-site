import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching',
  description: 'Meet our experienced coaching staff at Bergen County Xpress. Certified coaches dedicated to developing young track and field athletes.',
};

export default function Coaching() {
  const coaches = [
    {
      name: 'Phil Hogan',
      role: 'Head Coach',
      credentials: 'USATF Certified Level 1 & Level 2 Throws Coach',
      specialties: ['Shot Put', 'Discus', 'Javelin', 'Meet Entries', 'Practice Scheduling'],
      bio: 'Phil is entering his 11th season as Head Coach and co-founder of Bergen Xpress. He specializes in throwing events, including shot, discus and javelin, and oversees track meet entries and practice scheduling.',
      contact: 'Contact Coach Phil',
      image: '👨‍🏫',
    },
    {
      name: 'Michele Hogan',
      role: 'Team Admin and People Coach',
      credentials: 'Co-founder',
      specialties: ['Registration', 'Logistics', 'Team Finances', 'Parent & Staff Coaching'],
      bio: 'Michele is entering her 11th season as a co-founder of Bergen Xpress. She oversees all registration, logistics and team financial activities. She coaches the parents and the BCX coaching staff.',
      contact: 'Contact Michele',
      image: '👩‍🏫',
    },
    {
      name: 'Rob Douglas',
      role: 'Assistant Coach',
      credentials: 'Former NFL – New York Giants',
      specialties: ['Football background', 'Athletic development'],
      bio: 'Coach Rob is a former professional football player for the New York Giants. Born and raised in St. Louis, Missouri, he was an All State football player and State Football Champion. He attended the University of Memphis and played football for the Tigers from 2001–2005. Coach Rob was acquired by the New York Giants and played with the Giants from 2006–2008.',
      contact: '',
      image: '👨‍🏫',
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
    { name: 'Coach Rob A.', role: 'Middle and Long Distance Coach', credentials: '', specialties: ['Middle Distance', 'Long Distance'], bio: '', contact: '', image: '👨‍🏫' },
    { name: 'Coach Obed', role: '9–11 Year Old Sprints', credentials: '', specialties: ['Sprints', 'Ages 9–11'], bio: '', contact: '', image: '👨‍🏫' },
    { name: 'Coach Shalanda', role: 'Assistant Coach', credentials: '', specialties: [], bio: '', contact: '', image: '👩‍🏫' },
    { name: 'Coach Marlon', role: '9 and Under', credentials: '', specialties: ['Ages 9 & Under'], bio: '', contact: '', image: '👨‍🏫' },
    { name: 'Coach Alicia', role: 'Assistant Coach', credentials: '', specialties: [], bio: '', contact: '', image: '👩‍🏫' },
    { name: 'Coach Kertis', role: '11–14 Elite Sprints', credentials: '', specialties: ['Elite Sprints', 'Ages 11–14'], bio: '', contact: '', image: '👨‍🏫' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#c8102e] to-[#9f0d24] py-12 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl sm:text-5xl lg:text-6xl">Coaching Staff</h1>
          <p className="mt-4 text-lg text-red-50 sm:mt-6 sm:text-xl lg:text-2xl">
            Experienced, certified coaches dedicated to your athlete's success
          </p>
          <p className="mt-3 text-sm text-red-100/90 sm:mt-4 sm:text-base">
            Bergen Xpress staff has passed NCSI criminal background checks.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6"
              >
                <div className="flex items-center gap-3 sm:space-x-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-3xl sm:h-16 sm:w-16 sm:text-4xl">
                    {coach.image}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg font-bold text-[#0b0b0f] sm:text-xl">{coach.name}</h2>
                    <p className="text-xs font-medium text-[#c8102e] sm:text-sm">{coach.role}</p>
                  </div>
                </div>
                {coach.credentials && (
                  <p className="mt-3 text-xs text-gray-500 sm:mt-4 sm:text-sm">{coach.credentials}</p>
                )}
                {coach.bio && (
                  <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">{coach.bio}</p>
                )}
                {coach.contact && (
                  <p className="mt-2 text-sm font-medium text-[#c8102e]">{coach.contact}</p>
                )}
                {coach.specialties.length > 0 && (
                  <div className="mt-3 sm:mt-4">
                    <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">Specialties</h3>
                    <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                      {coach.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full bg-[#c8102e]/10 px-2.5 py-0.5 text-xs font-medium text-[#c8102e]"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="bg-gray-50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our Coaching Philosophy</h2>
            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
              <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">Athlete-Centered Approach</h3>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  We believe in developing the whole athlete - physically, mentally, and emotionally. 
                  Our coaches focus on individual growth and long-term development over short-term results.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">Technical Excellence</h3>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  Proper technique is the foundation of performance and injury prevention. Our coaches 
                  emphasize fundamental skills and progressive skill development at every level.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">Positive Environment</h3>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  We create a supportive, encouraging atmosphere where athletes feel safe to take risks, 
                  make mistakes, and learn. Success is measured by effort, improvement, and character, 
                  not just wins and losses.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">Continuous Learning</h3>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  Our coaching staff regularly participates in continuing education, certifications, 
                  and professional development to stay current with best practices in track and field 
                  training and youth development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
