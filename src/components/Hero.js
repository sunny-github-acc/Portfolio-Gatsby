import React, { useEffect, useState } from "react"
import HeroElements from "./HeroElements"
import { handleBtnContact, handleBtnProjects } from "./Navbar"

const Hero = () => {
  const [texts, setTexts] = useState()
  const [allTexts, setAllTexts] = useState([
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
        text: <span key="why5">Head this way for more details.</span>,
        side: " -right ",
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

  const handleClick = () => {
    if (allTexts.length) {
      setTexts(prev => (prev ? [...prev, allTexts[0]] : [allTexts[0]]))
      setAllTexts(prev => prev.slice(1))
    }
  }

  useEffect(() => {
    handleClick()
  }, [])

  return (
    <section className="hero ">
      <div className="small-talk">
        <HeroElements texts={texts} />
        <button onClick={handleClick}>:)</button>
      </div>
    </section>
  )
}
export default Hero
