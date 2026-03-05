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
    { name: 'Coach Rob A.', role: 'Assistant Coach', credentials: '', specialties: [], bio: '', contact: '', image: '👨‍🏫' },
    { name: 'Coach Obed', role: 'Assistant Coach', credentials: '', specialties: [], bio: '', contact: '', image: '👨‍🏫' },
    { name: 'Coach Shalanda', role: 'Assistant Coach', credentials: '', specialties: [], bio: '', contact: '', image: '👩‍🏫' },
    { name: 'Coach Marion', role: 'Assistant Coach', credentials: '', specialties: [], bio: '', contact: '', image: '👩‍🏫' },
    { name: 'Coach Alicia', role: 'Assistant Coach', credentials: '', specialties: [], bio: '', contact: '', image: '👩‍🏫' },
    { name: 'Coach Kertis', role: 'Assistant Coach', credentials: '', specialties: [], bio: '', contact: '', image: '👨‍🏫' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#c8102e] to-[#9f0d24] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Coaching Staff</h1>
          <p className="mt-6 text-xl text-red-50 sm:text-2xl">
            Experienced, certified coaches dedicated to your athlete's success
          </p>
          <p className="mt-4 text-base text-red-100/90">
            Bergen Xpress staff has passed NCSI criminal background checks.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-4xl">
                    {coach.image}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold text-[#0b0b0f]">{coach.name}</h2>
                    <p className="text-sm font-medium text-[#c8102e]">{coach.role}</p>
                  </div>
                </div>
                {coach.credentials && (
                  <p className="mt-4 text-sm text-gray-500">{coach.credentials}</p>
                )}
                {coach.bio && (
                  <p className="mt-4 text-gray-600">{coach.bio}</p>
                )}
                {coach.contact && (
                  <p className="mt-2 text-sm font-medium text-[#c8102e]">{coach.contact}</p>
                )}
                {coach.specialties.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-900">Specialties</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {coach.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full bg-[#c8102e]/10 px-3 py-1 text-xs font-medium text-[#c8102e]"
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
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Coaching Philosophy</h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Athlete-Centered Approach</h3>
                <p className="mt-2 text-gray-600">
                  We believe in developing the whole athlete - physically, mentally, and emotionally. 
                  Our coaches focus on individual growth and long-term development over short-term results.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Technical Excellence</h3>
                <p className="mt-2 text-gray-600">
                  Proper technique is the foundation of performance and injury prevention. Our coaches 
                  emphasize fundamental skills and progressive skill development at every level.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Positive Environment</h3>
                <p className="mt-2 text-gray-600">
                  We create a supportive, encouraging atmosphere where athletes feel safe to take risks, 
                  make mistakes, and learn. Success is measured by effort, improvement, and character, 
                  not just wins and losses.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Continuous Learning</h3>
                <p className="mt-2 text-gray-600">
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
