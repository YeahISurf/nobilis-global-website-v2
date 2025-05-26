import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import styles from './StrategicPartners.module.css';

export const StrategicPartners: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const partners = [
    {
      name: "Elite Capital & Co.",
      location: "London, UK",
      description: "Elite Capital & Co. Limited is a Financial Management company that provides project-related services including Management, Consultancy, and Funding, particularly for large infrastructure and mega commercial projects. Elite Capital & Co. Limited's head office is located at 33 St James' Square, London SW1Y 4JS, UK with our Board Members, Staff, and Agents being located across the Middle East, North Africa, Asia, Europe, and South America. Elite Capital & Co. Limited offers a wealth of experience in Banking and Financial transactions and has a range of specialized advisory services for private clients, medium and large corporations as well as governments. It is also the exclusive manager of the Government Future Financing 2030 Program®."
    },
    {
      name: "Billion Global Capital",
      location: "Houston, USA",
      description: "Elite Capital & Co. Limited is a private company specializing in project-related services such as management, consultancy, and funding. Based on information from Companies House, it operates as a financial management firm, offering a range of financial services. The company has been recognized with awards like the ACQ5 \"Project Management & Finance Company of the Year\""
    },
    {
      name: "First Boca Associates",
      location: "Florida, USA",
      description: "First Boca Associates, Inc. (FBA) is a mid-market merger and acquisition specialist. FBA maintains relationships with a global network of well funded buyers and investors focused on the acquisition, merger, or recapitalization of mid-market companies (revenue over $10 million or EBITDA over $2 million) primarily across the U.S. and internationally on a select basis. First Boca Associates, has won more awards than any other M&A niche firm, including Global, National and Advisory Awards in 2017, 2015, & 2016."
    },
    {
      name: "Rushwood Group",
      location: "Business Development Advisor",
      description: "Mr. Keravuori developed a distinguished career in both government and corporate leadership. His legendary military service includes deployments in Vietnam, West Berlin, and the UN Middle East, prior to retiring as Chief-of-Staff of the 82nd Airborne and Deputy Commander of the Military District of Washington (MDW). Then, he transitioned to the commercial sector as Director of Leadership and Management Seminars for the new Ministry of Defense in Bosnia, following the Dayton Accords. Mr. Keravuori later held leadership roles at L-3 MPRI and SAS Institute before advancing to Sr. Director of International Business Development at General Dynamics. Post-retirement, Mr. Keravuori has served as Chairman of security-technology and risk-mitigation companies; and with a proven track record of developing market channels with Fortune 50 companies, he seeks to guide Nobilis Global's vision, by fostering strategic relationships, and drive business growth initiatives for a more precise pathway forward to reach the pinnacle of success."
    },
    {
      name: "Noetic International",
      location: "USA & Europe",
      description: "Noetic International is a consortium of experienced leaders with cross-industry skills refined by a variety of joint, inter-agency and international assignments at the executive level. Noetic specializes in high-tech solutions, particularly in Artificial Intelligence and Machine Learning. Founded by military and intelligence veterans, Noetic addresses complex issues in cybersecurity and strategic consulting. The company offers a Quantum Cybersecurity Platform and integrates digital, physical, and behavioral approaches."
    }
  ];

  return (
    <>
      <Header onContactClick={openContactModal} />
      
      <main className={styles.partnersPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Strategic Partners</h1>
            <p className={styles.heroSubtitle}>
              Forging Trusted Alliances with Legacy-Driven Partnerships
            </p>
          </motion.div>
        </section>

        {/* Partners Section */}
        <section className={styles.partnersSection}>
          <div className={styles.container}>
            <div className={styles.partnersGrid}>
              {partners.map((partner, index) => (
                <motion.div 
                  key={index}
                  className={styles.partnerCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={styles.partnerLogoContainer}>
                    <div className={styles.placeholderLogo}>
                      <span className={styles.placeholderText}>
                        {partner.name.split(' ').map(word => word[0]).join('').substring(0, 3)}
                      </span>
                    </div>
                  </div>
                  
                  <div className={styles.partnerContent}>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <h4 className={styles.partnerLocation}>{partner.location}</h4>
                    <p className={styles.partnerDescription}>{partner.description}</p>
                    
                    <div className={styles.partnerActions}>
                      <motion.button 
                        className={styles.visitButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits Section */}
        <section className={styles.benefitsSection}>
          <motion.div 
            className={styles.container}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Partnership Excellence</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Global Network</h3>
                <p>Access to a worldwide network of trusted financial institutions and investment partners</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Proven Expertise</h3>
                <p>Decades of combined experience in complex financial transactions and project management</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Strategic Innovation</h3>
                <p>Cutting-edge solutions in AI, cybersecurity, and advanced financial instruments</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}; 