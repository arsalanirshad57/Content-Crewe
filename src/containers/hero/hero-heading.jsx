'use client';

import BlurText from '@/components/ui/blur-text';
import ShinyText from '@/components/ui/shiny-text';
import { motion } from 'framer-motion';

export function HeroHeading() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className='text-center'
    >
      <h1 className=' flex flex-col gap-3 mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl text-white'>
        <BlurText
          text='Level Up Your'
          delay={150}
          animateBy='words'
          direction='top'
          onAnimationComplete={handleAnimationComplete}
          className='text-5xl font-bold tracking-tight sm:text-7xl'
        />
        <span className='block '>
          <BlurText
            text='Content Creation.'
            delay={150}
            animateBy='words'
            direction='bottom'
            onAnimationComplete={handleAnimationComplete}
            className='text-5xl font-bold tracking-tight sm:text-7xl !text-neutral-200'
          />
        </span>
      </h1>
      <ShinyText
        text=' Get Started Today and Build Your Future Video Team – Hire the Experts
        You Need to Bring Your Vision to Life!'
        disabled={false}
        speed={3}
        className='mt-6 max-w-2xl mx-auto text-base'
      />
    </motion.div>
  );
}
