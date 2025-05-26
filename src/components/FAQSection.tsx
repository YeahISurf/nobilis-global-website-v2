import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQSection.module.css';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={styles.faqItem}>
      <button
        className={styles.question}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.answerWrapper}
          >
            <div className={styles.answer}>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you charge any fees?",
      answer: "We maintain a transparent fee structure that aligns with industry standards for premium investment services. Our fees are structured to ensure alignment with our clients' success."
    },
    {
      question: "Why do you charge an Underwriting Service fee, and how is it broken down?",
      answer: "Our Underwriting Service fee covers comprehensive due diligence, market analysis, risk assessment, and structuring services. The fee is transparently broken down into research, analysis, legal review, and ongoing monitoring components."
    },
    {
      question: "What does the Underwriting Service Deliver?",
      answer: "Our Underwriting Service delivers detailed investment analysis, risk assessment reports, market comparables, financial modeling, legal structure recommendations, and ongoing portfolio monitoring to ensure optimal investment outcomes."
    },
    {
      question: "How often will I receive updates on my profile (or portfolio) performance?",
      answer: "Clients receive comprehensive quarterly performance reports, monthly summary updates, and real-time access to their portfolio dashboard. Additionally, we provide immediate notifications for any material changes or opportunities."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>FAQs</h2>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 