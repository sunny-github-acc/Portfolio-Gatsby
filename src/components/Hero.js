import React, { useState } from "react"
import { btnContact, btnProjects } from "./Carousel"
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

  const handleGoToProjects = () => {
    btnProjects.current.click()
  }

  const scriptedTexts = [
    [
      { text: <span>Hello there! How are you doing?</span>, side: " -right " },
      {
        text: (
          <span>
            My name is Karolis Kaz and I'm an aspiring software developer.
          </span>
        ),
        side: " -right ",
      },
      { text: <span>How may I call you?</span>, side: " -right " },
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
            You might{" "}
            <button className="btn" onClick={handleGoToProjects}>
              check my projects here.
            </button>
          </span>
        ),
        side: " -right ",
      },
      {
        text: (
          <span>
            Alternatively, we can have a little chat for a while. What do you
            say?
          </span>
        ),
        side: " -right ",
      },
    ],
    [
      {
        text: <span>{visitorsAnswers["okay"]}</span>,
        side: " ",
      },
      {
        text: <span>Nice! So, as I said, my name is Karolis.</span>,
        side: " -right ",
      },
      {
        text: (
          <span>
            I enjoy
            <strong>
              {" "}
              developing software putting the most emphasis in building
              websites.
            </strong>
            My cup of tea are{" "}
            <span className="btn" style={{ cursor: "unset" }}>
              html, css, js, react and git.
            </span>
          </span>
        ),
        side: " -right ",
      },
      {
        text: <span>How about you, what are your field of interests?</span>,
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
        text: <span>How about you? What brings you here?</span>,
        side: " -right ",
      },
    ],
    [
      {
        text: <span>{visitorsAnswers["message"]}</span>,
        side: " ",
      },
      {
        text: <span>Awesome. It was nice talking to you. </span>,
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
              CONTACT section.
            </button>
          </span>
        ),
        side: " -right ",
      },
      {
        text: (
          <span>
            Just to be safe, go there and check if all the info you entered are
            correct. You can do that by answering this message. See ya!
          </span>
        ),
        side: " -right ",
      },
    ],
  ]

  const handleSubmit = e => {
    if (e) e.preventDefault()
    if (!visitorsQuestions.length) return handleGoToContact()
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
