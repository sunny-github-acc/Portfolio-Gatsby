import React, { useCallback, useEffect, useState } from "react"
import { handleBtnContact, handleBtnProjects } from "./Navbar"

const Hero = () => {
  const [state, setState] = useState()
  const [talk, setTalk] = useState([
    <h1 className="bubble -right">
      Hi! My name is <strong>Karolis Kaz</strong>.
    </h1>,
    <h3 className="bubble -right">
      I enjoy{" "}
      <button onClick={handleBtnProjects}>
        <strong>developing software </strong>
      </button>
      using latest technologies.
    </h3>,
    <h3 className="bubble -right">
      I'm based in Lithuania, putting the most emphasis in building websites.{" "}
    </h3>,
    <h3 className="bubble -right">
      Head <button>this way</button> for more details.
    </h3>,
    <h3 className="bubble -right">
      Why don't you <button onClick={handleBtnContact}>tell me</button> more
      about yourself?
    </h3>,
  ])

  const handleState = useCallback(() => {
    setState(talk[0])
    setTalk(talk.slice(1))
    console.log(talk)
  }, [])

  useEffect(() => {
    handleState()
  }, [])

  const handleClick = () => {}
  return (
    <section className="hero ">
      <div className="small-talk">{state}</div>
      <button onClick={handleClick}>:)</button>
    </section>
  )
}
export default Hero
