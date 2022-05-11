import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './Components/Banner/Banner'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts'
import Heading from './Components/Heading/Heading'
import Navigation from './Components/Navigation/Navigation'
import VisitedCategories from './Components/VisitedCategories/VisitedCategories'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Heading></Heading>
      <Banner></Banner>
      <VisitedCategories></VisitedCategories>
      <FeaturedProducts></FeaturedProducts>
    </div>
  )
}

export default App
