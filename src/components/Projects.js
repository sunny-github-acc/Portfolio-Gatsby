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
    <section className="projects pixelated">
      <h1 className="h1">Some of my projects:</h1>
      {projectArray && <Slider elements={projectArray} />}
      {isPending && (
        <div className="pending">We are looking for 'em projects..</div>
      )}
      {error && <div className="error">Oops.. Something went wrong..</div>}
    </section>
  )
}
export default Projects
