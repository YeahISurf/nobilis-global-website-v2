import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import styles from './Team.module.css';

export const Team: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const teamMembers = [
    {
      name: "JD Lazare",
      title: "President & Chief Executive Officer",
      description: "Mr. Lazare, graduated from Wharton School of Business with a triple MBA and prolific wealth imprint. He interned, then worked full-time at Goldman Sachs for 10 years, and was recognized with top producer awards. Mr. Lazare specialized at the alternative credit desk & specialty lending, and now brings an abundance of wisdom in global finance to command a leadership skill-set and keen ability to maneuver in any high-pressure environment calling for tuned decision making, resilient work ethic, great perseverance and vision to guide his unparalleled Exec's at the boutique firm Nobilis Global. His background includes financial engineering, implementation of credit facilities, derivatives & debentures, aligning consortiums, syndications, structured finance, quantitative modeling, anything specialty lending for unwavering projects around the globe, managing assets, and raising capital for both private and public entities. This deep understanding of global markets both from a micro & macro prospectus and facilitating financial instruments positions Nobilis Global to partner effectively with high-quality management teams and industry-leading companies with significant growth potential."
    },
    {
      name: "George Matharu",
      title: "Chairman",
      description: "With over three decades of experience at the forefront of business, finance, and IT, George Matharu stands as a visionary and commercially-driven leader. As a CEO and Programme Director, he has achieved unparalleled success in orchestrating multi-billion-dollar infrastructural projects and steering organisations towards unprecedented growth. George's transformative strategies have delivered remarkable cost savings and financial structures, reinforcing his position as a distinguished industry expert. Throughout his illustrious career, George has always been a trailblazer and amassed an impressive track record, replete with achievements and accolades. His ability to navigate complex global landscapes, including engagements with industry giants such as BP, ExxonMobil & Shell JV, Unilever, Mars Confectionery, Paramount & Universal JV, and Whitbread PLC, showcases his exceptional leadership acumen. George's expertise goes beyond numbers and spreadsheets. He's known for his strategic thinking and planning, adept at taking concepts from inception to fruition. He assembles cohesive project teams, develops compelling business plans, and executes with precision to deliver bottom-line benefits. His charismatic leadership fosters collaborative approaches, whether managing on-site or virtual teams, yielding harmonious relationships and seamless communication. As an esteemed industry professional, George has cultivated an enviable global network. His insights have graced C-Suite magazines, including being featured in the Forbes Top 10 Business Leaders Awards 2022."
    },
    {
      name: "Manuel Benítez",
      title: "Managing Partner",
      description: "Mr. Benítez specializes in strategic risk mitigation and investment sourcing for Nobilis Global. His experience in the intelligence community working with communication technologies, information security, asset-tracking, and operational due diligence ensures access to a distinguished network of threat assessment sources and risk mitigation solutions. Mr. Benítez' background in raising capital from institutions and family offices, combined with experience in technical logistics and deal flow processes allows Nobilis to implement protective structures into its client's investments to ensure continuity."
    },
    {
      name: "Jouni Keravuori",
      title: "Business Development Advisor",
      description: "Mr. Keravuori developed a distinguished career in both government and corporate leadership. His legendary military service includes deployments in Vietnam, West Berlin, and the UN Middle East, prior to retiring as Chief-of-Staff of the 82nd Airborne and Deputy Commander of the Military District of Washington (MDW). Then, he transitioned to the commercial sector as Director of Leadership and Management Seminars for the new Ministry of Defense in Bosnia, following the Dayton Accords. Mr. Keravuori later held leadership roles at L-3 MPRI and SAS Institute before advancing to Sr. Director of International Business Development at General Dynamics. Post-retirement, Mr. Keravuori has served as Chairman of security-technology and risk-mitigation companies; and with a proven track record of developing market channels with Fortune 50 companies, he seeks to guide Nobilis Global's vision, by fostering strategic relationships, and drive business growth initiatives for a more precise pathway forward to reach the pinnacle of success."
    },
    {
      name: "Guy Irvin",
      title: "Chief Operations Officer",
      description: "Mr. Irvin is a seasoned executive with over 40 years of experience with a strong record of success in leading complex international military, security, and commercial operations in the Middle East, South and Central America, and the Pacific Rim. He has extensive expertise in designing and executing major business and strategic plans, as well as planning and implementing business continuity and resiliency plans. Mr. Irvin is a veteran of Tier-1 Special Operations Unit, with strong leadership, consistent track record of excellence, problem-solving, planning, team building, business development and risk management. Mr. Irvin is a natural leader with the cross-cultural skills needed to establish a self-sustained and loyal team, he knows how to enhance the corporate image, has negotiated major deals, and orchestrated critical changes in business operations, plans, policies, and procedures that resulted in renewed contracts, new contracts and consistently high levels of client satisfaction."
    },
    {
      name: "Rosalina Estevez",
      title: "Chief Compliance Officer",
      description: "Rosalina Estevez is a quality management professional with over 25 years of experience building Quality Management Systems (QMS) based on ISO standards. As a Lead Quality Auditor, she ensures compliance and drives continuous improvement. Rosalina specializes in training teams in quality management principles, empowering them to maintain high standards. In her role as a Project Manager, she leads initiatives focused on process mapping, analysis, design, and improvement, effectively streamlining operations. With various certifications in quality management, Rosalina is committed to professional development and industry best practices. Known for her strong communication skills, she excels as a facilitator and mentor, fostering a culture of quality and accountability. Outside of work, Rosalina stays engaged with industry trends and participates in workshops to enhance her expertise."
    },
    {
      name: "George Pastrana",
      title: "Chief Financial Officer",
      description: "Mr. Pastrana is an expert in corporate finance theory and its application to financial firms, including the modeling and risk control of complex contingent claim financial security portfolios; operations and vendor risk management of large banks; and value-based management (VBM) concepts. He is a former Managing Director at UBS who led the quantitative team for a think-tank that supported Senior Management and Division Heads regarding capital management. Served as Global Head of Market Risk under the Chief Risk Officer at Morgan Stanley, and Senior Consultant for Citi, and BNY Mellon. Mr. Pastrana currently advises various start-ups on creating KPI-driven cash-flow projection models for valuation, and modeling SAFEs and Convertible Notes in the Cap Table for funding scenario analyses."
    }
  ];

  const socialNetworks = ['linkedin', 'twitter', 'facebook', 'instagram', 'youtube', 'email'];

  return (
    <>
      <Header onContactClick={openContactModal} />
      
      <main className={styles.teamPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Meet the Team</h1>
            <p className={styles.heroSubtitle}>
              A Legacy of Success Built on Generational Wisdom
            </p>
          </motion.div>
        </section>

        {/* Team Members Section */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className={styles.memberCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={styles.memberImageContainer}>
                    <div className={styles.placeholderImage}>
                      <span className={styles.placeholderText}>
                        {member.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  <div className={styles.memberContent}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <h4 className={styles.memberTitle}>{member.title}</h4>
                    <p className={styles.memberDescription}>{member.description}</p>
                    
                    <div className={styles.socialIcons}>
                      {socialNetworks.map((network, socialIndex) => (
                        <SocialIcon
                          key={socialIndex}
                          network={network}
                          className={styles.socialIcon}
                          style={{ height: 40, width: 40 }}
                          fgColor="white"
                          bgColor="var(--surface)"
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className={styles.quoteSection}>
          <motion.div 
            className={styles.container}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className={styles.quote}>
              "The task ahead of us is never as great as the power behind us."
            </blockquote>
            <cite className={styles.quoteAuthor}>—Ralph W. Emerson</cite>
          </motion.div>
        </section>
      </main>

      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}; 