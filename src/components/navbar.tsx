import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          StudyHub
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar