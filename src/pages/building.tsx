import * as React from 'react'
import Header from '../components/Layout/Header'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Layout/Footer'
import UnderConstruction from '../components/UnderConstructionRelated/UnderConstruction'

const BuildingPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <UnderConstruction></UnderConstruction>
      </main>
      <Footer></Footer>
    </>
  )
}

export const Head = () => <title>Under Construction</title>

export default BuildingPage