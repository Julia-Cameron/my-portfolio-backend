function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Web Development',
      school: 'Centennial College',
      details: 'Focused on full-stack development, UX design, and application architecture.',
    },
    {
      degree: 'Diploma in Digital Media',
      school: 'Toronto School of Design',
      details: 'Built a foundation in visual communication, interface design, and digital storytelling.',
    },
  ];

  return (
    <section className="about-container">
      <h1 className="page-title">Education</h1>
      <div className="skills-grid">
        {education.map((item) => (
          <div className="skill-category" key={item.degree}>
            <button type="button" className="skill-badge">{item.school}</button>
            <ul className="skill-popover">
              <li className="skill-item">{item.degree}</li>
              <li className="skill-item">{item.details}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
