'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Star, Users, Briefcase, ShieldHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

const pricingData = [
  {
    id: 'youtuber',
    icon: Star,
    title: 'YouTuber',
    plans: [
      {
        name: 'Starter Boost',
        price: 2500,
        description:
          'New YouTubers or those with established channels seeking a refresh.',
        features: [
          '2 Video Editors, 1 Graphic Designer',
          '8-10 Videos per month (10-15 minutes each)',
          'Expert video editing (cuts, transitions, music)',
          'Eye-catching thumbnail creation',
          'High-resolution video rendering',
        ],
      },
      {
        name: 'Content Creator',
        price: 4500,
        description:
          'Growing YouTubers seeking to refine their content and strategy.',
        features: [
          '3 Video Editors, 1 Graphic Designer, 1 Content Strategist',
          '12-15 Videos per month (10-20 minutes each)',
          'Advanced video editing with color correction',
          'Content brainstorming and keyword research',
          'Basic script outlines',
        ],
      },
      {
        name: 'Growth Accelerator',
        price: 6000,
        description:
          'Established YouTubers ready to take their channel to the next level.',
        features: [
          'Full team of editors, designers, and strategist',
          '18-22 Videos per month (10-20 minutes each)',
          'Professional editing with motion graphics',
          'In-depth content strategy and SEO',
          'Social media post designs',
        ],
      },
    ],
  },
  {
    id: 'influencer',
    icon: Users,
    title: 'Influencer',
    plans: [
      {
        name: 'Spark Up',
        price: 1750,
        description: 'New short-form influencers building their audience.',
        features: [
          '2 Video Editors',
          '15 Videos per month (30-45 seconds each)',
          'Expert video editing and transitions',
          'Trendy thumbnail creation',
          'High-resolution rendering',
        ],
      },
      {
        name: 'Content Ignite',
        price: 2500,
        description: 'Growing short-form influencers refining their content.',
        features: [
          '2 Video Editors, 1 Content Strategist',
          '20 Videos per month (1 minute each)',
          'Content brainstorming',
          'Script outlines and trending topics',
          'Hashtag strategy',
        ],
      },
      {
        name: 'Viral Velocity',
        price: 4000,
        description: 'Established influencers ready to explode their reach.',
        features: [
          'Full team with strategist',
          '25-30 Videos per month',
          'Professional editing with effects',
          'In-depth content strategy',
          'Platform optimization',
        ],
      },
    ],
  },
  {
    id: 'entrepreneur',
    icon: Briefcase,
    title: 'Entrepreneur',
    plans: [
      {
        name: 'Brand Launch Boost',
        price: 3500,
        description: 'New businesses creating a strong first impression.',
        features: [
          '2 Video Editors, 1 Graphic Designer',
          '8-10 Videos per month',
          'Product explainer videos',
          'Social media teasers',
          'Customer testimonial options',
        ],
      },
      {
        name: 'Expertise Builder',
        price: 4500,
        description: 'Established businesses becoming industry leaders.',
        features: [
          'Full content team',
          '10-15 Videos monthly',
          'Educational tutorials',
          'Testimonial videos',
          'Social media promotions',
        ],
      },
      {
        name: 'Lead Generation',
        price: 5500,
        description: 'Businesses focused on qualified leads and sales.',
        features: [
          'Complete production team',
          '20-25 Videos monthly',
          'Video ads and demonstrations',
          'Landing page videos',
          'Product showcases',
        ],
      },
    ],
  },
];

export function PricingSection() {
  const [selectedTab, setSelectedTab] = useState(pricingData[0].id);
  const selectedData = pricingData.find((tab) => tab.id === selectedTab?.id);

  return (
    <section id='pricing' className='py-24 '>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h2 className='text-4xl font-bold text-white mb-4'>
            Choose Your Growth Path
          </h2>
          <p className='text-neutral-400 text-base max-w-2xl mx-auto'>
            Select the perfect plan tailored to your needs and watch your
            content soar
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className='flex justify-center flex-wrap items-center gap-4 my-12'>
          {pricingData.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab)}
                className={cn(
                  'flex items-center px-4 md:px-6 py-2 md:py-3 text-sm rounded-full transition-all duration-200',
                  selectedTab?.id === tab.id
                    ? 'bg-neutral-700 text-white'
                    : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800'
                )}
              >
                <Icon className='w-5 h-5 mr-2' />
                <span>{tab.title}</span>
              </button>
            );
          })}
          <button
            className={cn(
              'flex items-center px-4 md:px-6 py-2 md:py-3 text-sm  rounded-full transition-all duration-200 bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800'
            )}
          >
            <ShieldHalf className='w-5 h-5 mr-2' />
            <span>Custom Team</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className='grid gap-8 lg:grid-cols-3'
          >
            {selectedData?.plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className='relative rounded-lg bg-black/50 p-8 backdrop-blur-sm border border-white/10  transition-colors'
              >
                <div className='mb-8'>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    {plan.name}
                  </h3>
                  <p className='text-neutral-400 text-sm'>{plan.description}</p>
                </div>

                <div className='mb-8'>
                  <div className='flex items-baseline'>
                    <span className='text-3xl font-bold text-white'>$</span>
                    <span className='text-5xl font-bold text-white'>
                      {plan.price}
                    </span>
                    <span className='ml-2 text-neutral-400'>/mo</span>
                  </div>
                </div>

                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start'>
                      <Check className='w-5 h-5 text-neutral-200 mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-neutral-300'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className='w-full ' size='lg'>
                  Get Started
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
