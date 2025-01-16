import './globals.css';
import { Inter } from 'next/font/google';
import { Footer, Navbar, ThemeProvider } from '@/containers';
import { Scrollable } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Content Crewe',
  description:
    'Get Started Today and Build Your Future Video Team – Hire the Experts You Need to Bring Your Vision to Life!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </head>
      <body
        className={`bg-gradient-to-t from-neutral-900 via-neutral-950 to-neutral-950 ${inter.className}`}
      >
        {/* Google Tag Manager - Body */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Toaster />
        <main>
          <Scrollable>{children}</Scrollable>
        </main>
      </body>
    </html>
  );
}
