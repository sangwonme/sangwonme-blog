import * as React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import AboutMe from '../components/HomePageRelated/AboutMe'
import DividerTitle from '../components/Common/DividerTitle'

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <AboutMe></AboutMe>
        <DividerTitle>Publications</DividerTitle>
        <DividerTitle>Education</DividerTitle>
      </main>
      <Footer></Footer>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage