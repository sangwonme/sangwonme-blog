import * as React from 'react'
import Header from '../components/Layout/Header'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Layout/Footer'

const DiaryPage = () => {
  return (
    <>
      <Header></Header>
      <main></main>
      <Footer></Footer>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default DiaryPage