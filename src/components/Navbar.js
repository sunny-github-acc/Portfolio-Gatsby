import React from "react"
import { btnHome, btnProjects, btnContact } from "./Carousel"

export const handleBtnHome = () => {
  btnHome.current.click()
}
export const handleBtnProjects = () => {
  btnProjects.current.click()
}
export const handleBtnContact = () => {
  btnContact.current.click()
}
export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="btn-container">
          <button className="btn" onClick={handleBtnHome}>
            HOME
          </button>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={handleBtnProjects}>
            PROJECTS
          </button>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={handleBtnContact}>
            CONTACT
          </button>
        </div>
      </nav>
    </div>
  )
}
