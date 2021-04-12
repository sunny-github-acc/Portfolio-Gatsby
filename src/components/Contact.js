import React, { useRef } from "react"
import { useForm, ValidationError } from "@formspree/react"

let submit

const Contact = ({ visitorsAnswers, handleName, handleEmail }) => {
  const [state, handleSubmit] = useForm("xzbybyjo")
  submit = useRef(null)
  const placeholders = {
    name: "Luke Skywalker",
    okay: "",
    subject: "Computers, AI, Cybernetics.",
    message: "A long time ago..",
    email: "luke@sky.com",
  }

  if (state.succeeded) {
    return <p className="success pixelated"> Your details has been saved!</p>
  }

  return (
    <section className="hero">
      <div className="form-container">
        <div className="scroll-container pixelated">
          <form onSubmit={handleSubmit} className="contact " method="POST">
            <div className="input-container">
              <h1 className="h1">Your name:</h1>
              <label htmlFor="name" className="label name">
                <input
                  id="name"
                  className="input"
                  type="text"
                  name="name"
                  defaultValue={visitorsAnswers.name}
                  placeholder={placeholders.name}
                  onChange={handleName}
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
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
                  defaultValue={visitorsAnswers.email}
                  placeholder={placeholders.email}
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
              <h1 className="h1">Interests:</h1>
              <label className="label subject" htmlFor="subject">
                <input
                  id="subject"
                  className="input"
                  type="text"
                  name="subject"
                  defaultValue={visitorsAnswers.subject}
                  placeholder={placeholders.subject}
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
              <h1 className="h1">Story:</h1>
              <label className="label message" htmlFor="message">
                <textarea
                  id="message"
                  className="textarea"
                  type="textarea"
                  name="message"
                  defaultValue={visitorsAnswers.message}
                  placeholder={placeholders.message}
                  rows="1"
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
              <input
                ref={submit}
                className="submit"
                type="submit"
                value="SAVE"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export { Contact, submit }
