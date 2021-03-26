import React, { useState } from "react"
import HeroElements from "./HeroElements"
import HeroInput from "./HeroInput"
// import { handleBtnContact, handleBtnProjects } from "./Navbar"

const Hero = () => {
  const [visitorsInput, setVisitorsInput] = useState([])
  const [visitorsAnswers, setVisitorsAnswers] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [visitorsQuestions, setVisitorsQuestions] = useState([
    "name",
    "email",
    "subject",
    "message",
  ])
  const [displayedTexts, setDisplayedTexts] = useState([])
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const scriptedTexts = [
    [
      { text: <span key="why1">Hello there!</span>, side: " -right " },
      {
        text: (
          <span key="why2">
            I'm <span className="strong">Karolis Kaz</span> and this is my
            portfolio.
          </span>
        ),
        side: " -right ",
      },
      { text: <span key="why3"> How may I call you?</span>, side: " -right " },
    ],
    [
      {
        text: <span key="why44">{visitorsAnswers["name"]}</span>,
        side: " ",
      },
      {
        text: (
          <span key="why4">
            I enjoy {/* <button onClick={handleBtnProjects}> */}
            <strong>developing software </strong>
            {/* </button> */}
            using latest technologies, putting the most emphasis in building
            websites.
          </span>
        ),
        side: " -right ",
      },
    ],
    [
      {
        text: <span key="why44">{visitorsAnswers["email"]}</span>,
        side: " ",
      },
      {
        text: <span key="why5">Head this way for more details.</span>,
        side: " -right ",
      },
    ],
    [
      {
        text: <span key="why44">{visitorsAnswers["subject"]}</span>,
        side: " ",
      },
      {
        text: (
          <span key="why6">
            {/* Why don't you <button onClick={handleBtnContact}>tell me</button>{" "} */}
            more about yourself?
          </span>
        ),
        side: " -right ",
      },
    ],
    [
      {
        text: <span key="why44">{visitorsAnswers["message"]}</span>,
        side: " ",
      },
    ],
  ]

  const handleSubmit = e => {
    if (e) e.preventDefault()
    if (!visitorsInput) return
    if (!visitorsQuestions.length) return
    if (submitDisabled) return

    if (displayedTexts.length !== scriptedTexts.length) {
      if (displayedTexts.length) setVisitorsQuestions(prev => prev.slice(1))
      setDisplayedTexts([...scriptedTexts.slice(0, displayedTexts.length + 1)])
    }

    setVisitorsInput("")
    setSubmitDisabled(true)
  }

  const handleInput = e => {
    setVisitorsInput(e.target.value)
    setVisitorsAnswers({
      ...visitorsAnswers,
      [visitorsQuestions[0]]: e.target.value,
    })
  }

  if (!displayedTexts.length) handleSubmit()
  return (
    <section className="hero">
      <div className="hero-container">
        <HeroElements
          texts={displayedTexts}
          submitDisabled={submitDisabled}
          setSubmitDisabled={setSubmitDisabled}
        />
      </div>
      <HeroInput
        visitorsInput={visitorsInput}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
    </section>
  )
}
export default Hero
