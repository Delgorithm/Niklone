import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserAuthContextProvider } from './context/AuthContext/UserAuthContext'
import Cart from './pages/Cart'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Newsletter from './pages/Newsletter'
import Catalogue from './components/Catalogue'
import Product from './components/Product'
import data from "./assets/data/data.json"
import './App.css'
import User from './pages/User'
import ProtectedRoute from './components/ProtectedRoute'
import CartProvider from './context/CartContext'

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
    <UserAuthContextProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/newsletter" element={ <Newsletter /> } />
            <Route path='/signin' element={ <SignIn /> } />
            <Route path='/signup' element={ <SignUp /> } />
            <Route path='/catalogue' element={ <Catalogue allShoes={allShoes} /> } />
            <Route path='/catalogue/:id' element={ <Product allShoes={allShoes} allSizes={allSizes}/> } />
            <Route path='/user' element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>} 
            />
          </Routes>
        </Router>
      </CartProvider>
    </UserAuthContextProvider>
  )
}



export default App
