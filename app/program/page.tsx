import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program',
  description: 'Explore our comprehensive track and field training programs for youth athletes. From sprints to distance, jumps to throws, we offer programs for all skill levels.',
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
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#c8102e] to-[#9f0d24] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Our Programs</h1>
          <p className="mt-6 text-xl text-red-50 sm:text-2xl">
            Comprehensive training programs designed to develop young athletes at every level
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.name}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="text-2xl font-bold text-gray-900">{program.name}</h2>
                <p className="mt-2 text-gray-600">{program.description}</p>
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
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Training Schedule</h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Regular Season</h3>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p><strong className="text-gray-900">Monday - Thursday:</strong> 4:00 PM - 6:00 PM</p>
                  <p><strong className="text-gray-900">Saturday:</strong> 9:00 AM - 11:00 AM</p>
                  <p className="text-sm text-gray-500">Training sessions include warm-up, technique work, conditioning, and cool-down.</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Competition Season</h3>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p><strong className="text-gray-900">Meets:</strong> Weekends (varies by schedule)</p>
                  <p><strong className="text-gray-900">Practice:</strong> Monday - Friday, 4:00 PM - 6:00 PM</p>
                  <p className="text-sm text-gray-500">Additional training sessions may be scheduled based on competition calendar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
