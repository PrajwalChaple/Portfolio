import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br />education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Information Technology</h4>
                <h5>Currently Pursuing</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing B.Tech in Information Technology, building web
              applications and learning modern development tools. Focused on
              React, JavaScript, Firebase, and responsive web design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Projects</h4>
                <h5>Self-Learning & GitHub</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built multiple projects including LearnGrid (educational platform)
              and HireFilter (recruiter dashboard with AI). Regularly uploading
              coding projects and practice programs on GitHub.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning Foundations</h4>
                <h5>HTML, CSS, JavaScript</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started learning web development from scratch with HTML, CSS, and
              JavaScript. Built foundational projects and explored frontend
              development concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
