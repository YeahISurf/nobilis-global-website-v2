import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const companyLinks = [
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Team', to: '/team' },
    { name: 'Partners', to: '/strategic-partners' },
    { name: 'Contact', to: '/contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Company Brand & Info */}
          <div className={styles.section}>
            <div className={styles.brand}>
              <h3 className={styles.brandName}>
                <span className={styles.logoText}>Nobilis</span>
                <span className={styles.logoAccent}>Global</span>
              </h3>
              <p className={styles.brandTagline}>
                Transforming businesses through strategic innovation and global partnerships
              </p>
            </div>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={16} />
                <a href="mailto:admin@nobilisglobal.com">admin@nobilisglobal.com</a>
              </div>
              
              <div className={styles.contactItem}>
                <Phone size={16} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>40 Wall Street, New York, NY, USA</span>
              </div>
              
              <div className={styles.contactItem}>
                <Clock size={16} />
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
            <nav className={styles.navigation}>
              {companyLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className={styles.navLink}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            
            <motion.button
              onClick={onContactClick}
              className={styles.contactButton}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </div>
        
        <div className={styles.divider} />
        
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p>© 2025 Nobilis Global Inc. All rights reserved.</p>
          </div>
          <div className={styles.legalLinks}>
            <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
            <a href="/terms" className={styles.legalLink}>Terms of Service</a>
            <a href="/cookies" className={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 