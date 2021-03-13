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
        <button onClick={handleBtnHome}>HOME</button>
        <button onClick={handleBtnProjects}>PROJECTS</button>
        <button onClick={handleBtnContact}>CONTACT</button>
      </nav>
    </div>
  )
}
