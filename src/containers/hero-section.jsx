'use client';

import SplashCursor from '@/components/ui/splash-cursor';
import { HeroActions } from './hero/hero-actions';
import { HeroHeading } from './hero/hero-heading';

export function HeroSection() {
  return (
    <section className='relative min-h-screen pt-32 '>
      <div className=' flex flex-col justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[75vh]'>
        <HeroHeading />
        <HeroActions />
      </div>

      {/* Background gradient */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950' />
    </section>
  );
}
