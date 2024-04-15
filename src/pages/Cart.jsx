import React from 'react'
import cartItems from '../assets/data/data.json'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const { title, information } = cartItems.cartItems;

  return (
    <>
      <Navbar />
      <section className='m-6'>
        <p>Cart part</p>
      </section>
      <Footer />
    </>
  )
}

export default Cart