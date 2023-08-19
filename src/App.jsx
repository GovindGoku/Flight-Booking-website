import Navbar from './Components/Navbar/Navbar'
import Home from './components/Home/Home'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import Travelers from './Components/Travelers/Travelers'
import Subscriber from './Components/Subscribers/Subscribe'
import Footer from './components/Footer/Footer'

import './main.scss'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscriber />
      <Footer />
    </div>
  )
}

export default App
