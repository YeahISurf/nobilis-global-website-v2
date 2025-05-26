import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import styles from './Membership.module.css';

export const Membership: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Header onContactClick={openContactModal} />
      
      <main className={styles.membershipPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Membership</h1>
            <p className={styles.heroSubtitle}>
              Exclusive Investment Opportunities
            </p>
          </motion.div>
        </section>

        {/* Coming Soon Section */}
        <section className={styles.comingSoonSection}>
          <motion.div 
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.comingSoonCard}>
              <motion.div 
                className={styles.iconContainer}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              <motion.h2 
                className={styles.comingSoonTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Coming Soon
              </motion.h2>
              
              <motion.p 
                className={styles.comingSoonDescription}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                We're crafting an exclusive membership program that will provide access to our most prestigious investment opportunities. Our membership platform will offer personalized investment strategies, priority access to deals, and exclusive insights from our expert team.
              </motion.p>
              
              <motion.div 
                className={styles.features}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h3 className={styles.featuresTitle}>What to Expect:</h3>
                <ul className={styles.featuresList}>
                  <li>Exclusive access to high-yield investment opportunities</li>
                  <li>Personalized investment advisory services</li>
                  <li>Priority placement in limited investment offerings</li>
                  <li>Direct access to our investment specialists</li>
                  <li>Quarterly member-only market insights and reports</li>
                  <li>Invitation to exclusive networking events</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className={styles.notificationSection}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <p className={styles.notificationText}>
                  Be the first to know when our membership program launches
                </p>
                <motion.button 
                  className={styles.notifyButton}
                  onClick={openContactModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Notified
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Additional Information Section */}
        <section className={styles.infoSection}>
          <div className={styles.container}>
            <motion.div 
              className={styles.infoGrid}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Exclusive Access</h3>
                <p className={styles.infoDescription}>
                  Our membership program will provide access to investment opportunities typically reserved for institutional investors, with lower minimum thresholds for our valued members.
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Expert Guidance</h3>
                <p className={styles.infoDescription}>
                  Receive personalized investment advice from our team of seasoned professionals with over a century of combined experience in global finance.
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Global Network</h3>
                <p className={styles.infoDescription}>
                  Join an elite community of investors and gain access to our extensive network of partners, deal sources, and co-investment opportunities worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}; 