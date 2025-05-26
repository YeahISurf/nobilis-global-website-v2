import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Calendar, Users, ArrowRight, Phone } from 'lucide-react';
import styles from './StreamsSection.module.css';

export const StreamsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <TrendingUp size={24} />,
      title: "Exclusive Deal Flow",
      description: "Access to proprietary investment opportunities not available through traditional channels"
    },
    {
      icon: <Users size={24} />,
      title: "Expert Due Diligence",
      description: "Rigorous analysis by our team of seasoned investment professionals"
    },
    {
      icon: <Calendar size={24} />,
      title: "Strategic Timing",
      description: "Market-informed entry and exit strategies for optimal returns"
    }
  ];

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.visual}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className={styles.visualPulse}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            🔥 Limited Access Available
          </motion.span>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover New Investment Streams
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Access our proprietary deal flow of world-class investment opportunities not available through 
            traditional channels. Our curated portfolio spans multiple sectors and asset classes, offering 
            potential for superior risk-adjusted returns and portfolio diversification.
          </motion.p>

          <motion.div 
            className={styles.features}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className={styles.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.a
              href="/contact"
              className={styles.primaryCta}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(23, 165, 137, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <TrendingUp size={20} />
              Request Access
              <ArrowRight size={16} />
              <motion.div 
                className={styles.ctaGlow}
                animate={{ 
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
            
            <motion.a
              href="/services"
              className={styles.secondaryCta}
              whileHover={{ 
                scale: 1.02,
                x: 5
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={18} />
              Schedule Consultation
            </motion.a>
          </motion.div>

          <motion.div 
            className={styles.urgencyIndicator}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <span className={styles.urgencyText}>
              📅 Next investment window closes in 14 days
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 