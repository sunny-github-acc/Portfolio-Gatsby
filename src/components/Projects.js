import React from "react"
import Slider from "../components/Slider"
import Project from "./Project"
import useFetch from "./useFetch"

const Projects = () => {
  const { error, isPending, data } = useFetch("data/projects.json")
  const options = {
    initial: 3,
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    mode: "free-snap",
    vertical: true,
    loop: true,
    duration: 500,
  }

  let projectArray

  if (data.projects) {
    projectArray = data.projects.map((item, index) => (
      <Project key={index} project={item} />
    ))
  }

  //  {projectArray && <Slider projects={projectArray} />}
  return (
    <section className="projects">
      {error && <div className="error">Oops.. Something went wrong..</div>}
      {isPending && (
        <div className="pending">We are looking for 'em projects..</div>
      )}
      {projectArray && (
        <Slider options={{ ...options }} elements={projectArray} />
      )}
    </section>
  )
}
export default Projects
