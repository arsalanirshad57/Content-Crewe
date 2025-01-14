import React from 'react';
import {
  WhyUsSection,
  HeroSection,
  HostingSection,
  PricingSection,
  FaqsSection,
  Navbar,
  Footer,
  BookCall,
} from '@/containers';
import { ContactUs } from '@/containers/contact-us';

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <PricingSection />
      <FaqsSection />
      <BookCall />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}
