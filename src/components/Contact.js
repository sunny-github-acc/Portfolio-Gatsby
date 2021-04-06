import React from "react"

const Contact = ({ visitorsAnswers, handleName, handleEmail }) => {
  return (
    <section className="hero">
      <form className="contact pixelated">
        <div className="input-container">
          <h1 className="h1">Your name:</h1>
          <label className="label name">
            <input
              className="input"
              type="text"
              name="name"
              placeholder={visitorsAnswers.name}
              onChange={handleName}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <h1 className="h1">Your email:</h1>
          <label className="label email">
            <input
              className="input"
              type="text"
              name="email"
              placeholder={visitorsAnswers.email}
              onChange={handleEmail}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <h1 className="h1">Field of interests:</h1>
          <label className="label subject">
            <input
              className="input"
              type="text"
              name="subject"
              placeholder={visitorsAnswers.subject}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <h1 className="h1">Mission:</h1>
          <label className="label message">
            <textarea
              className="textarea"
              type="textarea"
              name="message"
              placeholder={visitorsAnswers.message}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <input className="submit" type="submit" value="SAVE" />
        </div>
      </form>
    </section>
  )
}
export default Contact
