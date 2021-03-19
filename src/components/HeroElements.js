import React, { useEffect, useState } from "react"

const HeroElements = ({ texts }) => {
  const [classValue, setClassValue] = useState("bubble -right hide")
  const [stateTexts, setStateTexts] = useState([])
  let t

  const initiateTexts = texts => {
    let textsArray = texts[0]
    let textsIndex = texts[1]

    while (textsArray.length) {
      textsArray.pop()
    }
  }

  const initTexts = texts => {
    setTimeout(() => {
      texts = ["texts, texts"]
    }, 1000)
    return [texts]
  }

  const initStateTexts = text => {
    text.map(
      (t, index) => setStateTexts(prev => [...prev, t])
      // setTimeout(() => {
      // }, 1000 * (index + 1))
    )
  }

  useEffect(() => {
    // setTimeout(() => {
    //   setClassValue("bubble -right")
    // }, 1000)
  }, [])

  return (
    <>
      {texts &&
        texts.map((text, index) => {
          if (text.length > 1) {
            if (texts.length - 1 === index) {
              initStateTexts(text)
              return stateTexts.map((t, i) => (
                <h3
                  key={"t" + i}
                  className={text.length + 4 < i ? classValue : "bubble -right"}
                >
                  {t} :)
                </h3>
              ))
            } else {
              initiateTexts([text, index])
              return (
                <h3
                  key={"t" + index}
                  className={
                    text.length + 4 < index ? classValue : "bubble -right"
                  }
                >
                  {t}
                </h3>
              )
            }
          } else {
            return (
              <h3
                key={index}
                className={
                  texts.length - 1 === index
                    ? classValue
                    : "bubble -right" + texts.length + index
                }
              >
                {text}:))
              </h3>
            )
          }
        })}
    </>
  )
}
export default HeroElements
