import React from "react"

const HeroInput = ({ handleSubmit, handleInput, visitorsInput }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={visitorsInput}
          onChange={handleInput}
          autoFocus
        />
      </label>
      <input type="submit" name="Submit" />
    </form>
  )
}
export default HeroInput
