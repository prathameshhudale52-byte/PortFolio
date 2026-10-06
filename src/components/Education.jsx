
function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "ALARD University, Pune",
      duration: "2025 – 2027",
      status: "Currently Pursuing",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Vivekanand College, Kolhapur",
      duration: "2022 – 2025",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="education section">

      <div className="section-title">
        <p>My Academic Journey</p>
        <h2>Education</h2>
      </div>

      <div className="education-container">

        {education.map((item) => (
          <div className="education-card" key={item.degree}>

            <div className="education-icon">
              🎓
            </div>

            <div className="education-content">

              <span className="education-status">
                {item.status}
              </span>

              <h3>{item.degree}</h3>

              <p className="education-college">
                {item.college}
              </p>

              <p className="education-duration">
                {item.duration}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Education;
