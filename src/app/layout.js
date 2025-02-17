import './globals.css';
import { Inter } from 'next/font/google';
import { Scrollable } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/sonner';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Content Crewe',
  description:
    'Get Started Today and Build Your Future Video Team – Hire the Experts You Need to Bring Your Vision to Life!',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <GoogleTagManager gtmId='G-HEQB13742C' />
      <body
        className={`bg-gradient-to-t from-neutral-900 via-neutral-950 to-neutral-950 ${inter.className}`}
      >
        <Toaster />
        <main>
          <Scrollable>{children}</Scrollable>
        </main>
      </body>
    </html>
  );
}
