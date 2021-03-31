import React from "react"
import Slider from "../components/Slider"
import Project from "./Project"
import useFetch from "./useFetch"

const Projects = () => {
  const { error, isPending, data } = useFetch("data/projects.json")

  if (data.projects) {
    var projectArray = data.projects.map((item, index) => (
      <Project key={index} project={item} />
    ))
  }

  return (
    <section className="projects">
      {error && <div className="error">Oops.. Something went wrong..</div>}
      {isPending && (
        <div className="pending">We are looking for 'em projects..</div>
      )}
      {projectArray && <Slider elements={projectArray} />}
    </section>
  )
}
export default Projects
