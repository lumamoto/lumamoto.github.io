import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

import About from "../components/about"
import Projects from "../components/projects"

const Index = ({ data }) => {
  return (
    <Layout>
      <div style={{ height: "100vh", display: "table" }}>
        <About />
      </div>
      <Projects data={data} />
    </Layout>
  )
}
export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      sort: { fields: [frontmatter___order], order: ASC } 
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            order
            category
            description
            github
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            responsibilities
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`
