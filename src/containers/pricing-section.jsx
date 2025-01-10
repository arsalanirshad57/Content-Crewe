'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function PricingSection() {
  return (
    <section id='pricing' className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h2 className='text-3xl font-bold sm:text-4xl text-white'>
            Simple Pricing for advanced people
          </h2>
          <p className='mt-4 text-neutral-400'>
            Fuel Your Growth with Powerful Video Packages
          </p>
        </motion.div>

        <div className='mt-20 grid gap-8 lg:grid-cols-3'>
          {[
            {
              name: 'Hobby',
              price: '.99',
              features: [
                'Access to basic analytics reports',
                'Up to 5GB disk online per month',
                'Email support',
                'Community forum access',
                'Automated daily backup',
              ],
            },
            {
              name: 'Starter',
              price: '.299',
              features: [
                'Advanced analytics dashboard',
                'Customizable reports in all plans',
                'Real-time monitoring',
                'Integration with third-party tools',
                'Priority email support',
              ],
            },
            {
              name: 'Pro',
              price: '.1490',
              features: [
                'Unlimited data storage',
                'Collaborative dashboards',
                'Advanced data segmentation',
                'Custom report scheduling',
                '24/7 priority support',
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='rounded-lg border border-white/10 bg-black/50 p-8 backdrop-blur-xl'
            >
              <h3 className='text-xl font-semibold text-white'>{plan.name}</h3>
              <p className='mt-4 text-4xl font-bold text-white'>
                <span className='text-sm text-white'>$</span>
                {plan.price}
                <span className='text-sm text-neutral-400 '>/month</span>
              </p>
              <ul className='mt-8 space-y-4'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-center'>
                    <Check className='mr-3 h-5 w-5 text-neutral-500' />
                    <span className='text-neutral-400'>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className='mt-8 w-full '>Get {plan.name}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
