function Skills() {
  const skills = [
    "C",
    "C++",
    "Java",
    "Python",
    "Django",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SQL",
    "MySQL",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills" className="skills section">

      <div className="section-title">
        <p>My Technical Skills</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;