import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Repository from "../components/projects/github"
// import { graphql } from "gatsby"
import {
    RepoGrid, 
    RepoInfo, 
    Avatar
} from "../components/styled/repository"
import {SectionIntro, ContainerLayout} from "../components/common";
import CategoriesTags from '../components/CategoriesTags/categoriesTags';


const RepositoryPage = ({data}) => { 
  let avatarUrl = 'https://www.vets4pets.com/siteassets/species/dog/large-dog-on-walk-looking-over-hills.jpg?w=585&scale=down'
//   const {
//     name,
//     avatarUrl,
//     repositories,
//   } = data.githubData.data.viewer

  return (
    <Layout> 
      <SEO title="Projects" />
      <ContainerLayout>
        <SectionIntro>
          
          <CategoriesTags />

          <RepoInfo>
            <Avatar style={{ backgroundImage: `url(${avatarUrl})` }} />
            <h2>Project Name</h2>
          </RepoInfo>
          <RepoGrid>
              GRID
            {/* {repositories.nodes.map((repo, index) => <Repository key={index} repo={repo} />).reverse()} */}
          </RepoGrid>
        </SectionIntro>
      </ContainerLayout>
    </Layout>
  )
}
export default RepositoryPage