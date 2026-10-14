function Services() {
  return (
    <section className="about-container">
      <h1 className="page-title">Services</h1>
      <p className="skills-description">
        I help individuals and organizations turn ideas into polished digital experiences
        through web design, front-end development, and product strategy support.
      </p>
      <div className="skills-grid">
        <div className="skill-category">
          <button type="button" className="skill-badge">Web Design</button>
          <ul className="skill-popover">
            <li className="skill-item">Brand-aligned UI</li>
            <li className="skill-item">Responsive layouts</li>
            <li className="skill-item">User journeys</li>
          </ul>
        </div>
        <div className="skill-category">
          <button type="button" className="skill-badge">Development</button>
          <ul className="skill-popover">
            <li className="skill-item">React apps</li>
            <li className="skill-item">MVC builds</li>
            <li className="skill-item">Maintenance</li>
          </ul>
        </div>
        <div className="skill-category">
          <button type="button" className="skill-badge">Consulting</button>
          <ul className="skill-popover">
            <li className="skill-item">Strategy</li>
            <li className="skill-item">Reviews</li>
            <li className="skill-item">Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
