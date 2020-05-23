import React from "react"
import { graphql } from 'gatsby'
import Herosection from '../components/Reusable/Herosection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import Teamphoto from '../components/About/Teamphoto'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({data}) => (
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
  <Teamphoto />
    </Layout>
)

export const query = graphql`
{ 
  img: file(relativePath: { eq:"about.png" }) {
     childImageSharp {
       fluid{
        ...GatsbyImageSharpFluid_tracedSVG

       }
     }
   }
}
`

export default AboutPage
