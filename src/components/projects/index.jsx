import React from "react"
// import { Title, Text } from "./style"

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
} from "../common"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <ContainerLayout>
      <BigTitle className="text-dark">Projects</BigTitle>
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
                      fluid={node.frontmatter.image.childImageSharp.fluid}
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
                    __html: node.frontmatter.description || node.excerpt,
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
  )
}

export default Projects