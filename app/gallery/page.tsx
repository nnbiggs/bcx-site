import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View photos and highlights from Bergen County Xpress track and field meets, training sessions, and team events.',
};

export default function Gallery() {
  // Placeholder gallery items - in a real app, these would come from a CMS or image service
  const galleryItems = [
    { id: 1, category: 'Competition', title: 'State Championships 2024', description: 'Our athletes competing at the state level' },
    { id: 2, category: 'Training', title: 'Track Practice', description: 'Athletes working on technique and speed' },
    { id: 3, category: 'Team', title: 'Team Photo', description: '2024 BCX team members' },
    { id: 4, category: 'Competition', title: 'Regional Meet', description: 'Strong performances at regional competition' },
    { id: 5, category: 'Training', title: 'Strength & Conditioning', description: 'Building power and endurance' },
    { id: 6, category: 'Team', title: 'Team Building', description: 'Fun activities and team bonding' },
    { id: 7, category: 'Competition', title: 'Local Meet', description: 'Competing close to home' },
    { id: 8, category: 'Training', title: 'Field Events Practice', description: 'Perfecting jumps and throws' },
    { id: 9, category: 'Team', title: 'Awards Ceremony', description: 'Celebrating achievements' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Gallery</h1>
          <p className="mt-4 text-xl text-blue-100">
            Moments from our competitions, training, and team events
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 shadow-md transition-transform hover:scale-105"
              >
                {/* Placeholder for image - in production, use Next.js Image component */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-6xl">🏃</div>
                    <p className="text-sm font-medium text-gray-700">{item.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Be Part of Our Story
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join BCX and create your own memorable moments on and off the track.
            </p>
            <div className="mt-8">
              <a
                href="/register"
                className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Join the Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
