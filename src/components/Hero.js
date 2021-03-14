import React from "react"
import { handleBtnContact, handleBtnProjects } from "./Navbar"

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        Hi! My name is <strong>Karolis Kaz</strong>.
      </h1>
      <h3>
        I enjoy{" "}
        <button onClick={handleBtnProjects}>
          <strong>developing software using latest technologies.</strong>
        </button>
      </h3>
      I'm based in Lithuania, putting the most emphasis in building websites.{" "}
      <button>Head this way for more details.</button>
      <button onClick={handleBtnContact}>Drop me a message</button>
    </section>
  )
}
export default Hero
