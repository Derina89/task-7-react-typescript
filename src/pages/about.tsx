function About() {
  return (
    <main className="page-container">
      <section className="page-heading">
        <span>ABOUT STUDYHUB</span>
        <h1>Learn. Practice. Grow.</h1>
        <p>
          StudyHub is a simple learning resource platform
          designed to make it easier to discover useful
          development resources in one place.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h2>Our Goal</h2>
          <p>
            Help learners find useful development resources
            without spending hours searching for them.
          </p>
        </div>

        <div className="about-card">
          <h2>Built With</h2>
          <p>
            React, TypeScript, React Router, Express.js,
            REST APIs, HTML, and CSS.
          </p>
        </div>

        <div className="about-card">
          <h2>What You Can Explore</h2>
          <p>
            Frontend development, backend development,
            databases, APIs, and useful development tools.
          </p>
        </div>
      </section>
    </main>
  )
}

export default About