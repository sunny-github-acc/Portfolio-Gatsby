import React, { useEffect, useRef } from "react"
import Glide from "@glidejs/glide"

const sliderConfiguration = {
  perView: 1,
  startAt: 0,
  type: "carousel",
}

let btnHome, btnProjects, btnContact

function Carousel({ components }) {
  btnHome = useRef(null)
  btnProjects = useRef(null)
  btnContact = useRef(null)

  //  const home =  <button ref={btnHome} className="glide__bullet" data-glide-dir="=0">
  //   1
  // </button>
  // const projects = <button ref={btnProjects} className="glide__bullet" data-glide-dir="=1">
  //   2
  // </button>
  // const contact = <button ref={btnContact} className="glide__bullet" data-glide-dir="=2">
  //   2
  // </button>

  const navButtons = useRef(null)
  const menuBtn = useRef(null)
  const handleNavButtonsOn = () => {
    navButtons.current.classList.remove("hide")
    //menuBtn.current.classList.toggle("selected")
  }
  const handleNavButtonsOff = () => {
    navButtons.current.classList.add("hide")
    // menuBtn.current.classList.toggle("selected")
  }

  useEffect(() => {
    const slider = new Glide(".glide", sliderConfiguration)
    slider.mount()
  }, [])

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {components.map((comp, index) => (
            <li className=" carousel-slides" key={index}>
              {comp}
            </li>
          ))}
        </ul>
      </div>

      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          &lt;
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          &gt;
        </button>
      </div>

      <div
        ref={navButtons}
        className="glide__bullets nav desktop hide"
        data-glide-el="controls[nav]"
      >
        <button
          ref={btnHome}
          className="glide__bullet pixelated btn"
          data-glide-dir="=0"
          onClick={handleNavButtonsOff}
        >
          <span className="text">HOME</span>
        </button>
        <button
          ref={btnProjects}
          className="glide__bullet pixelated btn"
          data-glide-dir="=1"
          onClick={handleNavButtonsOff}
        >
          <span className="text">PROJECTS</span>
        </button>
        <button
          ref={btnContact}
          className="glide__bullet pixelated btn"
          data-glide-dir="=2"
          onClick={handleNavButtonsOff}
        >
          <span className="text">CONTACT</span>
        </button>
      </div>
      <div className="nav mobile">
        <button
          ref={menuBtn}
          className="btn pixelated"
          onClick={handleNavButtonsOn}
        >
          <span className="text">MENU</span>
        </button>
      </div>
    </div>
  )
}

export { Carousel, btnHome, btnProjects, btnContact }
