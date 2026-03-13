import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-content">
          <p className="para about-intro">
            A B.Tech IT student who loves turning ideas into real, working web
            applications. I focus on building clean, responsive, and
            user-friendly digital experiences.
          </p>
          <div className="about-highlights">
            <div className="about-highlight-item">
              <span className="highlight-icon">⚡</span>
              <span>Passionate about modern web technologies</span>
            </div>
            <div className="about-highlight-item">
              <span className="highlight-icon">🎯</span>
              <span>Focused on clean, responsive UI/UX</span>
            </div>
            <div className="about-highlight-item">
              <span className="highlight-icon">🤖</span>
              <span>Leveraging AI tools for faster development</span>
            </div>
          </div>
          <div className="about-tech">
            <span className="about-tech-label">TECH I WORK WITH</span>
            <div className="about-tech-tags">
              {["React", "JavaScript", "TypeScript", "Firebase", "HTML/CSS", "Node.js", "Git", "AI Tools"].map(
                (tech) => (
                  <span className="about-tag" key={tech}>
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
