import * as React from 'react'
import DividerTitle from '../components/_Common/DividerTitle'
import Layout from '../components/LayoutRelated/Layout'

const IndexPage = () => {

  return (
    <>
      <Layout title={''}>
        <DividerTitle>Publications</DividerTitle>
        <DividerTitle>Education</DividerTitle>
      </Layout>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage