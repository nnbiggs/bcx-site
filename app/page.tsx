import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Bergen County Xpress (BCX) - Premier youth track and field club developing young athletes through expert coaching and comprehensive training programs.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Run Fast. Jump High. Throw Far.
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 sm:text-xl">
              Join Bergen County Xpress and unlock your athletic potential. Expert coaching, 
              comprehensive training, and a supportive community for young track & field athletes.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Register Now
              </Link>
              <Link
                href="/program"
                className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose BCX?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide the training, support, and opportunities young athletes need to excel.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Expert Coaching</h3>
              <p className="mt-2 text-gray-600">
                Certified coaches with years of experience developing young athletes and preparing them for competition.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15m5 0v18a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 21V3m3.75 4.5v10.5m0 0h7.5m-7.5 0H9m3.75-13.5v10.5m0-10.5h7.5m-7.5 0H15M9 7.5h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 0H15m-1.5 0h1.5m-1.5 3H15m-1.5 0H15m-1.5 0h1.5" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Comprehensive Training</h3>
              <p className="mt-2 text-gray-600">
                Full spectrum programs covering sprints, distance, jumps, throws, and multi-events for all skill levels.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.645-5.963-1.88A6.979 6.979 0 017.5 15.25M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Supportive Community</h3>
              <p className="mt-2 text-gray-600">
                Join a team of dedicated athletes, supportive families, and coaches who celebrate every achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Join BCX today and take the first step toward achieving your track & field goals.
            </p>
            <div className="mt-8">
              <Link
                href="/register"
                className="rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
