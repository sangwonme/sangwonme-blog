import * as React from 'react'
import { graphql } from 'gatsby'
import SectionTitle from '../components/_Common/SectionTitle'
import Header from '../components/LayoutRelated/Header'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/LayoutRelated/Footer'
import PaperCard from '../components/PublicationPageRelated/PaperCard'
import DividerTitle from '../components/_Common/DividerTitle'
import Layout from '../components/LayoutRelated/Layout'

const PublicationPage = ({data}:any) => {
  const publicationData = data.allMarkdownRemark.nodes;
  // TODO : ADD sort by date


  return (
    <>
      <Layout title='Publications'>
        <DividerTitle>2023</DividerTitle>
        <PaperCard
          authors={publicationData[0]['frontmatter']['authors']}
          bibtex={publicationData[0]['frontmatter']['bibtex']}
          award={publicationData[0]['frontmatter']['award']}
          venue={publicationData[0]['frontmatter']['venue']}
          video={publicationData[0]['frontmatter']['video']}
          slide={publicationData[0]['frontmatter']['slide']}
          title={publicationData[0]['frontmatter']['title']}
          pdf={publicationData[0]['frontmatter']['pdf']}
          category={publicationData[0]['frontmatter']['category']}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/publication/"}}) {
    nodes {
      frontmatter {
        authors
        date
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