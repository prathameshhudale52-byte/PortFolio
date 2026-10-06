
function Projects() {
  const projects = [
    {
      title: "FinTrack - Money Management System",
      description:
        "A personal money management web application that helps users track income and expenses through an organized dashboard. The application includes user authentication, transaction management, and visual expense tracking.",
      technologies: [
        "Python",
        "Django",
        "SQLite",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Chart.js",
      ],
      github: "https://github.com/prathameshhudale52-byte/Money",
    },

    {
      title: "Trip Management System",
      description:
        "A responsive frontend application for managing and organizing trip-related information using a modern React interface.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/prathameshhudale52-byte/",
    },

    {
      title: "Employee Management System",
      description:
        "A web-based employee management application designed to manage employee information and perform employee-related operations through an organized and user-friendly interface.",
      technologies: [
        "Python",
        "Django",
        "SQLite",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Chart.js",
      ],
      github: "https://github.com/prathameshhudale52-byte/",
    },
  ];

  return (
    <section id="projects" className="projects section">

      <div className="section-title">
        <p>My Recent Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;

