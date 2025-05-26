import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import styles from './ContactUs.module.css';

export const ContactUs: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    servicesEnquiry: '',
    smsConsent: false
  });

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const services = [
    'Turnkey Infrastructure Finance & Construction Solutions',
    'Petro & Gas',
    'Real-Estate Development Financing',
    'Mergers, Acquisitions, and Growth Equity',
    'Underwriting & Corporate Finance Consultancy',
    'Operational Improvements',
    'Specialized Consultancy'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form validation and submission logic here
  };

  return (
    <>
      <Header onContactClick={openContactModal} />
      
      <main className={styles.contactPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              Connect with our expert team to explore exceptional investment opportunities
            </p>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.formContainer}>
              <motion.div 
                className={styles.formCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName" className={styles.formLabel}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="servicesEnquiry" className={styles.formLabel}>
                      Services Enquiry *
                    </label>
                    <select
                      id="servicesEnquiry"
                      name="servicesEnquiry"
                      value={formData.servicesEnquiry}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                      required
                    >
                      <option value="">Please select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <p className={styles.formHelperText}>
                      * Please indicate the investment banking services you are interested in
                    </p>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        name="smsConsent"
                        checked={formData.smsConsent}
                        onChange={handleInputChange}
                        className={styles.formCheckbox}
                      />
                      <span className={styles.checkboxText}>
                        I Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from Nobilis Global Inc. Message frequency varies. Message & data rates may apply. You can reply STOP to unsubscribe at any time.
                      </span>
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className={styles.submitButton}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className={styles.contactInfo}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3>Get in Touch</h3>
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <h4>Investment Inquiries</h4>
                    <p>For sophisticated investment opportunities and partnership discussions</p>
                  </div>
                  <div className={styles.contactItem}>
                    <h4>Project Financing</h4>
                    <p>Large-scale infrastructure and commercial project funding solutions</p>
                  </div>
                  <div className={styles.contactItem}>
                    <h4>Strategic Consulting</h4>
                    <p>Expert advisory services for complex financial transactions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}; 