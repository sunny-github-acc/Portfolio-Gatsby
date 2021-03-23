import React, { useEffect, useRef } from "react"

const HeroInput = ({ handleSubmit, handleInput, visitorsInput }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [inputRef])

  return (
    <form onSubmit={handleSubmit}>
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
