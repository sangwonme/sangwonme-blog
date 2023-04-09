import * as React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main></main>
      <Footer></Footer>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage