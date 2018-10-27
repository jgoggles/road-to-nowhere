import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li key={index}>
            <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blogTemplate" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            templateKey
          }
        }
      }
    }
  }
`;
