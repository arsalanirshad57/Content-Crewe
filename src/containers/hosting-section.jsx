'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HostingSection() {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h2 className='text-3xl font-bold sm:text-4xl text-white'>
            Host your websites
            <br />
            with zero friction today.
          </h2>
          <p className='mt-4 text-neutral-400'>
            Experience lightning-fast hosting with unparalleled reliability.
          </p>
          <Button size='lg' className='mt-8 '>
            Start for free
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-16'
        >
          <div className='relative mx-auto max-w-5xl rounded-lg border border-white/10 bg-black/50 p-4 backdrop-blur-xl'>
            <img
              src='https://startup-landing-simple-aceternity.vercel.app/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fpro%2Fdashboard-new.webp&w=1920&q=75'
              alt='Hosting Dashboard'
              className='w-full rounded-lg shadow-2xl'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
