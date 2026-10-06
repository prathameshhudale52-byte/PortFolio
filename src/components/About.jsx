function About() {
  return (
    <section id="about" className="about section">

      <div className="section-title">
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h3>Hi, I'm Prathmesh 👋</h3>

          <p>
            I am an MCA student and aspiring software developer with a strong
            interest in building web applications and solving programming
            problems.
          </p>

          <p>
            I completed my BCA from Vivekanand College, Kolhapur and am
            currently pursuing my MCA at ALARD University, Pune.
          </p>

          <p>
            I enjoy working with Python, Django, Java, React, JavaScript and
            SQL, and I am continuously improving my development and
            problem-solving skills.
          </p>
        </div>

        <div className="education-cards">

          <div className="education-card">
            <span>Currently Pursuing</span>
            <h3>MCA</h3>
            <p>ALARD University, Pune</p>
            <strong>2025 – 2027</strong>
          </div>

          <div className="education-card">
            <span>Completed</span>
            <h3>BCA</h3>
            <p>Vivekanand College, Kolhapur</p>
            <strong>2022 – 2025</strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;