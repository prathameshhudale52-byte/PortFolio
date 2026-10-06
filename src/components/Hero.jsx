
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-greeting">
          HELLO, I'M
        </p>

        <h1>
          PRATHMESH HUDALE
        </h1>

        <h2>
          Aspiring Software Developer
        </h2>

        <p className="hero-stack">
          Python <span>•</span> Django <span>•</span> Java
          <span>•</span> React <span>•</span> SQL
        </p>

        <p className="hero-description">
          MCA student focused on building practical web applications
          and solving programming problems while continuously improving
          my development skills.
        </p>

        <div className="hero-buttons">

          <Link
            to="/projects"
            className="btn primary-btn"
          >
            View My Projects
          </Link>

          <Link
            to="/contact"
            className="btn secondary-btn"
          >
            Contact Me
          </Link>

        </div>

        <div className="hero-socials">

          <a
            href="https://github.com/prathameshhudale52-byte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <span>•</span>

          <a
            href="https://www.linkedin.com/in/prathmesh-hudale-07190531a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <span>•</span>

          <a href="mailto:prathameshhudale52@gmail.com">
            Email
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;

