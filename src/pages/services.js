import React from "react"
import { graphql } from 'gatsby'
import Herosection from '../components/Reusable/Herosection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import Service from '../components/Service/Service'


import Layout from "../components/layout"
import SEO from "../components/seo"
const ServicesPage = ({data}) => (
  <Layout>    
  <SEO title = "Home" />

  <Herosection 
  img = {data.img.childImageSharp.fluid}
  title = "About LearnCodeOnline"
  subtitle =  ""
  heroclass = "about-background"
  />
  
  <DualInfoblock heading = "Message From CEO" />
  <Infoblock heading = "About Vision" />
  <Service />
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

export default ServicesPage
