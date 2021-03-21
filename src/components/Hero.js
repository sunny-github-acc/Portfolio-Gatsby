import React, { useEffect, useState } from "react"
import HeroElements from "./HeroElements"
import HeroInput from "./HeroInput"
import { handleBtnContact, handleBtnProjects } from "./Navbar"

const Hero = () => {
  const [displayedTexts, setDisplayedTexts] = useState()
  const [visitorsText, setVisitorsText] = useState({ 0: ":)", name: ":)" })
  const [visitorsInfo, setVisitorsInfo] = useState([
    "name",
    "email",
    "subject",
    "message",
  ])
  const [input, setInput] = useState()
  const [awaitingTexts, setAwaitingTexts] = useState([
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
        text: <span key="why44">{visitorsText["name"]}</span>,
        side: " ",
      },
      {
        text: <span key="why44">{visitorsText[0]}</span>,
        side: " ",
      },
      {
        text: (
          <span key="why4">
            I enjoy{" "}
            <button onClick={handleBtnProjects}>
              <strong>developing software </strong>
            </button>
            using latest technologies, putting the most emphasis in building
            websites.
          </span>
        ),
        side: " -right ",
      },
    ],
    [
      {
        text: <span key="why44">:)</span>,
        side: " ",
      },
      {
        text: <span key="why5">Head this way for more details.</span>,
        side: " -right ",
      },
      {
        text: <span key="why44">:)</span>,
        side: " ",
      },
    ],
    [
      {
        text: (
          <span key="why6">
            Why don't you <button onClick={handleBtnContact}>tell me</button>{" "}
            more about yourself?
          </span>
        ),
        side: " -right ",
      },
    ],
  ])

  const handleSubmit = e => {
    e.preventDefault()
    setVisitorsInfo(prev => prev.slice(1))
    console.log(visitorsText)
    console.log(visitorsInfo)
  }

  const handleInput = e => {
    setVisitorsText(prev => ({ ...prev, [visitorsInfo[0]]: e.target.value }))
    console.log(visitorsText)
  }

  const handleClick = () => {
    if (awaitingTexts.length) {
      console.log(visitorsText)
      setDisplayedTexts(prev =>
        prev ? [...prev, awaitingTexts[0]] : [awaitingTexts[0]]
      )
      setAwaitingTexts(prev => prev.slice(1))
    }
  }

  useEffect(() => {
    console.log(visitorsText)
  }, [visitorsText])

  if (!displayedTexts) handleClick()

  return (
    <section className="hero ">
      <div className="small-talk">
        <HeroElements texts={displayedTexts} />
        <HeroInput handleSubmit={handleSubmit} handleInput={handleInput} />
        <button onClick={handleClick}>:)</button>
      </div>
    </section>
  )
}
export default Hero
