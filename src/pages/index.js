import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Tag,
  ContainerLayout,
  ProjectPost,
  Category,
  Intro,
  // SubTitle,
  Title,
  BigTitle,
  Text,
  ProjectGrid,
} from "../components/common"
import About from "../components/about"
import { ChevronsDown } from "react-feather"
import colors from "../data/variables";

const ProjectIndex = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <>
      <Layout>
        <SEO title="Lacey C. Umamoto" />
        <ContainerLayout>
          <About />
        </ContainerLayout>
        <div style={{ color: colors.primary, margin: `3.5rem 0 3.5rem 0`, textAlign: "center"}}>
          <ChevronsDown className="align-middle" />
        </div>
        <Intro>
          <ContainerLayout>
            <BigTitle className="text-dark">Projects</BigTitle>
            <ContainerLayout className="wrapper">
              <ProjectGrid>
                {projects.map(({ node }) => {
                  const title = node.frontmatter.title
                  // const title = node.frontmatter.title || node.fields.slug
                  return (
                    <ProjectPost key={node.frontmatter.github}>
                      <div className="media">
                        <div className="image-wrapper">
                          <Link to={node.frontmatter.github}>
                            <Img
                              fluid={
                                node.frontmatter.image.childImageSharp.fluid
                              }
                              // title="work title"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="content">
                        <header>
                          <Category>{node.frontmatter.category}</Category>
                          <Title className="text-primary">
                            <Link
                              // className="text-primary"
                              className="text-primary lined-link"
                              style={{ boxShadow: `none` }}
                              to={node.frontmatter.github}
                            >
                              {title}
                            </Link>
                          </Title>
                        </header>
                        <Text
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                        />
                        <div>
                          {node.frontmatter.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                          ))}
                        </div>
                      </div>
                    </ProjectPost>
                  )
                })}
              </ProjectGrid>
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default ProjectIndex

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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

// query MyQuery {
//   site {
//     siteMetadata {
//       title
//     }
//   }
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(projects)/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
//     edges {
//       node {
//         frontmatter {
//           category
//           description
//           github
//           date
//           title
//           tags
//           responsibilities
//         }
//       }
//     }
//   }
// }
