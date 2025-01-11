import './globals.css';
import { Inter } from 'next/font/google';
import { Footer, Navbar, ThemeProvider } from '@/containers';
import { Scrollable } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/sonner';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Content Crewe',
  description: 'Deploy your website in seconds, not hours.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={`bg-gradient-to-t from-neutral-900 via-neutral-950 to-neutral-950 ${inter.className}`}
      >
        <Toaster/>
        <Scrollable>
          <main>{children}</main>
        </Scrollable>
      </body>
    </html>
  );
}
