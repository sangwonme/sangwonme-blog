import * as React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import AboutMe from '../components/HomePageRelated/AboutMe'
import SectionTitle from '../components/Common/SectionTitle'

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <AboutMe></AboutMe>
        <SectionTitle>Current Works</SectionTitle>
        <SectionTitle>Publications</SectionTitle>
      </main>
      <Footer></Footer>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage