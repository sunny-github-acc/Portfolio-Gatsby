import React, { useState } from "react"
import { btnContact, btnProjects } from "./Carousel"
import { submit } from "./Contact"
import HeroElements from "./HeroElements"
import HeroInput from "./HeroInput"

const Hero = ({
  visitorsQuestions,
  visitorsAnswers,
  handleVisitorsQuestions,
  handleVisitorsAnswers,
}) => {
  const [displayedTexts, setDisplayedTexts] = useState([])
  const [visitorsInput, setVisitorsInput] = useState([])
  const [submitDisabled, setSubmitDisabled] = useState(false)

  const handleGoToContact = () => {
    btnContact.current.click()
  }

  const handleSaveForm = () => {
    btnContact.current.click()
    submit.current.click()
  }

  const handleGoToProjects = () => {
    btnProjects.current.click()
  }

  const scriptedTexts = [
    [
      { text: <span>Hello there!</span>, side: " -right " },
      {
        text: (
          <span>
            My name is Karolis Kaz and I'm an aspiring software developer.
          </span>
        ),
        side: " -right ",
      },
      { text: <span>What's your name?</span>, side: " -right " },
    ],
    [
      {
        text: <span>{visitorsAnswers.name}</span>,
        side: " ",
      },
      {
        text: (
          <span>
            It's nice to meet you {visitorsAnswers["name"]}! I hope you are
            doing great.
          </span>
        ),
        side: " -right ",
      },
      {
        text: <span>As you might have guessed it, this is my portfolio.</span>,
        side: " -right ",
      },
      {
        text: (
          <span>
            You may check my{" "}
            <button className="btn" onClick={handleGoToProjects}>
              {" "}
              projects{" "}
            </button>{" "}
            or we can have a little chat.
          </span>
        ),
        side: " -right ",
      },
      {
        text: <span> What do you say?</span>,
        side: " -right ",
      },
    ],
    [
      {
        text: <span>{visitorsAnswers["okay"]}</span>,
        side: " ",
      },
      {
        text: <span>Nice! Let me tell you a bit about myself then.</span>,
        side: " -right ",
      },
      {
        text: (
          <span>
            I enjoy developing software putting the most emphasis in building
            websites.
          </span>
        ),
        side: " -right ",
      },
      {
        text: (
          <span>
            My cup of tea are{" "}
            <span className="btn" style={{ cursor: "unset" }}>
              {" "}
              html, css, js, react and git.
            </span>
          </span>
        ),
        side: " -right ",
      },
      {
        text: (
          <span>
            Besides recently I started learning{" "}
            <span className="btn" style={{ cursor: "unset" }}>
              {" "}
              docker, sql, postgresql, nodejs and graphql.
            </span>
          </span>
        ),
        side: " -right ",
      },
      {
        text: <span>Is that something you are also interested in?</span>,
        side: " -right ",
      },
    ],
    [
      {
        text: <span>{visitorsAnswers["subject"]}</span>,
        side: " ",
      },
      {
        text: (
          <span>
            Noted! For me the most fascinating aspect about programming is
            problem solving. The most captivating - learning new tools to do
            that.
          </span>
        ),
        side: " -right ",
      },
      {
        text: (
          <span>
            I would describe my flow of work as being both focused and thorough.
            As of my personal traits, people tend to describe me as attentive
            and calm.
          </span>
        ),
        side: " -right ",
      },
      {
        text: <span>How about you? What's your story?</span>,
        side: " -right ",
      },
    ],
    [
      {
        text: <span>{visitorsAnswers["message"]}</span>,
        side: " ",
      },
      {
        text: (
          <span>Thanks for your answer. I appreciate talking to you. </span>
        ),
        side: " -right ",
      },
      {
        text: (
          <span>Would you like to give me your email to stay in touch?</span>
        ),
        side: " -right ",
      },
    ],
    [
      {
        text: <span>{visitorsAnswers["email"]}</span>,
        side: " ",
      },
      {
        text: (
          <span>
            Great. I stored your details on{" "}
            <button className="btn" onClick={handleGoToContact}>
              CONTACT
            </button>{" "}
            section if you'd like to edit them.
          </span>
        ),
        side: " -right ",
      },
      {
        text: (
          <span>
            If not, just answer to this message to save our conversation. See
            ya!
          </span>
        ),
        side: " -right ",
      },
    ],
  ]

  const handleSubmit = e => {
    if (e) e.preventDefault()
    if (!visitorsQuestions.length) return handleSaveForm()
    if (!visitorsInput) return
    if (submitDisabled) return

    if (displayedTexts.length !== scriptedTexts.length) {
      if (displayedTexts.length) handleVisitorsQuestions()
      setDisplayedTexts([...scriptedTexts.slice(0, displayedTexts.length + 1)])
    }

    setVisitorsInput("")
    setSubmitDisabled(true)
  }

  const handleInput = e => {
    setVisitorsInput(e.target.value)
    handleVisitorsAnswers(e.target.value)
  }

  if (!displayedTexts.length) handleSubmit()

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="scroll-container">
          <HeroElements
            texts={displayedTexts}
            submitDisabled={submitDisabled}
            setSubmitDisabled={setSubmitDisabled}
          />
        </div>
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
