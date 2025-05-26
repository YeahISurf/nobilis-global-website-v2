import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users } from 'lucide-react';
import styles from './FlowSection.module.css';

export const FlowSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Enter the Flow</h2>
          <p className={styles.description}>
            The cornerstone of our success is our team. We've brought together a group 
            of seasoned professionals with diverse backgrounds in private equity, 
            investment banking, corporate finance, and industry-specific expertise. 
            Our team members are not just financial experts; they are strategic thinkers 
            committed to driving value for our clients and partners.
          </p>
          <motion.a
            href="#team"
            className={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users size={20} />
            Meet the Team
          </motion.a>
        </motion.div>
        
        <motion.div
          className={styles.visualContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.visual}>
            <div className={styles.orb} />
            <div className={styles.orb} />
            <div className={styles.orb} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 