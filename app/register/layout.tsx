import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register your athlete for Bergen County Xpress 2026 season. Join our youth track and field club—expert coaching, full-event training, and a supportive team in Bergen County.',
  openGraph: {
    title: 'Register | Bergen County Xpress',
    description: 'Register your athlete for BCX 2026 season. Youth track and field in Bergen County. Expert coaching for ages 6–18.',
    url: '/register',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register | Bergen County Xpress',
    description: 'Register for Bergen County Xpress 2026 track and field season.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
  