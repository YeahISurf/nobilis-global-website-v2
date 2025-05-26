import React, { useState } from 'react';
import {
  Header,
  Hero,
  WhyChooseUs,
  FlowSection,
  MembershipSection,
  FAQSection,
  Footer,
  ContactModal
} from '../components';

export const HomePage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Header onContactClick={openContactModal} />
      <main>
        <Hero />
        <WhyChooseUs />
        <FlowSection />
        <MembershipSection />
        <FAQSection />
      </main>
      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}; 