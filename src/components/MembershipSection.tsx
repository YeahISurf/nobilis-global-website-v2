import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield } from 'lucide-react';
import styles from './MembershipSection.module.css';

export const MembershipSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="membership" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.icon}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            <Shield size={60} />
            <motion.div 
              className={styles.iconGlow}
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Redefine Your Possibilities
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Nobilis Global will introduce a tokenized fund-of-funds leveraging blockchain 
            technology. This vehicle will offer a stablecoin representing fractional 
            ownership in a diversified private equity portfolio. The stablecoin's value 
            will be pegged to the fund's NAV and backed by RWAs.
          </motion.p>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            This structure will aim to provide enhanced liquidity, operational 
            efficiencies, and lower investment thresholds. The tokenization of fund 
            shares will seek to optimize portfolio allocation for qualified investors, 
            potentially improving access to institutional-quality private equity exposure.
          </motion.p>
          
          <motion.div
            className={styles.comingSoon}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className={styles.badge}
              whileHover={{ scale: 1.1 }}
            >
              Membership
            </motion.span>
            <motion.span 
              className={styles.status}
              animate={{ 
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Coming Soon
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 