import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

const sliderConfiguration = {
  perView: 1,
  startAt: 0,
  type: "carousel",
}

let btnHome, btnProjects, btnContact

function Carousel({ components }) {
  btnHome = React.useRef(null)
  btnProjects = React.useRef(null)
  btnContact = React.useRef(null)

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
      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button ref={btnHome} className="glide__bullet" data-glide-dir="=0">
          1
        </button>
        <button ref={btnProjects} className="glide__bullet" data-glide-dir="=1">
          2
        </button>
        <button ref={btnContact} className="glide__bullet" data-glide-dir="=2">
          2
        </button>
      </div>
    </div>
  )
}

export { Carousel, btnHome, btnProjects, btnContact }
