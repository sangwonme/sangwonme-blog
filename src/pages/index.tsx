import * as React from 'react'
import Header from '../components/LayoutRelated/Header'
import Footer from '../components/LayoutRelated/Footer'
import DividerTitle from '../components/_Common/DividerTitle'
import Layout from '../components/LayoutRelated/Layout'

const IndexPage = () => {
  console.log('Hi this is sangwonme.')

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