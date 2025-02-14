import { useEffect, useRef } from "react";
import { ExternalLink, Code, Database, Brain, Mail } from "lucide-react";
import styles from "./PortfolioPage.module.css";
import profile from "../assets/profile.jpg";
import ProjectDetails from "./ProjectDetails";

const PortfolioPage = () => {
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className={styles.container}>
      <section ref={addToRefs} className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroContent}>
          <div className={styles.profileSection}>
            <div className={styles.profileImageContainer}>
              <img
                src={profile}
                alt="Castle Ford"
                className={styles.profileImage}
              />
            </div>
            <h1 className={styles.title}>
              <span className={styles.name}>Castle Ford</span>
              <span className={styles.gradientText}>Full-Stack Developer</span>
            </h1>
          </div>
          <div className={styles.bioSection}>
            <p className={styles.bio}>
              Welcome to my website! I’m a recent Computer Science graduate
              (Summa Cum Laude) from UTC with a minor in Entrepreneurship. I’m
              passionate about AI, software development, and
              problem-solving—always looking for ways to build smart, impactful
              solutions that drive innovation and efficiency. Excited to share
              my work and ideas with you!
            </p>
            <a href="mailto:cstlford@gmail.com">
              <div className={styles.contactButton}>
                <Mail className={styles.contactIcon} />
                Get in Touch
              </div>
            </a>
          </div>
          <div className={styles.techStack}>
            <Code className={styles.icon} />
            <Database className={styles.icon} />
            <Brain className={styles.icon} />
          </div>
        </div>
      </section>
      <section
        ref={addToRefs}
        className={`${styles.section} ${styles.project}`}
      >
        <h2 className={styles.sectionTitle}>Featured Project</h2>
        <div className={styles.projectCard}>
          <div className={styles.projectHeader}>
            <h3>ShapeShift</h3>

            <a
              href="https://shapeshiftness.netlify.app"
              className={styles.iconLink}
              target="_blank"
            >
              <ExternalLink />
            </a>
          </div>
          <p className={styles.projectDescription}>
            A personalized health platform that leverages AI to create custom
            nutrition and exercise plans. Built with modern technologies and
            focused on delivering tailored wellness solutions.
          </p>
          <div className={styles.techTags}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Django</span>
            <span>MySQL</span>
            <span>OpenAI</span>
          </div>
          <div className={styles.projectDetails}>
            <ProjectDetails />
          </div>
        </div>
      </section>

      <section ref={addToRefs} className={`${styles.section} ${styles.skills}`}>
        <h2 className={styles.sectionTitle}>Technical Expertise</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <Code size={24} />
            <h3>Frontend</h3>
            <ul>
              <li>React + TypeScript</li>
              <li>Redux State Management</li>
              <li>Modern CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className={styles.skillCard}>
            <Database size={24} />
            <h3>Backend</h3>
            <ul>
              <li>Django</li>
              <li>Node.js</li>
              <li>RESTful APIs</li>
              <li>MySQL</li>
              <li>System Architecture</li>
            </ul>
          </div>
          <div className={styles.skillCard}>
            <Brain size={24} />
            <h3>AI Integration</h3>
            <ul>
              <li>OpenAI API</li>
              <li>Prompt Engineering</li>
              <li>LLM Integration</li>
              <li>AI-Powered Features</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
