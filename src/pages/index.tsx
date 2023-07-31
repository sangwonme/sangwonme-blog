import * as React from 'react'
import Header from '../components/_Common/Header'
import Footer from '../components/_Common/Footer'
import AboutMe from '../components/HomePageRelated/AboutMe'
import DividerTitle from '../components/_Common/DividerTitle'

const IndexPage = () => {
  console.log('Hi this is sangwonme.')

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