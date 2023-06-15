import * as React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/_Common/Header'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/_Common/Footer'

const PublicationPage = ({data}:any) => {
  console.log(data)
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
  markdownRemark(fileAbsolutePath: {regex: "/publication/"}) {
    frontmatter{
      title
      authors
      venue
      video
      pdf
      slide
      bibtex
    }
  }
}
`

export const Head = () => <title>Home Page</title>

export default PublicationPage