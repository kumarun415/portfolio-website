import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="section-heading">
        <span>06 / PROJECTS</span>

        <h2>
          My <em>Projects</em>
        </h2>

        <p>
          Some of the projects I have built while learning and practicing
          software development.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <div className="project-icon">
              {project.icon}
            </div>

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;