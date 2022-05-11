import 'bootstrap/dist/css/bootstrap.min.css'
import ArrivalProducts from './Components/ArraivalProducts/ArrivalProducts'
import Banner from './Components/Banner/Banner'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts'
import Footer from './Components/Footer/Footer'
import Heading from './Components/Heading/Heading'
import LatestNews from './Components/LatestNews/LatestNews'
import Navigation from './Components/Navigation/Navigation'
import NewsLetter from './Components/NewsLetter/NewsLetter'
import Offer from './Components/Offer/Offer'
import ShowProduct from './Components/ShowProduct/ShowProduct'
import VisitedCategories from './Components/VisitedCategories/VisitedCategories'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Heading></Heading>
      <Banner></Banner>
      <VisitedCategories></VisitedCategories>
      <FeaturedProducts></FeaturedProducts>
      <ShowProduct></ShowProduct>
      <ArrivalProducts></ArrivalProducts>
      <Offer></Offer>
      <LatestNews></LatestNews>
      <NewsLetter></NewsLetter>
      <hr />
      <Footer></Footer>
    </div>
  )
}

export default App
