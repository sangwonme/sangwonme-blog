import * as React from 'react'
import Layout from '../components/LayoutRelated/Layout'
import SubSectionTitle from '../components/_Common/SubSectionTitle'

const IndexPage = () => {

  return (
    <>
      <Layout title={''}>
        <SubSectionTitle>On-Going Research</SubSectionTitle>
        <SubSectionTitle>Education</SubSectionTitle>
      </Layout>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage