import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Julia Cameron</h1>
        <p className="hero-subtitle">
          I design accessible and creative digital experiences, blending thoughtful user
          experience, clean front-end implementation, and practical problem-solving to help
          people and businesses grow online.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="primary-btn">View Projects</Link>
          <Link to="/contact" className="secondary-btn">Contact Me</Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
