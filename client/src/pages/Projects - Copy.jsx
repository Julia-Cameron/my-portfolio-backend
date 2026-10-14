function Projects() {
  const projects = [
    {
      title: 'Campus Event Portal',
      description: 'A responsive event platform for students to browse and register for campus activities.',
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern portfolio site designed to showcase work, services, and creative projects.',
    },
    {
      title: 'E-Commerce Concept',
      description: 'A storefront prototype focused on accessibility, modern product browsing, and conversions.',
    },
  ];

  return (
    <section className="about-container">
      <h1 className="page-title">Projects</h1>
      <div className="skills-grid">
        {projects.map((project) => (
          <div className="skill-category" key={project.title}>
            <button type="button" className="skill-badge">{project.title}</button>
            <ul className="skill-popover">
              <li className="skill-item">{project.description}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
