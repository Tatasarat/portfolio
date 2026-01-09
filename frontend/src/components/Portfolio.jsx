import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Code2, Download, ChevronDown, ExternalLink, Award, Trophy, GraduationCap, BookOpen, Star, Briefcase, Rocket, Zap, Database, Cpu, Cloud } from 'lucide-react';
import { personalInfo, about, education, skills, projects, achievements, certifications, leadership, codingStats } from '../data/mockData';
import './Portfolio.css';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Detect active section
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      'graduation-cap': GraduationCap,
      'book-open': BookOpen,
      'award': Award,
      'trophy': Trophy,
      'star': Star
    };
    const IconComponent = icons[iconName] || Award;
    return <IconComponent size={24} />;
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav-bar" style={{ background: scrollY > 50 ? 'rgba(26, 28, 27, 0.95)' : 'transparent' }}>
        <div className="nav-content">
          <div className="nav-logo">TS</div>
          <div className="nav-links">
            {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="hero-overlay"></div>
          <div className="animated-grid"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
              TATA
              <br />
              SARAT
            </h1>
            <p className="hero-subtitle" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
              {personalInfo.tagline}
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                <Rocket size={20} />
                View Projects
              </button>
              <a href={personalInfo.resumeUrl} download className="btn-secondary">
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="hero-image-container" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <div className="image-frame">
              <img src={personalInfo.photo} alt="Tata Sarat" className="hero-image" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>

        {/* Creative Ribbons */}
        <div className="creative-ribbon" style={{ transform: `translateX(${scrollY * 0.3}px) rotate(7.95deg)` }}>
          <span>SOFTWARE ENGINEER • ML ENTHUSIAST • FULL-STACK DEVELOPER • </span>
          <span>SOFTWARE ENGINEER • ML ENTHUSIAST • FULL-STACK DEVELOPER • </span>
        </div>
        <div className="creative-ribbon-back" style={{ transform: `translateX(${-scrollY * 0.2}px) rotate(-5.22deg)` }}>
          <span>AI & COMPUTER VISION • CLOUD & CI/CD • DSA EXPERT • </span>
          <span>AI & COMPUTER VISION • CLOUD & CI/CD • DSA EXPERT • </span>
        </div>

        <button className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-summary">{about.summary}</p>
              <div className="about-highlights">
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <Zap size={20} className="highlight-icon" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="coding-stats">
              <h3>Coding Stats</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <Code2 size={32} />
                  <div className="stat-number">{codingStats.leetcode.problemsSolved}+</div>
                  <div className="stat-label">LeetCode Problems</div>
                </div>
                <div className="stat-card">
                  <Github size={32} />
                  <div className="stat-number">{codingStats.github.repositories}+</div>
                  <div className="stat-label">GitHub Repos</div>
                </div>
                <div className="stat-card">
                  <Trophy size={32} />
                  <div className="stat-number">{codingStats.github.contributions}+</div>
                  <div className="stat-label">Contributions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="section-container">
          <h2 className="section-title">EDUCATION</h2>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={edu.id} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="timeline-icon">{getIcon(edu.icon)}</div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <p className="duration">{edu.duration}</p>
                  <p className="score">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="category-icon"><Code2 size={32} /></div>
              <h3>Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="category-icon"><Cpu size={32} /></div>
              <h3>Frameworks</h3>
              <div className="skill-tags">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="category-icon"><Briefcase size={32} /></div>
              <h3>Libraries</h3>
              <div className="skill-tags">
                {skills.libraries.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="category-icon"><Database size={32} /></div>
              <h3>Databases</h3>
              <div className="skill-tags">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="category-icon"><Cloud size={32} /></div>
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="project-highlight">
                      <Star size={14} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section">
        <div className="section-container">
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className="achievement-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="achievement-icon">{getIcon(achievement.icon)}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <span className="achievement-year">{achievement.year}</span>
              </div>
            ))}
          </div>
          
          <div className="leadership-section">
            <h3>Leadership & Ownership</h3>
            <div className="leadership-list">
              {leadership.map((item, index) => (
                <div key={index} className="leadership-item">
                  <Briefcase size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications-section">
        <div className="section-container">
          <h2 className="section-title">CERTIFICATIONS</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={cert.id} className="certification-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <Award size={40} className="cert-icon" />
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                {cert.credentialUrl !== '#' && (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
                    View Credential <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">LET'S CONNECT</h2>
          <div className="contact-content">
            <p className="contact-intro">Interested in collaborating or have opportunities? Feel free to reach out!</p>
            <div className="contact-grid">
              <a href={`mailto:${personalInfo.email}`} className="contact-card">
                <Mail size={32} />
                <span>Email</span>
                <p>{personalInfo.email}</p>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="contact-card">
                <Phone size={32} />
                <span>Phone</span>
                <p>{personalInfo.phone}</p>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                <Github size={32} />
                <span>GitHub</span>
                <p>@tatasarat</p>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
                <Linkedin size={32} />
                <span>LinkedIn</span>
                <p>Tata Sarat</p>
              </a>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="contact-card">
                <Code2 size={32} />
                <span>LeetCode</span>
                <p>@tatasarat</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Tata Sarat. Built with React & passion for innovation.</p>
          <p>Ready for Campus Placements 2024-2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
