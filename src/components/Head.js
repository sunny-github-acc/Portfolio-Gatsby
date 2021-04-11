import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <div>
      <Helmet
        title="Karolis Kaz"
        defaultTitle="Karolis Kaz"
        titleTemplate="Karolis Kaz"
      >
        <html lang="en" />
        <script
          src="https://kit.fontawesome.com/fba5ef61b4.js"
          crossorigin="anonymous"
        ></script>

        <link rel="shortcut icon" type="image/x-icon" href="images/logo.png" />
        <meta name="description" content="Karolis Kaz" />
        <meta name="image" content="Karolis Kaz" />
      </Helmet>
    </div>
  )
}

export default Head
