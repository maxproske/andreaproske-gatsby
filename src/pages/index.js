import React from "react"

import { graphql } from "gatsby"

const IndexPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{data.intro}</h2>
      <img src={data.image} width="600px" />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
            }
          }
        }
      }
    }
  }
`
