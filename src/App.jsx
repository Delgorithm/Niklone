import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './pages/User'
import Catalogue from './components/Catalogue'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/user" element={ <User />} />
        <Route path='/catalogue' element={ <Catalogue /> } />
      </Routes>
    </Router>
  )
}

export default App
