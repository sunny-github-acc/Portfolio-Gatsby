import React, { useState } from "react"
import Layout from "../components/Layout"
import "../styles/home.css"
import "@glidejs/glide/dist/css/glide.core.min.css"
import { Carousel } from "../components/Carousel"
import Hero from "../components/Hero"
import { Contact } from "../components/Contact"
import Projects from "../components/Projects"

export default function Home() {
  const [visitorsQuestions, setVisitorsQuestions] = useState([
    "name",
    "okay",
    "subject",
    "message",
    "email",
  ])
  const [visitorsAnswers, setVisitorsAnswers] = useState({
    name: "",
    okay: "",
    subject: "",
    message: "",
    email: "",
  })

  const handleVisitorsAnswers = e => {
    console.log("e: ", e)
    if (!e.length) return
    console.log("e : ", e)
    console.log("e : ", visitorsAnswers)

    setVisitorsAnswers({
      ...visitorsAnswers,
      [visitorsQuestions[0]]: e,
    })
  }

  const handleName = e => {
    visitorsAnswers.name = e.target.value
    console.log(visitorsAnswers)
  }

  const handleEmail = e => {
    visitorsAnswers.email = e.target.value
  }

  const handleVisitorsQuestions = () => {
    setVisitorsQuestions(prev => prev.slice(1))
  }

  return (
    <Layout>
      <Carousel
        components={[
          <Hero
            handleVisitorsQuestions={handleVisitorsQuestions}
            handleVisitorsAnswers={handleVisitorsAnswers}
            visitorsQuestions={visitorsQuestions}
            visitorsAnswers={visitorsAnswers}
          />,
          <Projects />,
          <Contact
            visitorsAnswers={visitorsAnswers}
            handleName={handleName}
            handleEmail={handleEmail}
          />,
        ]}
      />
    </Layout>
  )
}
