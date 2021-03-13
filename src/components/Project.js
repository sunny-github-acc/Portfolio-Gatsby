import React from "react"
import GithubLogo from "../../static/images/github.png"
import Link from "../../static/images/link.png"

const Project = ({ project }) => {
  return (
    <section className="projects">
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
          <img style={{ height: "50px" }} src={GithubLogo} alt="GithubLogo" />
          <img style={{ height: "50px" }} src={Link} alt="github logo" />
        </div>
      </div>
    </section>
  )
}
export default Project
