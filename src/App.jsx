import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './pages/User'
import Catalogue from './components/Catalogue'
import Product from './components/Product'
import data from "./assets/data/data.json"
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  const { firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe, sixthShoe, seventhShoe, eigthShoe, ninthShoe, tenthShoe, eleventhShoe, twelthShoe, thirteenthShoe, fourteenthShoe, fiveteenthShoe, sixteenthShoe, seventeenthShoe, eighteenthShoe, nineteenthShoe, twenthShoe, twentyFirstShoe, twentySecondShoe, twentyThirdShoe } = data.catalogueShoes;
  const allShoes = [firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe, sixthShoe, seventhShoe, eigthShoe, ninthShoe, tenthShoe, eleventhShoe, twelthShoe, thirteenthShoe, fourteenthShoe, fiveteenthShoe, sixteenthShoe, seventeenthShoe, eighteenthShoe, nineteenthShoe, twenthShoe, twentyFirstShoe, twentySecondShoe, twentyThirdShoe];

  const { size385, size39, size40, size405, size41, size42, size425, size43 ,size44, size445, size45, size455, size46, size47, size475, size485, size495 } = data.sizes;
  const allSizes = [size385, size39, size40, size405, size41, size42, size425, size43 ,size44, size445, size45, size455, size46, size47, size475, size485, size495];

  const { detail, detailColor, detailArticle, deliveryReturn, detailReturn, detailMake, detailMethode } = data.detailProduct;
  const allDetail = [detail, detailColor, detailArticle, deliveryReturn, detailReturn, detailMake, detailMethode];

  const { review, star, title, date, reviewClient } = data.detailReview;
  const allReview = [review, star, title, date, reviewClient];

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/user" element={ <User /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/catalogue' element={ <Catalogue allShoes={allShoes} /> } />
        <Route path='/catalogue/:id' element={ <Product allShoes={allShoes} allSizes={allSizes}/> } />
      </Routes>
    </Router>
  )
}

export default App
