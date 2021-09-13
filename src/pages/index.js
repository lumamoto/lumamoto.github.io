import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/about"
import Projects from "../components/projects"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Lacey C. Umamoto" />
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
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            category
            description
            github
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            responsibilities
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
