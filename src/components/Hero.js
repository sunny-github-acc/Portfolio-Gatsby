import React, { useEffect, useState } from "react"
import HeroElements from "./HeroElements"
import { handleBtnContact, handleBtnProjects } from "./Navbar"

const Hero = () => {
  const [texts, setTexts] = useState()
  const [allTexts, setAllTexts] = useState([
    [
      <>Hello there!</>,
      <>
        I'm <span className="strong">Karolis Kaz</span> and this is my
        portfolio.
      </>,
      <> How may I call you?</>,
    ],
    [
      <>
        I enjoy{" "}
        <button onClick={handleBtnProjects}>
          <strong>developing software </strong>
        </button>
        using latest technologies, putting the most emphasis in building
        websites.
      </>,
    ],
    [<>Head this way for more details.</>],
    [
      <>
        Why don't you <button onClick={handleBtnContact}>tell me</button> more
        about yourself?
      </>,
    ],
  ])

  const handleClick = () => {
    if (allTexts.length) {
      setTexts(prev => (prev ? [...prev, allTexts[0]] : [allTexts[0]]))
      setAllTexts(prev => prev.shift())
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
