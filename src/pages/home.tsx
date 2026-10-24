import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">React + TypeScript</span>

        <h1>
          Learn smarter.
          <br />
          Build better.
        </h1>

        <p>
          Explore carefully organized learning resources
          and grow your development skills one step at a time.
        </p>

        <Link to="/resources" className="hero-btn">
          Explore Resources
        </Link>
      </div>
    </main>
  )
}

export default Home