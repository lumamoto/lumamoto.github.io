import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ChevronsDown } from "react-feather"
import colors from "../data/variables"

import About from "../components/about"
import Projects from "../components/projects"

const Index = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Lacey C. Umamoto" />
        <About />
        <div
          style={{
            color: colors.primary,
            margin: `3.5rem 0 3.5rem 0`,
            textAlign: "center",
          }}
        >
          <ChevronsDown className="align-middle" />
        </div>
        <Projects data={data}/>
      </Layout>
    </>
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
