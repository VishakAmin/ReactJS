import React from "react"
import { graphql } from 'gatsby'
import Herosection from '../components/Reusable/Herosection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'

import Coursecart from "../components/Cart/Coursecart"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>    
  <SEO title = "Home" /> 


  <Herosection 
  img = {data.img.childImageSharp.fluid}
  title = "I write Code"
  subtitle =  "@VishakAmin"
  heroclass = "hero-background"
  />
  <Infoblock heading = "About Us" />
  <Coursecart  courses = {data.courses}  />
  <DualInfoblock heading = "Our Team" />
    </Layout>
)

export const query = graphql`
{ 
  img: file(relativePath: { eq: "heromain.png" }) {
     childImageSharp {
       fluid{
        ...GatsbyImageSharpFluid_tracedSVG

      
      }
     }
   }

   courses: allContentfulCourses{
    edges{
      node {
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG  
          }
        }
      }
    }
    }
}
`

export default IndexPage
