import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI Trained Sentimental Analysis Trading Tool",
      brief: "Automated trading bot leveraging Reddit sentiment analysis with custom PyTorch model.",
      description: "Advanced trading system that combines natural language processing with algorithmic trading strategies.",
      details: [
        "Automated trading bot leveraging Reddit sentiment analysis to make trades on NASDAQ at 10-hour intervals using a custom PyTorch model",
        "Scraped and processed 50,000+ Reddit posts daily from financial subreddits using Reddit's API",
        "Integrated with Interactive Brokers API for real-time trade execution",
        "Backtested strategy on 2 years of historical data with 14% annual return"
      ],
      tags: ["Python", "PyTorch", "IBKR API", "Reddit API"],
      image: null
    },
    {
      id: 2,
      title: "ClimbLog API Assistant",
      description: "Universal logbook for climbers with global sync and AI-powered training recommendations.",
      brief: "Universal logbook for climbers to track climbs with progression tracking.",
      details: [
        "A universal logbook for climbers to track climbs from standardized boards with global sync, progression tracking, and personalized training recommendations",
        "Implemented progression analytics with percentile rankings and grade predictions",
        "Created recommendation engine suggesting climbs based on user history and weaknesses",
        "Integrated with MoonBoard, Kilter Board, and Tension Board APIs"
      ],
      tags: ["Python", "Flask"],
      image: null
    },
    {
      id: 3,
      title: "Audio Recorder Device",
      brief: "Custom embedded device with audio recording, playback, and speed manipulation.",
      description: "Professional-grade embedded audio system with real-time DSP capabilities.",
      details: [
        "Custom-built embedded device with audio recording, playback, speed manipulation, and start/stop controls using STM32 hardware",
        "Programmed STM32F4 microcontroller in C++ for real-time audio processing at 44.1kHz sample rate",
        "Implemented circular buffer architecture for continuous recording without data loss",
        "Developed time-stretching algorithm for playback speed control (0.5x - 2x) without pitch shifting",
        "Designed PCB schematic and layout in Quartus for audio codec integration",
        "Created MATLAB scripts for filter design and frequency response analysis"
      ],
      tags: ["C++", "STM32", "Quartus", "MatLab", "Python"],
      image: null
    },
    {
      id: 5,
      title: "Chest X-Ray Dataset Distillation",
      brief: "Novel data distillation pipeline reducing dataset size by 95% while retaining 90% accuracy.",
      description: "Research project optimizing medical image datasets for resource-constrained deployment.",
      details: [
        "Led a team of 8 in developing a novel data distillation pipeline for chest X-ray datasets (~120,000 images)",
        "Leveraged BioViLT teacher models to generate synthetic datasets that were 95% smaller while retaining 90% of diagnostic accuracy",
        "Optimized lightweight CNN models to achieve a 6.2x reduction in training time and 80% lower computational cost",
        "Utilized PyTorch, HuggingFace Transformers, and distributed A100 GPU clusters for large-scale embedding extraction and training",,
        "Implemented mixed-precision training and gradient checkpointing for memory efficiency"
      ],
      tags: ["Python", "PyTorch", "HuggingFace", "Medical AI", "Computer Vision", "Dataset Distillation"],
      image: null
    },
    {
      id: 6,
      title: "Interactive Portfolio Website",
      brief: "Modern portfolio website with dynamic project showcases and smooth animations.",
      description: "Responsive portfolio built with React and Framer Motion featuring modal-based project exploration.",
      details: [
        "Built responsive portfolio website using React and Framer Motion for smooth, engaging animations",
        "Implemented modal-based project detail system for enhanced user experience without page navigation",
        "Designed modern UI with gradient accents, glassmorphism effects, and dark theme optimized for readability",
        "Created auto-scrolling skills showcase with infinite loop animation",
        "Fully responsive design adapting seamlessly from mobile to desktop screens"
      ],
      tags: ["React", "JavaScript", "Framer Motion", "CSS3"],
      image: null
    }
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
    { 
      role: "IT Committee Member",
      company: "MJC",
      period: "April 2025 – July 2025",
      description: [
        "Developed and maintained the club website (monashjapaneseclub.com), ensuring up-to-date event information and registration.",
        "Provided technical support during cultural events, such as setting up AV equipment for workshops and presentations."
      ],
    },
  ];

  const skills = [
    "C++", "C", "Python", "JavaScript", "MatLab", "PyTorch",
    "HuggingFace Transformers", "CUDA", "TensorBoard", "Google Cloud",
    "AWS S3", "Microsoft SQL Server", "GitHub", "Quartus", "SolidWorks",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="container">
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
            <div className="logo-circle">JC</div>
            <div>
              <h1 className="logo-title">Joshua Chua</h1>
            </div>
          </div>

          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
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
              href={`${process.env.PUBLIC_URL}/Joshua_Chua___Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
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
          <div className="hero-content">
            <motion.h2 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Electrical & Software Engineer
            </motion.h2>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building innovative technical solutions at the intersection of AI, embedded systems, and full-stack development
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#projects"
                className="btn-primary"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:1joshuachua@gmail.com"
                className="btn-secondary"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="scroll-down"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a href="#about" className="scroll-link">
              <span className="arrow">↓</span>
            </a>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="section-title">About</h3>
          
          <div className="about-content">
            <p className="about-text">
              Hi!👋 I'm <strong className="highlight">Joshua Chua</strong>, an undergraduate studying Electrical Engineering and 
              Advanced Computer Science at Monash University. I'm passionate about building 
              innovative and impactful technical systems — whether it's optimizing AI models, 
              designing embedded hardware, or crafting scalable full-stack applications.
            </p>

            <p className="about-text">
              I thrive in collaborative environments where ideas can be shared and challenged. 
              From leading research projects to improving workflows in 
              engineering clubs, I enjoy tackling problems that merge creativity with technical depth.
            </p>

            <p className="about-text">
              My current interests lie at the intersection of <strong className="highlight">AI, robotics, and embedded systems</strong>, 
              where I aim to design intelligent solutions that enhance human capabilities and 
              simplify complex processes, in real-world scenarios.
            </p>

            <h4 className="subsection-title">Beyond Engineering</h4>
            <p className="about-text">
              Outside of engineering, I'm passionate about rock climbing 🧗 — it keeps me active, 
              focused, and constantly pushing my limits. I also enjoy creating music and playing guitar 
              which has been a relaxing and creative activity away from technical roles.
              
            </p>
          </div>

          <div className="stats-grid">
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card">
              <div className="stat-label">Focus Areas</div>
              <div className="stat-value">AI / ML / Embedded Systems</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card">
              <div className="stat-label">Education</div>
              <div className="stat-value">Electrical Eng / Computer Science</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card">
              <div className="stat-label">Current</div>
              <div className="stat-value">On exchange in Korea</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="skills-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="section-title">Skills & Technologies</h3>
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

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="section-title">Featured Projects</h3>
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <h4 className="project-title">{project.title}</h4>
                <p className="project-desc">{project.brief}</p>
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="view-details-btn">View Details →</button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Modal for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2>{selectedProject.title}</h2>
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                )}
                <p>{selectedProject.description}</p>
                <ul className="modal-details">
                  {selectedProject.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="close-button"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="section-title">Experience</h3>
          <div className="experience-grid">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="experience-card"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="exp-role">{job.role}</h4>
                <p className="exp-company">{job.company}</p>
                <p className="exp-period">{job.period}</p>
                <ul className="exp-list">
                  {job.description.map((item, i) => (
                    <li key={i} className="exp-item">{item}</li>
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
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-text">
            Always eager to collaborate on innovative projects. Feel free to reach out!
          </p>

          <div className="contact-email">
            <a href="mailto:1joshuachua@gmail.com" className="email-link">
              1joshuachua@gmail.com
            </a>
          </div>

          <div className="contact-links">
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
              href="https://www.linkedin.com/in/joshua-chua-aa2531320/"
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:1joshuachua@gmail.com"
              className="contact-button"
            >
              Email
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">© 2025 Joshua Chua</p>
        </footer>
      </motion.div>
    </div>
  );
}
