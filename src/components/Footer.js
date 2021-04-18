import React from "react"

export default function Footer() {
  const handleCopyMail = () => {
    navigator.clipboard.writeText("karolis.kazak@gmail.com")
  }
  return (
    <div className="footer">
      <section className="icons">
        <a
          href="https://github.com/sunny-github-acc"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon fab fa-github fa-lg"></i>
        </a>
        <i
          className="icon far fa-envelope fa-lg"
          onClick={handleCopyMail}
          onKeyDown={handleCopyMail}
          role="button"
          tabIndex="0"
        >
          <div className="container">
            <div className="hide to-copy pixelated">
              Click on the envelope to copy my email
            </div>
          </div>
          <div className="container">
            <div className="hide copied pixelated">
              You just copied my email to your clipboard
            </div>
          </div>
        </i>{" "}
        <a
          href="https://www.linkedin.com/in/karolis-kazakevicius-270a4014a/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/1TudEb_jF17zQxBxbq687kNkZOUd3guxP/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon far fa-file fa-lg"></i>
        </a>
      </section>
      <section className="copyright"> 2021 Karolis Kaz </section>
    </div>
  )
}
