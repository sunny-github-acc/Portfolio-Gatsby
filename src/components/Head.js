import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation()

  return (
    <div>
      <Helmet
        title="Karolis Kaz"
        defaultTitle="Karolis Kaz"
        titleTemplate={`%s | Karolis Kaz`}
      >
        <html lang="en" />
        <script
          src="https://kit.fontawesome.com/fba5ef61b4.js"
          crossorigin="anonymous"
        ></script>

        <meta name="description" content="Karolis Kaz" />
        <meta name="image" content="Karolis Kaz" />
      </Helmet>
    </div>
  )
}

export default Head

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
}
