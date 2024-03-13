import * as React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/main.css"

const Layout = ({ children }) => {  
  return (
    <>
      <Header siteTitle="Happy Sound 54"/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
