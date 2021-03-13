import React from "react"
import Layout from "../components/Layout"
import "../styles/home.css"
import "@glidejs/glide/dist/css/glide.core.min.css"
import { Carousel } from "../components/Carousel"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <Layout>
      <div className={"container"}>
        <Carousel components={[<Hero />, <Projects />, <Contact />]} />
      </div>
    </Layout>
  )
}
