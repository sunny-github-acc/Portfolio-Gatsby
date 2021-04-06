import React, { useEffect, useState } from "react"
import HeroElement from "./HeroElement"

const HeroElements = ({ texts, submitDisabled, setSubmitDisabled }) => {
  const [newTexts, setNewTexts] = useState([])
  const [oldTexts, setOldTexts] = useState()
  const [classValue, setClassValue] = useState(" bubble hide ")

  useEffect(() => {
    const handleTexts = () => {
      if (!submitDisabled) return
      if (!texts) return
      let newT = []
      let oldT = []

      texts.map((text, index) => {
        if (texts.length - 1 === index) {
          for (let i = 0; i < text.length; i++) {
            let j = i === 0 ? 1 : i + 1

            setNewTexts([])

            setTimeout(() => {
              setClassValue("bubble hide ")
              newT.push(text[i])
              setNewTexts([...newT])
            }, 2000 * (j - 19))
            setTimeout(() => {
              if (text.length - 1 === i) setSubmitDisabled(false)
              setClassValue("bubble ")
            }, 2000 * (j - 19) + 250)
          }
        } else {
          text.map(t => oldT.push(t))
        }
        return null
      })
      setOldTexts([...oldT])
    }
    handleTexts()
  }, [texts, submitDisabled, setSubmitDisabled])

  return (
    <div className="hero-elements">
      {oldTexts &&
        oldTexts.map((text, index) => {
          if (text.length > 1) {
            text.map((t, i) => {
              return (
                <HeroElement
                  key={"o" + i}
                  text={t["text"]}
                  classValue={"bubble " + t["side"]}
                />
              )
            })
          } else {
            return (
              <HeroElement
                key={"old" + index}
                text={text["text"]}
                classValue={"bubble " + text["side"]}
              />
            )
          }
          return null
        })}
      {newTexts &&
        newTexts.map((text, index) => {
          return (
            <HeroElement
              key={"n" + index}
              text={text["text"]}
              classValue={
                text["side"] +
                (newTexts.length - 1 === index ? classValue : " bubble ")
              }
            />
          )
        })}
    </div>
  )
}
export default HeroElements
