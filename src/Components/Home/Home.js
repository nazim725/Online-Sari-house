import React from 'react'
import ArrivalProducts from '../ArraivalProducts/ArrivalProducts'
import Banner from '../Banner/Banner'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import Heading from '../Heading/Heading'
import LatestNews from '../LatestNews/LatestNews'
import Navigation from '../Navigation/Navigation'
import NewsLetter from '../NewsLetter/NewsLetter'
import Offer from '../Offer/Offer'
import ShowProduct from '../ShowProduct/ShowProduct'
import VisitedCategories from '../VisitedCategories/VisitedCategories'

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Heading></Heading>
      <Banner></Banner>
      <VisitedCategories></VisitedCategories>
      <FeaturedProducts></FeaturedProducts>
      <ShowProduct></ShowProduct>
      <ArrivalProducts></ArrivalProducts>
      <Offer></Offer>
      <LatestNews></LatestNews>
      <NewsLetter></NewsLetter>y
    </div>
  )
}

export default Home
