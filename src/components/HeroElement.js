import React, { useEffect, useState } from "react"

const HeroElement = ({ text }) => {
  const [classValue, setClassValue] = useState("bubble -right hide")
  useEffect(() => {
    setTimeout(() => {
      setClassValue("bubble -right")
    }, 1000)
  }, [])
  return <>{text && <h3 className={classValue}>{text}</h3>}</>
}
export default HeroElement
