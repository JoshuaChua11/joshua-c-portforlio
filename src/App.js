import React from "react";
import "./App.css";
import { motion } from "framer-motion";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "AI Trained Sentimental Analysis Trading Tool",
      description:
        "Automated trading bot leveraging Reddit sentiment analysis to make trades on NASDAQ at 10-hour intervals using a custom PyTorch model.",
      tags: ["Python", "PyTorch", "IBKR TradeWorkshop"],
    },
    {
      id: 2,
      title: "ClimbLog API Assistant",
      description:
        "A universal logbook for climbers to track climbs from standardized boards with global sync, progression tracking, and personalized training recommendations.",
      tags: ["Python", "SQL"],
    },
    {
      id: 3,
      title: "Audio Recorder Device",
      description:
        "Custom-built embedded device with audio recording, playback, speed manipulation, and start/stop controls using STM32 hardware.",
      tags: ["C++", "Python", "Quartus", "MatLab"],
    },
  ];

  const experience = [
    {
      role: "Project Lead",
      company: "Monash AIM",
      period: "Feb 2025 – Sep 2025",
      description: [
        "Led a team of 8 in developing a novel data distillation pipeline for chest X-ray datasets (~120,000 images).",
        "Leveraged BioViLT teacher models to generate synthetic datasets that were 95% smaller while retaining 90% of diagnostic accuracy.",
        "Optimized lightweight CNN models to achieve a 6.2x reduction in training time and 80% lower computational cost.",
        "Utilized PyTorch, HuggingFace Transformers, and distributed A100 GPU clusters for large-scale embedding extraction and training."
      ],
    },
    {
      role: "Software Intern",
      company: "MissionMed",
      period: "July 2024 – Sep 2024",
      description: [
        "Developed automated Discord and web scraper systems for real-time UCAT result monitoring, improving accuracy for applicant estimation.",
        "Explored AI image generation for visual aid questions and fine-tuned prompts for interview question generation."
      ],
    },
  ];

  const skills = [
    "C++",
    "C",
    "Python",
    "JavaScript",
    "MatLab",
    "PyTorch",
    "HuggingFace Transformers",
    "CUDA",
    "TensorBoard",
    "Google Cloud",
    "AWS S3",
    "Microsoft SQL Server",
    "GitHub",
    "Quartus",
    "SolidWorks",
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      {/* Page Fade-In */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="logo">
            <div className="logo-circle">JJ</div>
            <div>
              <h1>Joshua Ji Hin Chua</h1>
              <p>Electrical Engineer • Computer Science • AI Engineer</p>
            </div>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-links">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/JoshuaChua11"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/Joshua_Chua___Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Resume
            </motion.a>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          className="hero"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="hero-text">
            <p className="intro-text">Hello — I build things</p>
            <h2>
              Electrical & software engineer — building innovative and creative technical solutions
            </h2>
            <p>
              Undergraduate student at Monash University studying electrical engineering & computer
              science with a passion for designing & innovating impactful systems.
            </p>
            <div className="hero-buttons">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#projects"
                className="btn-outline"
              >
                See Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#experience"
                className="btn-dark"
              >
                See Experience
              </motion.a>
            </div>
          </div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Featured Project</h3>
            <p>Chest X-Ray Dataset Distillation</p>
            <small>Built with PyTorch, HuggingFace, and distributed GPU clusters</small>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="section about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3>About Me</h3>
          <p>
            I'm an engineer who likes thinking in systems: from finite-state machines in hardware
            to emergent behavior in AI ecosystems. I prototype quickly and prefer readable,
            well-tested code that scales across embedded systems, cloud computing, and AI workflows.
          </p>
          <div className="about-cards">
            <motion.div whileHover={{ scale: 1.05 }} className="card">
              <span>Experience</span>
              <strong>AI & Embedded Systems</strong>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="card">
              <span>Education</span>
              <strong>ECE / Computer Systems</strong>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="card">
              <span>Currently</span>
              <strong>Developing ML pipelines & tools</strong>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="section projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3>Selected Projects</h3>
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                whileHover={{ y: -5, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
              >
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="links">
                  <a href="#">Live</a>
                  <a href="#">Source</a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="section skills"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3>Languages & Tools</h3>
          <div className="skills-scroller">
            <div className="skills-track">
              {skills.concat(skills).map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="section experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3>Experience</h3>
          <div className="experience-scroll">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="experience-card"
                whileHover={{ scale: 1.02 }}
              >
                <h4>{job.role}</h4>
                <p className="company">{job.company}</p>
                <p className="period">{job.period}</p>
                <ul>
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.div
          id="contact"
          className="contact-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="contact-title">
            <span className="contact-icon">👤</span> Contact
          </h2>
          <p className="contact-text">
            Always eager to grow and improve as a student, developer, and collaborator.
            Feel free to reach out by email or connect with me on LinkedIn!
          </p>

          <div className="contact-email">
            <span className="email-icon">✉️</span>
            <a href="mailto:1joshuachua@gmail.com" className="email-link">
              1joshuachua@gmail.com
            </a>
          </div>

          <div className="contact-links">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:1joshuachua@gmail.com"
              className="contact-button"
            >
              Mail
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/JoshuaChua11"
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://linkedin.com/in/yourusername"
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="footer">
          <p>Built by Joshua Chua</p>
        </footer>
      </motion.div>
    </div>
  );
}
