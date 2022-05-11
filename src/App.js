import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './Components/Banner/Banner'
import Heading from './Components/Heading/Heading'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Heading></Heading>
      <Banner></Banner>
    </div>
  )
}

export default App
