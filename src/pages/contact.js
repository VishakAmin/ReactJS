import React from "react"
import { graphql } from 'gatsby'
import Herosection from '../components/Reusable/Herosection'
import Infoblock from '../components/Reusable/Infoblock'
import Contact from '../components/Contact/contact'

import Layout from "../components/layout"
import SEO from "../components/seo"
const ContactPage = ({data}) => (
  <Layout>    
  <SEO title = "Home" />

  <Herosection 
  img = {data.img.childImageSharp.fluid}
  title = "Conatct US"
  subtitle =  ""
  heroclass = "about-background"
  />
  
  <Infoblock heading = "How Can we Help" />
    <Contact />
  </Layout>
)

export const query = graphql`
{ 
  img: file(relativePath: { eq:"contact.png" }) {
     childImageSharp {
       fluid{
        ...GatsbyImageSharpFluid_tracedSVG

       }
     }
   }
}
`

export default ContactPage
