
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        PH
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/skills" onClick={closeMenu}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="/education" onClick={closeMenu}>
            Education
          </Link>
        </li>

        <li>
          <Link to="/experience" onClick={closeMenu}>
            Experience
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;

