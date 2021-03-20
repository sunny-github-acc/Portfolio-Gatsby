import React, { useEffect, useState } from "react"
import HeroElement from "./HeroElement"

const HeroElements = ({ texts }) => {
  const [classValue, setClassValue] = useState("bubble hide")

  const [newTexts, setNewTexts] = useState([])
  const [oldTexts, setOldTexts] = useState()

  useEffect(() => {
    const handleTexts = () => {
      if (!texts) return

      let newT = []
      let oldT = []

      texts.map((text, index) => {
        if (texts.length - 1 === index) {
          console.log(
            "🚀 ~ file: HeroElements.js ~ line 19 ~ texts.map ~ texts",
            text[0][0]
          )
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
                <h3 key={"o" + i} className={"bubble " + t["side"]}>
                  {t["text"]}
                </h3>
              )
            })
          } else {
            return (
              <h3 key={"old" + index} className={"bubble " + text["side"]}>
                {text["text"]}
              </h3>
            )
          }
          return null
        })}
      {newTexts &&
        newTexts.map((text, index) => {
          if (newTexts.length - 1 === index) {
            return (
              <HeroElement
                key={"n" + index}
                text={text["text"]}
                index={index}
                classValue={classValue + text["side"]}
              />
            )
          } else {
            return (
              <HeroElement
                classValue={"bubble " + text["side"]}
                key={"new" + index}
                text={text["text"]}
                index={index}
              />
            )
          }
        })}
    </>
  )
}
export default HeroElements
