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
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeDecore from './Components/HomeDecore/HomeDecore'
import Home from './Components/Home/Home'
import Exclusive from './Components/Exclusive/Exclusive'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/homeDecore">
            <HomeDecore></HomeDecore>
          </Route>
          <Route path="/exclusive">
            <Exclusive></Exclusive>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
