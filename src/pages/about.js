import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Superman from "../components/Reusable/Superman"
import { graphql } from 'gatsby'
import Infoblog from "../components/Reusable/Infoblog"
import Teammember from "../components/About/teammember"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Superman 
    img = {data.img.childImageSharp.fluid}
    title = "SuperMan Class Image"
    subtitle ="SuperSubman cass image"
    superClass = "about-background"
    />
    <Teammember />
    <Infoblog
    heading = "InfoBlog of Praful Rathod"
    />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "bgimage.jpg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
