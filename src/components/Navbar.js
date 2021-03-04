import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </div>
    )
}