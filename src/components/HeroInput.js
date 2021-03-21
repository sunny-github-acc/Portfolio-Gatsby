import React from "react"

const HeroInput = ({ handleSubmit, handleInput }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={handleInput} />
      </label>
      <input type="submit" name="Submit" />
    </form>
  )
}
export default HeroInput
