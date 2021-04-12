import React from "react"

export default function Footer() {
  const handleMail = () => {}
  return (
    <div className="footer">
      <section className="icons">
        <a href="https://github.com/sunny-github-acc" target="_blank">
          <i className="icon fab fa-github fa-lg"></i>
        </a>
        <i
          className="icon far fa-envelope fa-lg"
          onClick={() => {
            navigator.clipboard.writeText("karolis.kazak@gmail.com")
          }}
        >
          <span className="hide pixelated">
            Click to copy karolis.kazak@gmail.com
          </span>
        </i>{" "}
        <a
          href="https://www.linkedin.com/in/karolis-kazakevicius-270a4014a/"
          target="_blank"
        >
          <i className="icon fab fa-linkedin fa-lg"></i>
        </a>
        <i className="icon far fa-file fa-lg"></i>
      </section>
      <section className="copyright"> 2021 Karolis Kaz </section>
    </div>
  )
}
