import React, { useEffect, useState } from "react"
import HeroElement from "./HeroElement"

const HeroElements = ({ texts, handleSubmitDisabled }) => {
  const [newTexts, setNewTexts] = useState([])
  const [oldTexts, setOldTexts] = useState()
  const [classValue, setClassValue] = useState(" bubble hide ")

  useEffect(() => {
    const handleTexts = () => {
      if (!texts) return
      let newT = []
      let oldT = []

      handleSubmitDisabled(true)
      texts.map((text, index) => {
        if (texts.length - 1 === index) {
          for (let i = 0; i < text.length; i++) {
            setNewTexts([])
            setTimeout(() => {
              setClassValue("bubble ")
            }, 1000 * i + 250)
            setTimeout(() => {
              setClassValue("bubble hide ")
              newT.push(text[i])
              setNewTexts([...newT])
            }, 1000 * i)
          }
        } else {
          text.map(t => oldT.push(t))
        }
        return null
      })

      setOldTexts([...oldT])
    }
    handleTexts()
  }, [texts])

  return (
    <>
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
    </>
  )
}
export default HeroElements
