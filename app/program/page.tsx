import type { Metadata } from 'next';
import RegisterCTA from '@/components/RegisterCTA';

export const metadata: Metadata = {
  title: 'Program',
  description: 'Explore BCX track and field programs: sprints, distance, jumps, throws, and multi-events for ages 6–18. Comprehensive training for every skill level.',
  openGraph: {
    title: 'Program | Bergen County Xpress',
    description: 'Comprehensive track and field programs for youth athletes. Sprints, distance, jumps, throws, and multi-events for all skill levels.',
    url: '/program',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Program | Bergen County Xpress',
    description: 'Track and field programs for youth athletes. All events, all skill levels.',
  },
};

export default function Program() {
  const programs = [
    {
      name: 'Sprints & Hurdles',
      description: 'Develop explosive speed and technique in 100m, 200m, 400m, and hurdle events.',
      events: ['100m', '200m', '400m', '100m/110m Hurdles', '300m Hurdles'],
      ageGroups: 'Ages 8-18',
    },
    {
      name: 'Distance Running',
      description: 'Build endurance and race strategy for middle and long distance events.',
      events: ['800m', '1500m', '3000m', 'Cross Country'],
      ageGroups: 'Ages 10-18',
    },
    {
      name: 'Jumping Events',
      description: 'Master the techniques of long jump, high jump, triple jump, and pole vault.',
      events: ['Long Jump', 'High Jump', 'Triple Jump', 'Pole Vault'],
      ageGroups: 'Ages 8-18',
    },
    {
      name: 'Throwing Events',
      description: 'Develop power and technique in shot put, discus, javelin, and hammer throw.',
      events: ['Shot Put', 'Discus', 'Javelin', 'Hammer Throw'],
      ageGroups: 'Ages 10-18',
    },
    {
      name: 'Multi-Events',
      description: 'Compete in pentathlon, heptathlon, and decathlon for well-rounded athletes.',
      events: ['Pentathlon', 'Heptathlon', 'Decathlon'],
      ageGroups: 'Ages 12-18',
    },
    {
      name: 'Beginner Program',
      description: 'Introduction to track and field for young athletes exploring different events.',
      events: ['All Events', 'Fundamentals', 'Fun & Games'],
      ageGroups: 'Ages 6-10',
    },
  ];

  return (
    <div className="bg-white min-w-0">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#c8102e] to-[#9f0d24] py-12 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl sm:text-5xl lg:text-6xl">Our Programs</h1>
          <p className="mt-4 text-lg text-red-50 sm:mt-6 sm:text-xl lg:text-2xl">
            Comprehensive training programs designed to develop young athletes at every level
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.name}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{program.name}</h2>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">{program.description}</p>
                <div className="mt-4 flex-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Events</h3>
                  <ul className="mt-2 space-y-1">
                    {program.events.map((event) => (
                      <li key={event} className="text-sm text-gray-700">
                        • {event}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-lg bg-[#c8102e]/10 px-3 py-2">
                  <p className="text-sm font-medium text-[#c8102e]">{program.ageGroups}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="bg-gray-50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Training Schedule</h2>
            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
              <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">Regular Season</h3>
                <div className="mt-3 space-y-2 text-sm text-gray-600 sm:mt-4 sm:text-base">
                  <p><strong className="text-gray-900">Monday - Thursday:</strong> 4:00 PM - 6:00 PM</p>
                  <p><strong className="text-gray-900">Saturday:</strong> 9:00 AM - 11:00 AM</p>
                  <p className="text-xs text-gray-500 sm:text-sm">Training sessions include warm-up, technique work, conditioning, and cool-down.</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">Competition Season</h3>
                <div className="mt-3 space-y-2 text-sm text-gray-600 sm:mt-4 sm:text-base">
                  <p><strong className="text-gray-900">Meets:</strong> Weekends (varies by schedule)</p>
                  <p><strong className="text-gray-900">Practice:</strong> Monday - Friday, 4:00 PM - 6:00 PM</p>
                  <p className="text-xs text-gray-500 sm:text-sm">Additional training sessions may be scheduled based on competition calendar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegisterCTA
        headline="Ready to train with us?"
        supportingCopy="Choose your program and register for the 2026 season. Our staff will help find the right fit for your athlete."
        buttonText="Register for the 2026 Season"
      />
    </div>
  );
}
