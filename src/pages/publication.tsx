import * as React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/_Common/Header'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/_Common/Footer'

const PublicationPage = ({data}:any) => {
  const publicationData = data.allMarkdownRemark.nodes;
  console.log(publicationData)
  return (
    <>
      <Header></Header>
      <main></main>
      <Footer></Footer>
    </>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/publication/"}}) {
    nodes {
      frontmatter {
        authors
        bibtex
        award
        venue
        video
        slide
        title
        pdf
        category
      }
    }
  }
}
`

export const Head = () => <title>Home Page</title>

export default PublicationPage