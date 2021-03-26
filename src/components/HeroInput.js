import React, { useEffect, useRef } from "react"

const HeroInput = ({ handleSubmit, handleInput, visitorsInput }) => {
  const inputRef = useRef(null)

  const thisHandleSubmit = e => {
    handleSubmit(e)
    focus()
  }

  const focus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    focus()
  }, [])

  return (
    <form onSubmit={thisHandleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={visitorsInput}
          onChange={handleInput}
          ref={inputRef}
        />
      </label>
      <input type="submit" name="Submit" />
    </form>
  )
}
export default HeroInput
