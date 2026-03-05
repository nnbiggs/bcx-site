import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View photos and highlights from Bergen County Xpress track and field meets, training sessions, and team events.',
};

// Pictures from Bergen Xpress (https://bergenxpress.com/?page_id=211): IMG_1592, IMG_1589, IMG_1590, 20150608_195255
// Hosted locally in public/gallery/. Replace these files with the real BCX photos if you get them from NJSportsPhotography or the club.
const GALLERY_IMAGES = [
  { id: 1, category: 'BCX', title: 'IMG_1592', description: 'Bergen Xpress track and field', src: '/gallery/IMG_1592.jpg' },
  { id: 2, category: 'BCX', title: 'IMG_1589', description: 'Bergen Xpress track and field', src: '/gallery/IMG_1589.jpg' },
  { id: 3, category: 'BCX', title: 'IMG_1590', description: 'Bergen Xpress track and field', src: '/gallery/IMG_1590.jpg' },
  { id: 4, category: 'BCX', title: 'June 8, 2015', description: '20150608_195255 – Meet highlights', src: '/gallery/20150608_195255.jpg' },
];

// Fallback placeholder items when external images aren't available or for variety
const PLACEHOLDER_ITEMS = [
  { id: 5, category: 'Competition', title: 'State Championships 2024', description: 'Our athletes competing at the state level' },
  { id: 6, category: 'Training', title: 'Track Practice', description: 'Athletes working on technique and speed' },
  { id: 7, category: 'Team', title: 'Team Photo', description: '2024 BCX team members' },
  { id: 8, category: 'Competition', title: 'Regional Meet', description: 'Strong performances at regional competition' },
  { id: 9, category: 'Training', title: 'Strength & Conditioning', description: 'Building power and endurance' },
  { id: 10, category: 'Team', title: 'Team Building', description: 'Fun activities and team bonding' },
];

export default function Gallery() {
  const galleryItems = [...GALLERY_IMAGES, ...PLACEHOLDER_ITEMS];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#c8102e] to-[#9f0d24] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Gallery</h1>
          <p className="mt-6 text-xl text-red-50 sm:text-2xl">
            Moments from our competitions, training, and team events
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-gray-600">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => {
              const hasImage = 'src' in item && item.src;
              return (
              <div
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-[#c8102e]/10 to-[#c8102e]/20 shadow-md transition-transform hover:scale-105"
              >
                {hasImage ? (
                  <Image
                    src={(item as { src: string }).src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-6xl">🏃</div>
                    <p className="text-sm font-medium text-gray-700">{item.category}</p>
                  </div>
                </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
              );
            })}
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
