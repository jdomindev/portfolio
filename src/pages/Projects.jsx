import "../styles/projects.css";
import "../App.css";
import { Link } from "react-router-dom";
import info from "../data/info";

function Projects() {
  return (
    <section className="container project-container">
      {info.projects.map((project) => {
        return (
          <div className="main-card" key={project.title}>
            <div className="title-container">
              <h2 className="project-header">{project.title}</h2>
              <h3 className="project-subheader">{project.type}</h3>
            </div>
            <div className="date-container">
              <h4 className="project-subheader font-light">{project.role}</h4>
              <h4 className="project-subheader font-light">{project.date}</h4>
            </div>
            <div className="image-flex">
              <img
                className="img-project"
                src={`/images/${project.image}`}
                alt={project.title}
              ></img>
              <div className="text-container">
                <div className="">
                  <p className="project-text font-light">
                    {project.description}
                  </p>
                  <div className="tag-container">
                    {project.tech.map((tech) => {
                      return (
                        <div className="tech-tag" key={tech}>
                          {tech}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <Link
                className={
                  project.deployedLink ? "button" : "button disabled-link"
                }
                to={project.deployedLink}
                tabIndex={project.deployedLink ? null : -1}
                target="_blank"
                rel="noreferrer"
              >
                <span className="button-text">
                  {project.deployedLink ? "Visit" : "Coming Soon"}
                </span>{" "}
                <i className="fa-solid fa-up-right-from-square fa-fw"></i>
              </Link>
              <Link
                className={project.repoLink ? "button" : "button disabled-link"}
                to={project.repoLink}
                tabIndex={project.repoLink ? null : -1}
                target="_blank"
                rel="noreferrer"
              >
                <span className="button-text">Repo</span>{" "}
                <i className="fa-brands fa-github fa-fw"></i>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
