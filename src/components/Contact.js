import React from "react"

const Contact = () => {
  return (
    <section className="hero">
      <form className="contact">
        <h1 className="bubble -right">How may I call you?</h1>
        <label className="name bubble">
          <input
            type="text"
            name="name"
            placeholder="I'm known as.."
            required
          />
        </label>
        <h1 className="bubble -right">How may I find you?</h1>
        <label className="email bubble">
          <input
            type="text"
            name="email"
            placeholder="My email address is.."
            required
          />
        </label>
        <h1 className="bubble -right">What are your interests?</h1>
        <label className="subject bubble">
          <input
            type="text"
            name="subject"
            placeholder="I have some work for you.."
            required
          />
        </label>
        <h1 className="bubble -right">Can you tell me more about it?</h1>
        <label className="message bubble">
          <input
            type="textarea"
            name="message"
            placeholder="Now listen carefully.."
            required
          />
        </label>
        <input className="submit" type="submit" value="Send" />
      </form>
    </section>
  )
}
export default Contact
