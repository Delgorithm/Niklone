import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './pages/User'
import Catalogue from './components/Catalogue'
import Product from './components/Product'
import data from "./assets/data/data.json"

function App() {

  const { firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe, sixthShoe, seventhShoe, eigthShoe, ninthShoe, tenthShoe, eleventhShoe, twelthShoe, thirteenthShoe, fourteenthShoe, fiveteenthShoe, sixteenthShoe, seventeenthShoe, eighteenthShoe, nineteenthShoe, twenthShoe, twentyFirstShoe, twentySecondShoe, twentyThirdShoe } = data.catalogueShoes;
  const allShoes = [firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe, sixthShoe, seventhShoe, eigthShoe, ninthShoe, tenthShoe, eleventhShoe, twelthShoe, thirteenthShoe, fourteenthShoe, fiveteenthShoe, sixteenthShoe, seventeenthShoe, eighteenthShoe, nineteenthShoe, twenthShoe, twentyFirstShoe, twentySecondShoe, twentyThirdShoe];

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/user" element={ <User />} />
        <Route path='/catalogue' element={ <Catalogue allShoes={allShoes} /> } />
        <Route path='/catalogue/:id' element={ <Product allShoes={allShoes}/> } />
      </Routes>
    </Router>
  )
}

export default App
