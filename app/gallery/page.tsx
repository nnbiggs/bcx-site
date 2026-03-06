import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View photos and highlights from Bergen County Xpress track and field meets, training sessions, and team events.',
};

const GALLERY_IMAGES = [
  { id: 1, category: 'Training', title: 'Athlete in action', description: 'BCX athlete on the field', src: '/gallery/athlete-in-action.png' },
  { id: 2, category: 'AAU Junior Olympics', title: 'Coach and athlete', description: 'BCX coach and athlete at AAU Junior Olympic Games', src: '/gallery/coach-athlete-aau.png' },
  { id: 3, category: 'Team', title: 'BCX athletes', description: 'Bergen County Xpress athletes at the track', src: '/gallery/bcx-athletes-four.png' },
  { id: 4, category: 'Competition', title: 'Championship medals', description: 'BCX athlete at AAU Junior Olympic Games', src: '/gallery/athlete-medals.png' },
  { id: 5, category: 'Competition', title: 'Double medal winner', description: 'BCX athlete celebrating at AAU Junior Olympics', src: '/gallery/athlete-girl-medals.png' },
  { id: 6, category: 'Team', title: 'Coaches and athlete', description: 'BCX coaches with athlete at AAU Junior Olympic Games', src: '/gallery/bcx-coaches-and-athlete.png' },
  { id: 7, category: 'Team', title: 'BCX family', description: 'Track & field community at the meet', src: '/gallery/bcx-group.png' },
  { id: 8, category: 'Community', title: 'BCX Parent Relay', description: 'Parents and supporters at the relay', src: '/gallery/bcx-parent-relay.png' },
  { id: 9, category: 'Team', title: 'BCX coaches', description: 'Bergen County Xpress coaching staff', src: '/gallery/bcx-coaches.png' },
];

export default function Gallery() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#c8102e] to-[#9f0d24] py-12 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl sm:text-5xl lg:text-6xl">Gallery</h1>
          <p className="mt-4 text-lg text-red-50 sm:mt-6 sm:text-xl lg:text-2xl">
            Moments from our competitions, training, and team events
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-sm text-gray-600 sm:mb-8 sm:text-base">
            More BCX photos can be found at{' '}
            <a
              href="https://njsportsphotography.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#c8102e] underline hover:no-underline"
            >
              NJSportsPhotography
            </a>
            {' '}in the gallery under Bergen County Xpress.
          </p>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-md transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className={`transition-transform duration-300 group-hover:scale-105 ${[2, 3, 6].includes(item.id) ? 'object-cover object-top' : 'object-cover'}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Be Part of Our Story
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-4 sm:text-lg">
              Join BCX and create your own memorable moments on and off the track.
            </p>
            <div className="mt-6 sm:mt-8">
              <a
                href="/register"
                className="bcx-btn"
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
