import React from 'react'
import Navigation from '../Navigation/Navigation'
import Heading from '../Heading/Heading'
import HomeDecoreBanner from '../HomeDecoreBanner/HomeDecoreBanner'
import HomeDecoreProducts from '../HomeDecoreProducts/HomeDecoreProducts'

const HomeDecore = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Heading></Heading>
      <HomeDecoreBanner></HomeDecoreBanner>
      <HomeDecoreProducts></HomeDecoreProducts>
    </div>
  )
}

export default HomeDecore
