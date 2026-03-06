import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Bergen County Xpress: age groups, programs, pricing, registration, equipment, and practice schedule. Get answers about BCX track and field.',
  openGraph: {
    title: 'FAQ | Bergen County Xpress',
    description: 'Frequently asked questions about BCX track and field club. Programs, pricing, registration, and more.',
    url: '/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Bergen County Xpress',
    description: 'Frequently asked questions about Bergen County Xpress track and field.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
