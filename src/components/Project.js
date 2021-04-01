import React from "react"

const Project = ({ project }) => {
  return (
    <section className="project">
      <div className="image-container">
        <img src={project.image} alt={project.alt} className="image" />
        <div className="filter"></div>
      </div>
      <h1 className="title">{project.title}</h1>
      <div className="middle">
        <div className="info">
          <div className="text">
            <h4 className="content">{project.content}</h4>
          </div>
        </div>
      </div>
      <h4 className="tech">{project.tech}</h4>
      <div className="links">
        <i className="icon fab fa-github"></i>
        <i className="icon fas fa-link"></i>
      </div>
    </section>
  )
}
export default Project
