import React from "react";
import "./App.css";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "SignalFlow — DSP Visualizer",
      description:
        "Interactive visualizer for filters and signals with real-time parameter controls.",
      tags: ["React", "WebAudio", "Canvas"],
    },
    {
      id: 2,
      title: "MazeMapper — Procedural Dungeon Tool",
      description:
        "A fast editor + generator for grid-based dungeon layouts and path analytics.",
      tags: ["TypeScript", "Algorithms", "SVG"],
    },
    {
      id: 3,
      title: "MarketLens — Sentiment Dashboard",
      description:
        "Aggregation and time-series sentiment visualization for community forums.",
      tags: ["Python", "D3", "LSTM"],
    },
  ];

  const experience = [
    {
      role: "Software Engineer Intern",
      company: "ABC Corp",
      period: "June 2024 - August 2024",
      description: [
        "Developed a React-based dashboard for internal analytics.",
        "Implemented REST APIs using Node.js and Express.",
        "Optimized database queries, reducing load times by 30%.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "January 2023 - Present",
      description: [
        "Designed and built responsive websites for small businesses.",
        "Integrated third-party services like Stripe and Firebase.",
        "Collaborated with clients to deliver tailored web solutions.",
      ],
    },
    {
      role: "Research Assistant",
      company: "University Lab",
      period: "2022 - 2023",
      description: [
        "Worked on signal processing algorithms for embedded systems.",
        "Built visualization tools for lab data.",
      ],
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "C/C++",
    "WebAudio",
    "Canvas",
    "D3.js",
    "LSTM",
    "SQL",
    "Git",
    "Figma",
    "Unity",
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-circle">JJ</div>
          <div>
            <h1>Joshua Ji Hin Chua</h1>
            <p> Electrical Engineer • Computer Science • AI Engineer </p>
          </div>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="cta-button">Get in Touch</a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <p className="intro-text">Hello — I build things</p>
          <h2>
            Software engineer & game systems designer — crafting tools and playful systems.
          </h2>
          <p>
            I focus on clear systems, reliable engineering, and delightful UX. 
            I enjoy signal processing, procedural content, and building editor workflows 
            that make complex tasks feel simple.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-outline">See Projects</a>
            <a href="#writing" className="btn-dark">Read Writing</a>
          </div>
        </div>

        <div className="hero-card">
          <h3>Featured Project</h3>
          <p>SignalFlow — DSP Visualizer</p>
          <small>Built with WebAudio + Canvas</small>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <h3>About Me</h3>
        <p>
          I'm an engineer who likes thinking in systems: from finite-state machines in hardware 
          to emergent behavior in game ecosystems. I prototype quickly and prefer readable, 
          well-tested code.
        </p>
        <div className="about-cards">
          <div className="card">
            <span>Experience</span>
            <strong>Embedded & Systems</strong>
          </div>
          <div className="card">
            <span>Education</span>
            <strong>ECE / Computer Systems</strong>
          </div>
          <div className="card">
            <span>Currently</span>
            <strong>Building game systems & tools</strong>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <h3>Selected Projects</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="links">
                <a href="#">Live</a>
                <a href="#">Source</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Scroller */}
      <section className="section skills">
        <h3>Languages & Tools</h3>
        <div className="skills-scroller">
          <div className="skills-track">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">{skill}</div>
            ))}
            {skills.map((skill, index) => (
              <div key={index + skills.length} className="skill-card">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <h3>Experience</h3>
        <div className="experience-scroll">
          {experience.map((job, index) => (
            <div key={index} className="experience-card">
              <h4>{job.role}</h4>
              <p className="company">{job.company}</p>
              <p className="period">{job.period}</p>
              <ul>
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h3>Contact</h3>
        <p>Open to collaborations or discussions about systems, games, and DSP.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Built with ❤️ — Designed to be clean and original.</p>
      </footer>
    </div>
  );
}
