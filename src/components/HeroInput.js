import React, { useEffect, useRef } from "react"

const HeroInput = ({ handleSubmit, handleInput, visitorsInput }) => {
  const inputRef = useRef(null)

  const thisHandleSubmit = e => {
    handleSubmit(e)
    focus()
    setTimeout(() => {
      setHeight()
    }, 200)
  }

  const handleChange = e => {
    handleInput(e)
    setHeight()
  }

  const setHeight = () => {
    inputRef.current.style.height = ""
    inputRef.current.style.height = inputRef.current.scrollHeight + "px"
  }
  const focus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    focus()
  }, [])

  return (
    <form onSubmit={thisHandleSubmit} className="pixelated form">
      <textarea
        className="text"
        name="text"
        value={visitorsInput}
        onChange={handleChange}
        ref={inputRef}
        onKeyPress={e => (e.key === "Enter" ? thisHandleSubmit(e) : null)}
      />
      <div className="submit-container">
        <button type="submit" className="submit" name="Submit">
          <i className="far fa-play-circle"></i>
        </button>
      </div>
    </form>
  )
}
export default HeroInput
