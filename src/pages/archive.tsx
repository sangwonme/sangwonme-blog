import * as React from 'react'
import Header from '../components/LayoutRelated/Header'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/LayoutRelated/Footer'

const ArchivePage = () => {
  return (
    <>
      <Header></Header>
      <main></main>
      <Footer></Footer>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default ArchivePage