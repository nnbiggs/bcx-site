import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching',
  description: 'Meet our experienced coaching staff at Bergen County Xpress. Certified coaches dedicated to developing young track and field athletes.',
};

export default function Coaching() {
  const coaches = [
    {
      name: 'Coach Michael Johnson',
      role: 'Head Coach & Program Director',
      credentials: 'USATF Level 2, IAAF Certified',
      specialties: ['Sprints', 'Hurdles', 'Program Development'],
      bio: 'With over 15 years of coaching experience, Coach Johnson has developed numerous state champions and college athletes. He holds a degree in Exercise Science and is passionate about youth development.',
      image: '👨‍🏫',
    },
    {
      name: 'Coach Sarah Martinez',
      role: 'Distance Coach',
      credentials: 'USATF Level 2, RRCA Certified',
      specialties: ['Distance Running', 'Cross Country', 'Endurance Training'],
      bio: 'Coach Martinez is a former collegiate runner with 10+ years of coaching experience. She specializes in developing aerobic capacity and race strategy for middle and long distance events.',
      image: '👩‍🏫',
    },
    {
      name: 'Coach David Chen',
      role: 'Jumps & Multi-Events Coach',
      credentials: 'USATF Level 2, USTFCCCA Certified',
      specialties: ['Long Jump', 'High Jump', 'Triple Jump', 'Pole Vault', 'Multi-Events'],
      bio: 'A former Division I athlete, Coach Chen brings technical expertise and innovative training methods to our jumps program. He has coached multiple state qualifiers in jumping events.',
      image: '👨‍🏫',
    },
    {
      name: 'Coach Jennifer Williams',
      role: 'Throws Coach',
      credentials: 'USATF Level 2',
      specialties: ['Shot Put', 'Discus', 'Javelin', 'Hammer Throw'],
      bio: 'Coach Williams is a strength and conditioning specialist with extensive experience in throws events. She focuses on technique refinement and power development.',
      image: '👩‍🏫',
    },
    {
      name: 'Coach Robert Taylor',
      role: 'Assistant Coach & Youth Development',
      credentials: 'USATF Level 1',
      specialties: ['Beginner Programs', 'Fundamentals', 'Youth Development'],
      bio: 'Coach Taylor specializes in introducing young athletes to track and field. His patient, encouraging approach helps beginners build confidence and discover their passion for the sport.',
      image: '👨‍🏫',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Coaching Staff</h1>
          <p className="mt-4 text-xl text-blue-100">
            Experienced, certified coaches dedicated to your athlete's success
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-4xl">
                    {coach.image}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{coach.name}</h2>
                    <p className="text-sm font-medium text-blue-600">{coach.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">{coach.credentials}</p>
                <p className="mt-4 text-gray-600">{coach.bio}</p>
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-900">Specialties</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {coach.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
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
