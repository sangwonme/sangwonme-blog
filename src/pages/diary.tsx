import * as React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/LayoutRelated/Header'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/LayoutRelated/Footer'

const DiaryPage = ({data}:any) => {
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
  allMarkdownRemark {
    totalCount
    nodes {
      frontmatter {
        date
        title
      }
    }
  }
}
`

export const Head = () => <title>Home Page</title>

export default DiaryPage