import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Calendar } from 'react-feather'

import {Intro, Title, ArticlePost, SmallText, ArticleBody} from '../../components/styled/posts'
import {ContainerLayout} from '../../components/common'


const portfolioProject = ({data, pageContext, location}) => {
  const project = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      {/* <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
      /> */}
      <Intro >
        <ContainerLayout>
          <div>
            <ArticlePost>
              <header>
                <Title>
                  {project.frontmatter.title}
                </Title>
                <SmallText> 
                  <Calendar className="align-middle text-primary" width="18" height="18" /> 
                  {/* <span className="align-middle"> date published : {project.frontmatter.date} </span> */}
                </SmallText>
              </header>
              
              <ArticleBody dangerouslySetInnerHTML={{ __html: project.html }} />
            </ArticlePost>
          </div>
        </ContainerLayout>
      </Intro>
    </Layout>
  )
}

export default portfolioProject;

export const data = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(projects)/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        frontmatter {
          category
          description
          github
          date
          title
          tags
          responsibilities
        }
      }
    }
  }
}
`

//   query portfolioProjectBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt
//       rawMarkdownBody
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description,
//         time,

//       }
//     }
//   }
// `