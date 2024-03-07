import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import DefaultLayout from '@layouts/default';

import '@styles/main.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home - Traffic Control',
  description: 'Traffic Control',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
