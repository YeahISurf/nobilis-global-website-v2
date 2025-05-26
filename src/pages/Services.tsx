import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import styles from './Services.module.css';

export const Services: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const coreServices = [
    {
      title: "Investment Banking Consultancy Services",
      subtitle: "Innovate, Adapt, and Succeed in the New Global Paradigm",
      description: "At Nobilis, we bridge this gap by offering a clear, accountable process for our clients to access the best global financial resources, vehicles, and assets that meet their unique needs. We have built strong strategic relationships with discerning Private Debt / Equity Funds, Hedge Funds, Financial Institutions, Fund of Funds, Pension Funds, Endowments, Insurance Companies, and Family Offices. This curated network allows us to provide our clients with unparalleled access to world-class investment opportunities.",
      additionalInfo: "By leveraging our understanding of each principal's unique processes and criteria, we craft alpha-driven strategies tailored to your specific needs. Our solutions are driven by quantitative modeling with intelligent risk management, designed to enhance your portfolio's resilience and performance. We welcome the opportunity of partnering with us to unlock bespoke investment opportunities that align precisely with your goals and risk appetite."
    }
  ];

  const serviceCategories = [
    {
      title: "Structured Special Offerings Qualification",
      services: [
        "Asset Monetization",
        "Tier-1 Trade Platform | Private Placement Programs",
        "Off-to-On Ledger Receivership",
        "Bespoke Banking Instruments"
      ]
    },
    {
      title: "Turnkey Infrastructure Finance and Construction Solutions",
      services: [
        "Greenfield (Pre-Operations Stage) and Brownfield (Operations Stage) Projects",
        "EPC+F (Engineering, Procurement, and Construction, plus Finance)",
        "Supply Chain Sourcing"
      ]
    },
    {
      title: "Petro & Gas",
      services: [
        "Sourcing and Trading of Oil and Gas products",
        "Sales and Marketing of major Oil and Gas assets",
        "Consulting on all aspects of downstream business activities"
      ]
    },
    {
      title: "Real-Estate Development Financing",
      services: [
        "Commercial Real Estate",
        "Multi-family Residences",
        "Value-Add Opportunities",
        "Distressed Assets",
        "Hospitality Ventures",
        "Mixed-Use Developments",
        "Master Development",
        "Ultra-High-End Residential Sanctuaries"
      ]
    },
    {
      title: "Mergers, Acquisitions, and Growth Equity",
      services: [
        "Sell-Side",
        "Buy-Side",
        "IPO Readiness",
        "Post-Merger Integration",
        "Minority stakes in late-stage, high-growth companies with expansion upside"
      ]
    },
    {
      title: "Underwriting & Corporate Finance Consultancy",
      services: [
        "Due Diligence",
        "Transaction Support",
        "Investment Consultancy",
        "Equity Placement",
        "Debt Placement",
        "Warrants"
      ]
    },
    {
      title: "Operational Improvements",
      services: [
        "Financial Modeling & Valuation",
        "Investor Relations Support",
        "Board Advisory Services",
        "Market Entry Strategy",
        "Process Optimization",
        "Digital Transformation"
      ]
    },
    {
      title: "Specialized Consultancy",
      services: [
        "Restructuring",
        "Risk Mgmt. & Compliance",
        "Supply Chain & Logistics",
        "Intellectual Property Strategy",
        "Business Intelligence"
      ]
    }
  ];

  return (
    <>
      <Header onContactClick={openContactModal} />
      
      <main className={styles.servicesPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.heroSubtitle}>
              Start Navigating Tomorrow's World, Today...
            </p>
          </motion.div>
        </section>

        {/* Section divider */}
        <div className={styles.sectionDivider}>
          <motion.div 
            className={styles.dividerLine}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div 
            className={styles.dividerGem}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
          />
        </div>

        {/* Core Investment Banking Section */}
        <section className={styles.coreSection}>
          <div className={styles.container}>
            {coreServices.map((service, index) => (
              <motion.div 
                key={index}
                className={styles.coreServiceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={styles.coreTitle}>{service.title}</h2>
                <h3 className={styles.coreSubtitle}>{service.subtitle}</h3>
                <p className={styles.coreDescription}>{service.description}</p>
                <p className={styles.coreAdditionalInfo}>{service.additionalInfo}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section divider */}
        <div className={styles.sectionDivider}>
          <motion.div 
            className={styles.dividerLine}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div 
            className={styles.dividerGem}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
          />
        </div>

        {/* Services Grid */}
        <section className={styles.servicesGrid}>
          <div className={styles.container}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Comprehensive Service Portfolio
            </motion.h2>
            
            <div className={styles.categoriesGrid}>
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex}
                  className={styles.categoryCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <ul className={styles.servicesList}>
                    {category.services.map((service, serviceIndex) => (
                      <motion.li 
                        key={serviceIndex}
                        className={styles.serviceItem}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                      >
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                  <div className={styles.cardGlow} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}; 