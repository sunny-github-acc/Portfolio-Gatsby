import React from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

export default function Slider({ projects }) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    initial: 3,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    mode: "free-snap",
    vertical: true,
    loop: true,
    duration: 500,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div style={{ height: "50px" }} ref={sliderRef} className="keen-slider">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={"keen-slider__slide number-slide1" + index}
            >
              {project}
            </div>
          )
        })}
      </div>

      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map(idx => {
            return (
              <button
                aria-label="Unknown"
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}
