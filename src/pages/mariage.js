import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Mariage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page Mariage</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page mariage" />

export default Mariage
