import { useState, useEffect } from "react";
import finsightDashboard from "./assets/finsight-dashboard.png";
import ecommerceDashboard from "./assets/ecommerce-dashboard.png";
import profile from "./assets/profile.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Sparkles,
  Code2,
  Brain,
  Database,
  Menu,
  X,
  ChevronUp,
  Play,
  Pause,
  RotateCw,
  LayoutGrid,
} from "lucide-react";

import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [viewMode, setViewMode] = useState("orbit"); // "orbit" | "grid"
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const aboutCards = [
    {
      num: "01",
      title: "AI & Machine Learning",
      desc: "Exploring intelligent systems, machine learning models and AI applications.",
      icon: Brain,
      tag: "Neural Networks & Models",
    },
    {
      num: "02",
      title: "Data Analytics",
      desc: "Turning raw data into interactive dashboards and meaningful business insights.",
      icon: Database,
      tag: "BI & Visualization",
    },
    {
      num: "03",
      title: "Development",
      desc: "Creating practical digital experiences with clean code and modern tooling.",
      icon: Code2,
      tag: "Web & Software",
    },
  ];

  const skills = [
    "Python",
    "AI",
    "Tableau",
    "SQL",
    "Machine Learning",
    "Power BI",
    "Excel",
    "HTML & CSS",
    "Git & GitHub",
  ];

  const achievements = [
    {
      num: "01",
      title: "Azure AI Fundamentals",
      desc: "Microsoft Certification",
    },
    {
      num: "02",
      title: "National Hackathon",
      desc: "Volunteer – 2026",
    },
    {
      num: "03",
      title: "THE PINNACLE",
      desc: "Coordinated a three-day international-level technical symposium. (2026)",
    },
    {
      num: "04",
      title: "Gen AI Camp",
      desc: "Algo University",
    },
    {
      num: "05",
      title: "Rapid Development for AI Services",
      desc: "IBM Developer Skills Network",
    },
  ];

  return (
    <div className="portfolio">

      {/* AMBIENT BACKGROUND GLOW */}
      <div className="ambient-blob blob-1" />
      <div className="ambient-blob blob-2" />

      {/* BACKDROP FOR MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* NAVIGATION */}
      <motion.header
        className="navbar-container"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="navbar">
          <a href="#home" className="logo" onClick={closeMenu}>
            Diana<span>.</span>
          </a>

          <div className="nav-links desktop-only">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <a href="#contact" className="nav-button desktop-cta">
              Let's Talk <ArrowUpRight size={16} />
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-nav-dropdown"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#home" onClick={closeMenu}>Home</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#skills" onClick={closeMenu}>Skills</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a href="#education" onClick={closeMenu}>Education</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
              <a
                href="#contact"
                className="mobile-nav-cta"
                onClick={closeMenu}
              >
                Let's Talk <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* HERO SECTION */}
      <section className="hero" id="home">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <motion.div
            className="availability"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="status-dot-wrapper">
              <span className="status-dot"></span>
              <span className="status-dot-pulse"></span>
            </span>
            Open to opportunities
          </motion.div>

          <p className="intro">HELLO, I'M</p>

          <h1>
            Diana Zavia <span>K.</span>
          </h1>

          <h2>
            Aspiring AI & <br className="desktop-break" />
            <span>Technology Professional.</span>
          </h2>

          <p className="hero-description">
            Exploring the world of Artificial Intelligence,
            Data Analytics and Software Development.
            Passionate about learning, creating and
            building meaningful solutions through technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Diana-Resume.pdf`}
              download="Diana-Resume.pdf"
              className="secondary-button"
            >
              Download Resume ↓
            </a>

            <a href="#contact" className="secondary-button">
              Get In Touch
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/dianazavia"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/diana-zavia-7aa90b241/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span style={{ fontWeight: "bold" }}>in</span>
            </a>

            <a
              href="mailto:dianazavia27@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

        </motion.div>

        {/* PROFILE IMAGE & FLOATING ELEMENTS */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >

          <motion.div
            className="glow-circle"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.65, 0.85, 0.65],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="profile-card"
            whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >

            <div className="profile-placeholder">
              <img src={profile} alt="Diana Zavia" />
            </div>

            <div className="profile-caption">
              <motion.span
                animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "inline-flex" }}
              >
                <Sparkles size={18} />
              </motion.span>
              <span>Creating something meaningful</span>
            </div>

          </motion.div>

          <motion.div
            className="floating-icon icon-one"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.15, rotate: 6 }}
          >
            <Brain size={20} />
          </motion.div>

          <motion.div
            className="floating-icon icon-two"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            whileHover={{ scale: 1.15, rotate: -6 }}
          >
            <Code2 size={20} />
          </motion.div>

          <motion.div
            className="floating-icon icon-three"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            whileHover={{ scale: 1.15, rotate: 8 }}
          >
            <Database size={20} />
          </motion.div>

        </motion.div>

      </section>

      {/* ABOUT SECTION */}
      <section className="about section" id="about">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header-row">
            <div>
              <p className="section-label">GET TO KNOW ME</p>
              <h2>
                More About <span>Me.</span>
              </h2>
            </div>

            {/* View Mode Switcher */}
            <div className="view-mode-toggle">
              <button
                className={`mode-btn ${viewMode === "orbit" ? "active" : ""}`}
                onClick={() => setViewMode("orbit")}
                title="Circular Orbit View"
                aria-label="Circular Orbit View"
              >
                <RotateCw size={14} />
                <span>Orbit</span>
              </button>
              <button
                className={`mode-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid size={14} />
                <span>Grid</span>
              </button>
            </div>
          </div>

          <p className="section-description">
            I'm a Bachelor of Engineering student specializing
            in Artificial Intelligence and Machine Learning at
            Yenepoya Institute of Technology.

            I enjoy exploring technology, working with data
            and developing intelligent solutions. I'm always
            looking for opportunities to learn, grow and
            turn ideas into reality.
          </p>
        </motion.div>

        {viewMode === "orbit" ? (
          <motion.div
            className="orbit-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`orbit-stage ${isOrbitPaused ? "is-paused" : ""}`}
              onMouseEnter={() => setIsOrbitPaused(true)}
              onMouseLeave={() => setIsOrbitPaused(false)}
              onTouchStart={() => setIsOrbitPaused(true)}
            >
              {/* Elliptical track guide */}
              <div className="orbit-track" />

              {/* Central Core Emblem */}
              <div className="orbit-center-core">
                <div className="orbit-core-icon">
                  <Sparkles size={20} />
                </div>
                <span className="orbit-core-label">Core Pillars</span>
              </div>

              {/* Orbital Cards moving in a circular motion */}
              {aboutCards.map((card, index) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={card.num}
                    className={`orbital-card orbital-card-${index}`}
                  >
                    <div className="card-top-row">
                      <div className="card-icon-badge">
                        <CardIcon size={20} />
                      </div>
                      <span className="card-number">{card.num}</span>
                    </div>

                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>

                    <div className="card-tag">{card.tag}</div>
                  </div>
                );
              })}
            </div>

            {/* Orbit Controls & Helper */}
            <div className="orbit-footer-bar">
              <button
                className="orbit-play-btn"
                onClick={() => setIsOrbitPaused(!isOrbitPaused)}
                aria-label={isOrbitPaused ? "Resume circular motion" : "Pause circular motion"}
              >
                {isOrbitPaused ? <Play size={14} /> : <Pause size={14} />}
                <span>{isOrbitPaused ? "Resume Motion" : "Pause Motion"}</span>
              </button>

              <span className="orbit-hint-text">
                ✨ Hover or tap any card to pause & read
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="about-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {aboutCards.map((card, index) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  className="info-card"
                  key={card.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="card-top-row">
                    <div className="card-icon-badge">
                      <CardIcon size={20} />
                    </div>
                    <span className="card-number">{card.num}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <div className="card-tag">{card.tag}</div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

      </section>

      {/* SKILLS SECTION */}
      <section className="skills section" id="skills">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">WHAT I WORK WITH</p>

          <h2>
            My <span>Skills.</span>
          </h2>
        </motion.div>

        <div className="skill-list">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-item"
              key={skill}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>

          ))}

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects section" id="projects">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">MY RECENT WORK</p>

          <h2>
            Featured <span>Projects.</span>
          </h2>
        </motion.div>

        <div className="project-grid">

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >

            <div className="project-image">
              <img
                src={finsightDashboard}
                alt="Finsight AI Dashboard"
                loading="lazy"
              />
            </div>

            <div className="project-number">
              01 / AI & ML
            </div>

            <h3>Finsight AI</h3>

            <p>
              An intelligent financial analysis platform
              designed to process financial documents and
              generate meaningful insights using AI.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>AI / ML</span>
              <span>NLP</span>
            </div>

            <a href="#contact" className="project-link">
              Explore Project <ArrowUpRight size={18} />
            </a>

          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >

            <div className="project-image">
              <img
                src={ecommerceDashboard}
                alt="E-Commerce Sales and Performance Dashboard"
                loading="lazy"
              />
            </div>

            <div className="project-number">
              02 / DATA ANALYTICS
            </div>

            <h3>E-Commerce Dashboard</h3>

            <p>
              An interactive three-page Power BI dashboard
              analyzing sales, profit, customers, orders
              and regional business performance.
            </p>

            <div className="project-tags">
              <span>Power BI</span>
              <span>DAX</span>
              <span>Excel</span>
            </div>

            <a href="#contact" className="project-link">
              Explore Project <ArrowUpRight size={18} />
            </a>

          </motion.div>

        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="education section" id="education">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">MY ACADEMIC JOURNEY</p>

          <h2>Education & <span>Learning.</span></h2>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >

          <div className="education-year">2023 – 2027</div>

          <h3>Bachelor of Engineering</h3>

          <h4>Artificial Intelligence & Machine Learning</h4>

          <p>Yenepoya Institute of Technology</p>

          <div className="education-score">
            CGPA: 7.8
          </div>

        </motion.div>

      </section>

      {/* CERTIFICATIONS & ACHIEVEMENTS */}
      <section className="certifications section" id="certifications">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">MILESTONES & EXPERIENCE</p>

          <h2>
            Certifications & <span>Achievements.</span>
          </h2>
        </motion.div>

        <div className="achievement-grid">

          {achievements.map((item, index) => (
            <motion.div
              className="achievement-card"
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <span>{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="contact section" id="contact">

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">LET'S CONNECT</p>

          <h2>
            Have an idea? <span>Let's talk.</span>
          </h2>

          <p>
            I'm always open to learning opportunities,
            collaborations and exciting projects.
          </p>

          <motion.a
            href="mailto:dianazavia27@gmail.com"
            className="primary-button"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Say Hello <Mail size={18} />
          </motion.a>
        </motion.div>

      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Diana Zavia K. All rights reserved.</p>
        <p>Designed with 💜 and creativity.</p>
      </footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
