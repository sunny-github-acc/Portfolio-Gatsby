import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import "../styles/home.css"

export default function Home() {
  const { pathname } = useLocation();
  return (
    <Layout>
      <div className={"container"}>
        <section className="hero">
          <div className="text">
            <h1>Hi! My name is Karolis Kaz.</h1>
            <h3>I enjoy developing software using latest technologies.</h3>
            <h4>You can check them out <Link to="/work">here</Link></h4>
          </div>
        </section>
        <section className="resume">
          Download Resume
        </section>
      </div>
    </Layout>
  )
}
