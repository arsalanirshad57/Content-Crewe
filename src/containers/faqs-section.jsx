'use client';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ShinyText from '@/components/ui/shiny-text';

const faqsData = [
  {
    label: '01.',
    question: 'What types of video content do you create?',
    answer:
      'We create a variety of video content, including explainer videos, product demos, social media videos, YouTube channel content, and more.',
  },
  {
    label: '02.',
    question: 'Do you offer scriptwriting and storyboarding services?',
    answer:
      'Some of our packages include scriptwriting and storyboarding services. We can discuss your specific needs and recommend the best option for you.',
  },
  {
    label: '03.',
    question: 'What revisions are included in your packages?',
    answer:
      "The number of revisions included varies depending on the package you choose. We'll be happy to discuss this in detail during your consultation.",
  },
  {
    label: '04.',
    question: 'How much do your video creation packages cost?',
    answer:
      'Our video creation packages range in price to fit different needs and budgets. You can find a general overview on our pricing page, but we recommend contacting us for a custom quote to best suit your project.',
  },
  {
    label: '05.',
    question: 'Can I customize a video creation package?',
    answer:
      "Absolutely! We understand that every project has unique needs. We'll work with you to create a custom package that fits your specific goals and budget.",
  },
  {
    label: '06.',
    question: 'What payment methods do you accept?',
    answer:
      'We accept a variety of secure payment methods to ensure your convenience.',
  },
  {
    label: '07.',
    question: 'What is your typical turnaround time for video projects?',
    answer:
      "Our turnaround time varies depending on the complexity of your project. However, we'll provide you with an estimated timeframe during the consultation process.",
  },
  {
    label: '08.',
    question: 'Do you offer revisions after the video is delivered?',
    answer:
      'While revisions are typically included within the package limits, we can discuss additional revision options if needed.',
  },
  {
    label: '09.',
    question: 'What file format will I receive my final video in?',
    answer:
      'We deliver your final video in a high-quality format suitable for your chosen platform (e.g., YouTube, social media).',
  },
];

export function FaqsSection() {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h2 className='text-3xl font-bold sm:text-4xl text-white '>FAQS</h2>
          <ShinyText
            text="Browse our FAQ's to find answers about our video creation
            services"
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
          className='mt-16 max-w-3xl mx-auto'
        >
          <Accordion type='single' collapsible>
            {faqsData?.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className='text-white text-start text-sm md:text-base'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className='text-neutral-600'>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
