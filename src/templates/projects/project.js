import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { Calendar } from 'react-feather'

import {Intro, Title, ArticlePost, SmallText, ArticleBody} from '../../components/styled/posts'
import {ContainerLayout} from '../../components/common'


const portfolioProject = ({data, pageContext, location}) => {
  const project = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
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