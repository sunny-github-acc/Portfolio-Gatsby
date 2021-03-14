import React from "react"

const Contact = () => {
  return (
    <section className="contacts">
      <h1>Get in touch</h1>
      <form className="form">
        <label className="name">
          <input type="text" name="name" placeholder="Your name.." required />
        </label>
        <label className="email">
          <input type="text" name="email" placeholder="Your email.." required />
        </label>
        <label className="subject">
          <input
            type="text"
            name="subject"
            placeholder="Your subject.."
            required
          />
        </label>
        <label className="message">
          <input
            type="textarea"
            name="message"
            placeholder="Your message.."
            required
          />
        </label>
        <input className="submit" type="submit" value="Send" />
      </form>
    </section>
  )
}
export default Contact
