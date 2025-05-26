import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import styles from './Hero.module.css';
import heroImage from '../images/ChatGPT Image May 22, 2025, 08_28_39 PM.png';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundImage}>
        <img 
          src={heroImage} 
          alt="Nobilis Global - Future of Investment" 
          className={`${styles.heroImage} ${imageLoaded ? styles.loaded : ''}`}
          loading="eager"
          decoding="async"
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <div className={styles.imagePlaceholder} />
        )}
      </div>
      <div className={styles.backgroundOverlay} />
      
      {/* Subtle ambient glow effect instead of floating particles */}
      <motion.div 
        className={styles.ambientGlow}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            It's time to <span className={styles.highlight}>rediscover</span> your
            investment lifestyle with Nobilis Global.
          </motion.h1>
          
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            With us you will enter a private network that's led by industry titans, 
            gain exposure to world-class deals, and achieve a level of financial success 
            that will leave an enduring mark on the world.
          </motion.p>
          
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://tradingview.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(201, 48, 44, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              aria-label="Track all markets on TradingView - Opens in new window"
            >
              <TrendingUp size={20} aria-hidden="true" />
              Track all markets on TradingView
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        role="img"
        aria-label="Scroll to explore more content"
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <motion.p 
          className={styles.scrollText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
}; 