/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from './Reusable/Footer'
import Navbar from './Reusable/Navbar'

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({children}) => (
  <div>
    <Navbar  />
    {children}
    <Footer />
  </div>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
