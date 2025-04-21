import * as React from 'react'
import { graphql } from 'gatsby'
import PaperCard from '../components/PublicationPageRelated/PaperCard'
import Layout from '../components/LayoutRelated/Layout'
import SubSectionTitle from '../components/_Common/SubSectionTitle'

const PublicationPage = ({ data }: any) => {
  const publicationData = data.allMarkdownRemark.nodes;

  // 1. Sort publications by date (newest first)
  const sortedPublications = [...publicationData].sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });

  // 2. Group publications by year
  const publicationsByYear: { [year: string]: any[] } = {};

  sortedPublications.forEach((pub) => {
    const year = new Date(pub.frontmatter.date).getFullYear();
    if (!publicationsByYear[year]) {
      publicationsByYear[year] = [];
    }
    publicationsByYear[year].push(pub);
  });

  return (
    <>
      <Layout title='Publications'>
        {Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a)).map((year) => (
          <div key={year}>
            <SubSectionTitle>{year}</SubSectionTitle>
            {publicationsByYear[year].map((pub, idx) => (
              <PaperCard
                key={idx}
                authors={pub.frontmatter.authors}
                bibtex={pub.frontmatter.bibtex}
                award={pub.frontmatter.award}
                thumbnail={pub.frontmatter.thumbnail}
                venue={pub.frontmatter.venue}
                video={pub.frontmatter.video}
                slide={pub.frontmatter.slide}
                title={pub.frontmatter.title}
                pdf={pub.frontmatter.pdf}
                category={pub.frontmatter.category}
              />
            ))}
          </div>
        ))}
      </Layout>
    </>
  );
};

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/publication/"}}) {
    nodes {
      frontmatter {
        authors
        date
        bibtex
        award
        thumbnail
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

export const Head = () => <title>Publications</title>

export default PublicationPage;
