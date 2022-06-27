import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Tag,
  ContainerLayout,
  ProjectPost,
  Category,
  Title,
  BigTitle,
  Text,
  ProjectGrid,
} from "../common";

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;

  return (
    <ContainerLayout>
      <BigTitle className="text-dark">Projects</BigTitle>
      <ProjectGrid>
        {projects.map(({ node }) => {
          const title = node.frontmatter.title;
          // const title = node.frontmatter.title || node.fields.slug
          return (
            <ProjectPost key={node.frontmatter.github}>
              <div className="media">
                <div className="image-wrapper">
                  <a href={node.frontmatter.github}>
                    {node.frontmatter.image && (
                      <GatsbyImage
                        image={
                          node.frontmatter.image.childImageSharp.gatsbyImageData
                        }
                      />
                    )}
                  </a>
                </div>
              </div>
              <div className="content">
                <header>
                  <Category>{node.frontmatter.category}</Category>
                  <Title className="text-primary">
                    <a
                      // className="text-primary"
                      className="text-primary lined-link"
                      style={{ boxShadow: `none` }}
                      href={node.frontmatter.github}
                    >
                      {title}
                    </a>
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
          );
        })}
      </ProjectGrid>
    </ContainerLayout>
  );
};

export default Projects;
