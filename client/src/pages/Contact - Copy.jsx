function Contact() {
  return (
    <section className="contact-container">
      <h1 className="page-title">Contact</h1>
      <p className="contact-subtitle">
        I am available for freelance work, collaboration, and creative technology projects.
      </p>

      <div className="direct-channels">
        <p>Email: julia.cameron@example.com</p>
        <p>Phone: (555) 123-4567</p>
        <p>Location: Toronto, Ontario</p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell me about your project" />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
