import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import About from "../components/about"
import Projects from "../components/projects"

const Index = ({ data }) => {
  // const projectsRef = useRef(null);

  // const scrollEffect = ( targetRef ) =>{
  //   targetRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });
  // }

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
