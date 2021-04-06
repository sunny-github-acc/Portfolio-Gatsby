import React, { useRef } from "react"
import Head from "./Head"
import Footer from "./Footer"
import "../styles/global.css"

export default function Layout({ children }) {
  const main = useRef(null)

  setTimeout(() => {
    main.current?.classList.remove("hide")
  }, 300)

  return (
    <div className="layout">
      <Head />
      <div ref={main} className="main hide">
        {children}
      </div>
      <Footer />
    </div>
  )
}
