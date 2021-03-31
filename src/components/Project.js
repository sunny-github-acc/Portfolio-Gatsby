import React from "react"

const Project = ({ project }) => {
  return (
    <section className="project">
      <div className="visuals">
        <div className="image-container">
          <img
            style={{ height: "50px" }}
            src={project.image}
            alt={project.alt}
            className="image"
          />
        </div>
        <div className="links">
          <i className="icon fab fa-github"></i>
          <i className="fas fa-link"></i>
        </div>
      </div>
      <div className="text">
        <h1>{project.title}</h1>
        <div className="content">{project.content}</div>
        <h4>{project.tech}</h4>
      </div>
    </section>
  )
}
export default Project
