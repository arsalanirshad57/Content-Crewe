'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='mt-10 flex items-center justify-center gap-4'
    >
      <Button size='lg' className=''>
        Book a call
      </Button>
    </motion.div>
  );
}
