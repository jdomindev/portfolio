import '../styles/header.css'
import { NavLink, Link } from 'react-router-dom'


function Header() {
  return (
    <header>
      <nav className='navbar navbar-dark navbar-expand-lg'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to="/">
            <h1>JD</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <NavLink to="/about" className="navlink">
                About Me
              </NavLink>
              <NavLink to="/projects" className="navlink">
                Projects
              </NavLink>
              <Link to="https://drive.google.com/file/d/1URkiU2vqHl6UBqxUWpSQpxsIAiFqyd6W/view?usp=share_link" 
                target="_blank" rel="noreferrer"
                className="navlink">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
