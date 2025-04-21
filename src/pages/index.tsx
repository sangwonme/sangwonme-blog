import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/LayoutRelated/Layout'
import SubSectionTitle from '../components/_Common/SubSectionTitle'

import './index.scss';

const IndexPage = ({ data }: any) => {
  const ongoingProjects = data.allMarkdownRemark.nodes;

  return (
    <>
      <Layout title={''}>
        <SubSectionTitle>Research Interest</SubSectionTitle>
        <div className="research-interest-container">
          <div className="research-interest-image-container">
            <img 
              src="https://github.com/sangwonme/imgurltest/blob/main/child.png?raw=true" 
              alt="Child learning illustration"
              className="research-interest-image"
            />
          </div>

    
          <p className="research-interest-paragraph">
            <b>Human-AI Interaction:</b> I'm passionate about exploring how the latest AI technologies can be meaningfully integrated into human-computer interaction, especially in mobile systems.
          </p>

          <p className="research-interest-paragraph">
            <b>AI-Powered Support for Early Learning:</b> I'm interested in how AI can support children's early learning experiences — from independent exploration to parent-child interactions at home. I also have four years of experience teaching programming to children, which deeply inspires my work.
          </p>
        </div>

        <SubSectionTitle>On-Going Research</SubSectionTitle>
        <div className="ongoing-container">
          {ongoingProjects.map((project:any, idx:any) => (
            <div key={idx} className="ongoing-wrapper">
              <h3 className='ongoing-title'>{project.frontmatter.title}</h3>
              {project.frontmatter.thumbnail && (
                <img src={project.frontmatter.thumbnail} alt={project.frontmatter.title} className="ongoing-thumbnail" />
              )}
              <p className='ongoing-description'>{project.frontmatter.description}</p>
            </div>
          ))}
        </div>

        <SubSectionTitle>Education</SubSectionTitle>
        <div className="education-container">
          <div className="education-item">
            <span className="education-date">2023 SEP - NOW</span>
            <span className="education-text">M.S./Ph.D. Computer Science and Engineering, Seoul National University</span>
          </div>
          <div className="education-item">
            <span className="education-date">2020 MAR - 2023 FEB</span>
            <span className="education-text">B.A. Information Science & Culture, Seoul National University</span>
          </div>
          <div className="education-item">
            <span className="education-date">2017 MAR - 2023 FEB</span>
            <span className="education-text">B.S. Electrical Computer Engineering, Seoul National University</span>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/ongoing/"}}) {
    nodes {
      frontmatter {
        title
        thumbnail
        description
      }
    }
  }
}
`

export const Head = () => <title>Home Page</title>

export default IndexPage;
