import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <h1 className="wave">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-links" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
