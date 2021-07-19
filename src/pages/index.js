import React from "react"
import Layout from "../components/layout"
// import SEO from "../components/seo"
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


const ProjectIndex = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <>
      <Layout>
        {/* <SEO title="Home" /> */}
        <About/>
        <Intro>
          <ContainerLayout>
            <BigTitle className="text-dark">Projects</BigTitle>
            <ContainerLayout className="wrapper">
              <ProjectGrid>
                {projects.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <ProjectPost key={node.fields.slug}>
                      <div className="media">
                        <div className="image-wrapper">
                          <Link to={node.frontmatter.github || node.fields.slug}>
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
                              to={node.frontmatter.github || node.fields.slug}
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
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            category
            description
            github
          }
        }
      }
    }
  }
`
