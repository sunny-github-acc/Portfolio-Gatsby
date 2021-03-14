import React from "react"
import GithubIcon from "../../static/images/github.png"
import ResumeIcon from "../../static/images/resume.png"
import GmailIcon from "../../static/images/gmail.png"
import LinkedInIcon from "../../static/images/linkedin.png"

export default function Footer() {
  return (
    <div className="footer">
      <section className="logos">
        <img
          style={{ height: "20px" }}
          src={GithubIcon}
          alt="github icon"
          className="icon"
        />
        <img
          style={{ height: "20px" }}
          src={GmailIcon}
          alt="gmail icon"
          className="icon"
        />
        <img
          style={{ height: "20px" }}
          src={LinkedInIcon}
          alt="linkedin icon"
          className="icon"
        />
        <img
          style={{ height: "20px" }}
          src={ResumeIcon}
          alt="resume icon"
          className="icon"
        />
      </section>
      <section className="copyright">&#169; &gt; 2021 Karolis Kaz &gt;</section>
    </div>
  )
}
