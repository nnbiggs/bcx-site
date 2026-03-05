import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register your athlete for Bergen County Xpress track and field club. Join our comprehensive training programs today.',
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
  