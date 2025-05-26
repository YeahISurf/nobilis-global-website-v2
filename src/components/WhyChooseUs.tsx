import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, TrendingUp, Users, Globe, Star } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

interface StatProps {
  value: string;
  label: string;
  delay: number;
  icon?: React.ReactNode;
}

const Stat: React.FC<StatProps> = ({ value, label, delay, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={styles.stat}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      {icon && (
        <motion.div 
          className={styles.statIcon}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.1 }}
        >
          {icon}
        </motion.div>
      )}
      <motion.h3
        className={styles.statValue}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.2, type: 'spring' }}
      >
        {value}
      </motion.h3>
      <p className={styles.statLabel}>{label}</p>
      <div className={styles.statGlow} />
    </motion.div>
  );
};

interface TrustIndicatorProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const TrustIndicator: React.FC<TrustIndicatorProps> = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={styles.trustCard}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -3,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className={styles.trustIcon}
        initial={{ scale: 0, rotate: -45 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.7, delay: delay + 0.2 }}
      >
        {icon}
      </motion.div>
      <h4 className={styles.trustTitle}>{title}</h4>
      <p className={styles.trustDescription}>{description}</p>
    </motion.div>
  );
};

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    { 
      value: '$13B+', 
      label: 'Total Transaction Value',
      icon: <TrendingUp size={24} />
    },
    { 
      value: '500+', 
      label: 'Successful Transactions',
      icon: <Award size={24} />
    },
    { 
      value: '$150B+', 
      label: 'Combined Asset Value',
      icon: <Globe size={24} />
    },
  ];

  const trustIndicators = [
    {
      icon: <Shield size={28} />,
      title: "Regulatory Compliance",
      description: "ISO-9001, ISO-27001, and ISO-37001 certified with rigorous compliance standards"
    },
    {
      icon: <Users size={28} />,
      title: "Industry Expertise",
      description: "Team of seasoned professionals with 100+ years of combined financial experience"
    },
    {
      icon: <Award size={28} />,
      title: "Exclusive Access",
      description: "Proprietary deal flow unavailable through traditional investment channels"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className={styles.section}>
      {/* Section divider */}
      <div className={styles.sectionDivider}>
        <motion.div 
          className={styles.dividerLine}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div 
          className={styles.dividerGem}
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className={styles.label}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            WHY CHOOSE US?
          </motion.span>
          <h2 className={styles.title}>
            Your Premier Partner for Investment Excellence
          </h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nobilis Global is a full-service investment banking boutique firm with an 
            emphasis on Private Equity and Venture Capital, specializing in project funding 
            and global bespoke financial services. With a focus on discretion and 
            personalized service, we provide access to a carefully curated selection of 
            private investments across diverse sectors.
          </motion.p>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our commitment to excellence and our unwavering focus on client success have 
            earned us a reputation as a trusted partner for those seeking unique and 
            profitable investment opportunities with measurable impact.
          </motion.p>

          <motion.a
            href="/about"
            className={styles.learnMore}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ 
              x: 10,
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
            <motion.span 
              className={styles.arrow}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <Stat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              delay={0.4 + index * 0.1}
            />
          ))}
        </motion.div>

        {/* Trust Indicators Section */}
        <motion.div
          className={styles.trustSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className={styles.trustSectionTitle}>Built on Trust & Excellence</h3>
          <div className={styles.trustGrid}>
            {trustIndicators.map((indicator, index) => (
              <TrustIndicator
                key={indicator.title}
                icon={indicator.icon}
                title={indicator.title}
                description={indicator.description}
                delay={0.9 + index * 0.15}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 