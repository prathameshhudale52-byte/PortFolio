
function Contact() {
  return (
    <section className="contact section">

      <div className="section-title">
        <p>Let's Connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-content">

          <h3>Let's work together</h3>

          <p>
            I'm open to software development internships, projects and
            opportunities where I can learn, contribute and grow as a
            developer.
          </p>

          <div className="contact-details">

            {/* Email */}

            <div className="contact-item">

              <span>📧</span>

              <div>
                <h4>Email</h4>

                <a href="mailto:prathameshhudale52@gmail.com">
                  prathameshhudale52@gmail.com
                </a>
              </div>

            </div>


            {/* Mobile */}

            <div className="contact-item">

              <span>📱</span>

              <div>
                <h4>Mobile</h4>

                <a href="tel:7447245094">
                  7447245094
                </a>
              </div>

            </div>


            {/* LinkedIn */}

            <div className="contact-item">

              <span>💼</span>

              <div>
                <h4>LinkedIn</h4>

                <a
                  href="https://www.linkedin.com/in/prathmesh-hudale-07190531a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>

            </div>


            {/* GitHub */}

            <div className="contact-item">

              <span>💻</span>

              <div>
                <h4>GitHub</h4>

                <a
                  href="https://github.com/prathameshhudale52-byte/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
