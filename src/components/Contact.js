import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const Contact = ({ visitorsAnswers, handleName, handleEmail }) => {
  const [state, handleSubmit] = useForm("xzbybyjo")

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <section className="hero">
      <form onSubmit={handleSubmit} className="contact pixelated" method="POST">
        <div className="input-container">
          <h1 className="h1">Your name:</h1>
          <label htmlFor="name" className="label name">
            <input
              id="name"
              className="input"
              type="text"
              name="name"
              placeholder={visitorsAnswers.name}
              onChange={handleName}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </label>
        </div>
        <div className="input-container">
          <h1 className="h1">Your email:</h1>
          <label className="label email" htmlFor="email">
            <input
              id="email"
              className="input"
              type="text"
              name="email"
              placeholder={visitorsAnswers.email}
              onChange={handleEmail}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>
        </div>
        <div className="input-container">
          <h1 className="h1">Field of interests:</h1>
          <label className="label subject" htmlFor="subject">
            <input
              id="subject"
              className="input"
              type="text"
              name="subject"
              placeholder={visitorsAnswers.subject}
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </label>
        </div>
        <div className="input-container">
          <h1 className="h1">Mission:</h1>
          <label className="label message" htmlFor="message">
            <textarea
              id="message"
              className="textarea"
              type="textarea"
              name="message"
              placeholder={visitorsAnswers.message}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>
        </div>
        <div className="input-container">
          {" "}
          YES PLS
          <input className="submit" type="submit" value="SAVE" />
        </div>
      </form>
    </section>
  )
}
export default Contact
