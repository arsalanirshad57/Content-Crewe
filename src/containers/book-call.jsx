'use client';
import React from 'react';
import { InlineWidget } from 'react-calendly';
import { motion } from 'framer-motion';
import ShinyText from '@/components/ui/shiny-text';
export const BookCall = React.memo(() => {
  return (
    <section
      id='bookCall'
      className='py-24 text-neutral-800 calendly-container '
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h2 className='text-3xl font-bold sm:text-4xl text-white '>
            Schedule a Meeting!
          </h2>
          <ShinyText
            text='Let us help you turn your ideas into reality—book a call today to get started!'
            disabled={false}
            speed={3}
            className='mt-4 max-w-2xl mx-auto text-sm md:text-base'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-4'
        >
          <InlineWidget
            url='https://calendly.com/content-crewe/quick-meeting'
            styles={{
              height: '700px',
              width: '100%',
            }}
            frameborder='0'
            className='calendly-inline-widget'
          />
        </motion.div>
      </div>
    </section>
  );
});

BookCall.displayName = 'BookCall';
