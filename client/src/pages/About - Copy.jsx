function About() {
  return (
    <section className="about-container">
      <h1 className="page-title">About Me</h1>
      <img
        className="about-image"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
        alt="Julia Cameron portrait"
      />
      <a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">
        View Resume
      </a>
      <p className="about-bio">
        I am a web developer and designer focused on building meaningful, user-friendly
        digital products. My work combines strategic thinking, a strong visual sense, and a
        practical understanding of how websites and applications support business goals.
      </p>
      <div className="skills-section">
        <h2>Core Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <button type="button" className="skill-badge">Frontend</button>
            <ul className="skill-popover">
              <li className="skill-item">React</li>
              <li className="skill-item">Vite</li>
              <li className="skill-item">HTML</li>
            </ul>
          </div>
          <div className="skill-category">
            <button type="button" className="skill-badge">Backend</button>
            <ul className="skill-popover">
              <li className="skill-item">Node.js</li>
              <li className="skill-item">Express</li>
              <li className="skill-item">MongoDB</li>
            </ul>
          </div>
          <div className="skill-category">
            <button type="button" className="skill-badge">Design</button>
            <ul className="skill-popover">
              <li className="skill-item">UI Design</li>
              <li className="skill-item">UX</li>
              <li className="skill-item">Wireframes</li>
            </ul>
          </div>
          <div className="skill-category">
            <button type="button" className="skill-badge">Tools</button>
            <ul className="skill-popover">
              <li className="skill-item">Git</li>
              <li className="skill-item">Figma</li>
              <li className="skill-item">VS Code</li>
            </ul>
          </div>
          <div className="skill-category">
            <button type="button" className="skill-badge">Method</button>
            <ul className="skill-popover">
              <li className="skill-item">Agile</li>
              <li className="skill-item">Testing</li>
              <li className="skill-item">Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
