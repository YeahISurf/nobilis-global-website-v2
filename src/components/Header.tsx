import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const throttledScrollHandler = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Team', to: '/team' },
    { label: 'Partners', to: '/strategic-partners' },
    { label: 'Membership', href: '#membership' },
    { label: 'Contact', to: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Animation variants for better performance
  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: shouldReduceMotion ? 0.1 : 0.6, ease: 'easeOut' } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : i * 0.1 + 0.3,
        duration: shouldReduceMotion ? 0.1 : 0.3
      }
    })
  };

  return (
    <>
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.container}>
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          >
            <Link to="/" className={styles.logo}>
              <span className={styles.logoText}>Nobilis</span>
              <span className={styles.logoAccent}>Global</span>
            </Link>
          </motion.div>

          <nav className={styles.desktopNav} role="navigation" aria-label="Main navigation">
            {navItems.map((item, index) => {
              const isActive = item.to ? isActiveRoute(item.to) : false;
              
              if (item.to) {
                return (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  >
                    <Link
                      to={item.to}
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              } else {
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={styles.navLink}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  >
                    {item.label}
                  </motion.a>
                );
              }
            })}
          </nav>

          <button
            ref={menuButtonRef}
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            ref={mobileMenuRef}
            className={styles.mobileNav}
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'tween', 
              duration: shouldReduceMotion ? 0.1 : 0.3, 
              ease: 'easeInOut' 
            }}
          >
            {navItems.map((item, index) => {
              const isActive = item.to ? isActiveRoute(item.to) : false;
              
              if (item.to) {
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: shouldReduceMotion ? 0 : index * 0.1,
                      duration: shouldReduceMotion ? 0.1 : 0.3
                    }}
                  >
                    <Link
                      to={item.to}
                      onClick={closeMobileMenu}
                      className={`${styles.mobileNavLink} ${isActive ? styles.activeMobile : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: shouldReduceMotion ? 0 : index * 0.1,
                      duration: shouldReduceMotion ? 0.1 : 0.3
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={styles.mobileNavLink}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                );
              }
            })}
            
            <motion.button
              onClick={() => {
                onContactClick();
                closeMobileMenu();
              }}
              className={styles.mobileContactButton}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: shouldReduceMotion ? 0 : navItems.length * 0.1,
                duration: shouldReduceMotion ? 0.1 : 0.3
              }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Phone size={18} />
              Get In Touch
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}; 