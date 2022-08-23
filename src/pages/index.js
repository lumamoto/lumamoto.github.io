import React from "react";
import { graphql } from "gatsby";
import { ChevronsDown } from "react-feather";

import Layout from "../components/layout";
import About from "../components/about";
import Projects from "../components/projects";
import colors from "../data/variables";

const Index = ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          height: "100vh",
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <About />
        <div
          style={{
            color: colors.primary,
            margin: `5rem 0 0 0`,
            textAlign: "center",
          }}
        >
          <ChevronsDown
            className="align-middle"
          />
        </div>
      </div>
      <Projects data={data} />
    </Layout>
  );
};
export default Index;

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
                gatsbyImageData(layout: CONSTRAINED, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`;
