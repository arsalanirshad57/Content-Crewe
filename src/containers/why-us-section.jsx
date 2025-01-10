'use client';

import { motion } from 'framer-motion';
import { Headset, ShieldHalf, CalendarCheck } from 'lucide-react';

export function WhyUsSection() {
  return (
    <section id='whyUs' className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h2 className='text-3xl font-bold sm:text-4xl text-white'>Why Us</h2>
          <p className='mt-4 text-neutral-400'>
            Why Choose Us for Your Video Content Creation Needs?
          </p>
        </motion.div>

        <div className='mt-20 grid gap-8 lg:grid-cols-3'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className='rounded-lg border border-white/10 bg-black/50 p-6 backdrop-blur-xl'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 text-neutral-950 hover:bg-neutral-200'>
              <Headset className='h-6 w-6' />
            </div>
            <h3 className='mt-4 text-xl font-semibold bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>
              24/7 Support
            </h3>
            <p className='mt-2 text-base text-neutral-400'>
              Focus on your vision. We offer 24/7 support so you can create with
              confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='rounded-lg border border-white/10 bg-black/50 p-6 backdrop-blur-xl hover:bg-neutral-900'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 text-neutral-950 hover:bg-neutral-200'>
              <ShieldHalf className='h-6 w-6' />
            </div>
            <h3 className='mt-4 text-xl font-semibold bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>
              Qualified Team
            </h3>
            <p className='mt-2 text-neutral-400'>
              Expert editors, designers & strategists. We collaborate closely to
              create high-impact videos for your goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className='rounded-lg border border-white/10 bg-black/50 p-6 backdrop-blur-xl'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 text-neutral-950 hover:bg-neutral-200'>
              <CalendarCheck className='h-6 w-6' />
            </div>
            <h3 className='mt-4 text-xl font-semibold bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>
              On Time Delivery
            </h3>
            <p className='mt-2 text-base text-neutral-400'>
              Meet your deadlines with confidence. We deliver high-quality
              videos on time, every time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
