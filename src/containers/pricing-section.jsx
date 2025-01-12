'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ShieldHalf } from 'lucide-react';
import { cn } from '@/lib/utils';
import ShinyText from '@/components/ui/shiny-text';
import { pricingData } from '@/constants';
import { UseToggleState } from '@/hooks';
import { GetStartedModal } from './get-started';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export function PricingSection() {
  const [selectedTab, setSelectedTab] = React.useState(pricingData[0]?.id);
  const [selectedPlan, setSelectedPlan] = React.useState();
  const [isGetStartModalOpen, toggleGetStartModal] = UseToggleState();
  const [user, setUser] = React.useState(null);
  const router = useRouter();

  const selectedPackage = React.useMemo(() => {
    return pricingData.find((tab) => tab.id === selectedTab);
  }, [selectedTab]);

  const handleGetStarted = React.useCallback(
    (id) => {
      // if (!user) {
      //   router.push('/auth/login');
      // } else {
      const selectedPackagePlan = selectedPackage?.plans?.find(
        (plan) => plan?.id === id
      );
      if (selectedPackagePlan) {
        setSelectedPlan(selectedPackagePlan);
        toggleGetStartModal();
      }
      // }
    },
    [toggleGetStartModal, selectedPackage, user, router]
  );

  React.useEffect(() => {
    const auth = getAuth();
    setUser(auth.currentUser);
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <React.Fragment>
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
            <ShinyText
              text='Select the perfect plan tailored to your needs and watch your
            content soar'
              disabled={false}
              speed={3}
              className='max-w-2xl mx-auto text-sm md:text-base'
            />
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <div className='flex justify-center flex-wrap items-center gap-4 my-12'>
              {pricingData?.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab?.id)}
                    className={cn(
                      'flex items-center px-4 md:px-6 py-2 md:py-3 text-sm rounded-full transition-all duration-200',
                      selectedTab === tab.id
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
          </motion.div>

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
              {selectedPackage?.plans.map((plan, index) => (
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
                    <p className='text-neutral-400 text-sm'>
                      {plan.description}
                    </p>
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

                  <ul className='space-y-2 mb-8'>
                    {plan.features.map((feature, i) => (
                      <li key={i} className='flex items-start'>
                        <Check className='w-5 h-5 text-neutral-200 mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-neutral-300 text-base'>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className='w-full'
                    size='lg'
                    onClick={() => handleGetStarted(plan?.id)}
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <GetStartedModal
        open={isGetStartModalOpen}
        onClose={toggleGetStartModal}
        selectedPackage={selectedPackage}
        selectedPlan={selectedPlan}
        user={user}
      />
    </React.Fragment>
  );
}
