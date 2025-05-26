import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import styles from './About.module.css';

export const About: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const services = [
    "Full-Service Boutique Investment Banking",
    "Special Structured Offerings Qualification",
    "Fully Operating Petro Desk, Banking Instruments, Off-to-On Ledger Receivership, Monetization Capabilities",
    "Commercial Real Estate and Mega-Commercial Projects(CRE) Full Cap-Stack",
    "Structured Finance",
    "Ground Leases",
    "Mezzanine Financing",
    "Custom and Traditional Debt",
    "C-PACE",
    "Grants and Subsidies",
    "Tif's",
    "HTC's",
    "OZ's",
    "Bridge Loans: Merchant Cash Advance (MCA), Accounts Receivable (AR), Purchase Order (PO), Lines of Credit, Warehouse Lines, Trade Finance, Equipment Financing",
    "Sovereign Guarantees, Resource Guarantees, Corporate Guarantees",
    "Convertibles, Venture and Complex Debt Financing, Carve-Outs, Private Equity",
    "Equity Infusions",
    "GP / LP",
    "Joint Ventures",
    "Credit Facilities",
    "Credit Enhancements and Swaps",
    "Derivatives and Debentures",
    "Mergers and Acquisitions",
    "(or re-structure) finance"
  ];

  const principles = [
    {
      title: "Transformative & High-Impact Opportunities",
      description: "We prioritize investments with potential for significant societal and economic change, addressing complex global challenges."
    },
    {
      title: "Measurable Performance Metrics",
      description: "We implement rigorous performance metrics to quantify both financial returns and broader impact, ensuring transparency and accountability"
    },
    {
      title: "Strategic Innovation",
      description: "We develop specialized expertise to tackle financially complex ventures with high potential, using investment vehicles that can position capital for long-term systemic change."
    },
    {
      title: "Risk Adjusted Return",
      description: "We position clients for both investment opportunities and potential crises management by providing flexible investment structures that incorporate risk-mitigation resources, maintaining readiness for rapid deployment when needed"
    },
    {
      title: "Solution-Oriented Neutrality",
      description: "We maintain non-partisan approach, focusing on concrete problem-solving and cultivating diverse partnerships to achieve our investment goals."
    },
    {
      title: "Continuous Improvements",
      description: "ISO-9001 (Quality Management System) is the substrate of our business system. With ISO-27001 (ISMS) and ISO-37001 (ABMS) functioning as specialized symbiotic layers, systematically enhancing our best practices."
    }
  ];

  return (
    <>
      <Header onContactClick={openContactModal} />
      
      <main className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.heroQuote}>
              Nobody Controls the invisible hand, for the present is the only certainty we possess.
            </p>
          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className={styles.introSection}>
          <motion.div 
            className={styles.container}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.introParagraph}>
              In the realm of global finance, our boutique investment firm shines as a beacon of excellence. We deftly navigate the intricate landscape of private equity and venture capital, guided by a discerning methodology that elevates us above the commonplace. With a strategic presence in key global centers, we stand at the forefront of project funding and consultancy services.
            </p>
            <p className={styles.introParagraph}>
              Our clientele comprises an elite group of visionaries who shape the very contours of industry and commerce. We meticulously tailor bespoke financial solutions to harmonize with the unique aspirations of each distinguished client. Exceeding expectations is our benchmark as we propel our clients towards the pinnacle of success.
            </p>
            <p className={styles.introParagraph}>
              In a world often mired in mediocrity, our firm embodies a legacy of unrivaled wisdom spanning over a century. We illuminate the path for the truly exceptional, guiding them to their rightful place at the zenith of achievement. More than mere consultants, we are the architects of financial destinies, the stewards of prosperity, and the unseen catalysts behind some of history's most coveted endeavors.
            </p>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <motion.div 
            className={styles.container}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.servicesIntro}>
              Our placement services extend beyond traditional financing options, encompassing a wide range of alternative solutions including:
            </p>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className={styles.serviceItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision Section */}
        <section className={styles.missionVisionSection}>
          <div className={styles.container}>
            <motion.div 
              className={styles.missionVisionGrid}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.missionBox}>
                <h2 className={styles.mvTitle}>Mission</h2>
                <p className={styles.mvText}>
                  Nobilis Global seeks to optimize client wealth through strategic allocation of capital into world-class investment opportunities. We focus on identifying and executing transactions with potential for significant value creation and transformative impact. Our approach leverages proprietary deal sourcing, rigorous due diligence processes, and innovative financial structuring to deliver superior risk-adjusted returns while contributing to meaningful global advancements.
                </p>
              </div>
              <div className={styles.visionBox}>
                <h2 className={styles.mvTitle}>Vision</h2>
                <p className={styles.mvText}>
                  Nobilis Global targets market leadership in alternative investments through alpha-generating strategies centered on world-class, proprietary deal flow and innovative structured finance solutions. We implement comprehensive risk management protocols across the investment lifecycle while leveraging fintech innovations to enhance operational efficiency and client reporting. Our approach aims to consistently outperform relevant benchmarks, adhering to regulatory standards and fiduciary best practices in portfolio management, with a focus on exclusive, high-impact investment opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Principles Section */}
        <section className={styles.principlesSection}>
          <div className={styles.container}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Achieving the Pinnacle of Success
            </motion.h2>
            <div className={styles.principlesGrid}>
              {principles.map((principle, index) => (
                <motion.div 
                  key={index}
                  className={styles.principleCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleDescription}>{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainable Future Section */}
        <section className={styles.sustainableSection}>
          <motion.div 
            className={styles.container}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Investing in a Sustainable Future</h2>
            <p className={styles.sustainableIntro}>
              Nobilis Global aligns investment strategies with the United Nations Sustainable Development Goals (SDGs). We strive to bridge the gap between profitability and global sustainability by:
            </p>
            <ul className={styles.sustainableList}>
              <li>Identifying and investing in opportunities that advance SDG targets</li>
              <li>Developing innovative financial structures that generate returns with impact</li>
              <li>Collaborating with partners to accelerate progress towards the 2030 agenda</li>
            </ul>
            <p className={styles.sustainableConclusion}>
              Together, we can demonstrate that responsible investing can yield both competitive financial returns and meaningful contributions to global peace and prosperity, addressing the challenges highlighted in the Capital as a Force for Good Report.
            </p>
            <motion.button 
              className={styles.learnMoreBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </section>
      </main>

      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}; 