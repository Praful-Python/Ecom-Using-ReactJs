import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
//import logo from "../images/logo.png"
import Superman from "../components/Reusable/Superman"
import { graphql } from "gatsby"
import Infoblog from "../components/Reusable/Infoblog"
import Itemlist from "../components/Cart/Itemname"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Superman
      img={data.img.childImageSharp.fluid}
      title="SuperMan Class Image"
      subtitle="SuperSubman cass image"
      superClass="super-background"
    />
    <Itemlist item={data.mypypraecomreact}/>
    <Infoblog heading="InfoBlog of Praful Rathod" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bgimage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mypypraecomreact:allContentfulItemname{
      edges {
        node {
          id
          tite
          price
          name
          image {
            fixed(width:200, height:200){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
