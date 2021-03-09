import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="links">
          <Link to="/">HOME</Link>
          <Link to="/work">WORK</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </nav>
    </div>
  )
}
