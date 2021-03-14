import React from "react"
import Head from "./Head"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head />
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  )
}
