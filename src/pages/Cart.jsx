import React from 'react'
import cartItems from '../assets/data/data.json'

const Cart = () => {
  const { title, information } = cartItems.cartItems;

  return (
    <div>Cart</div>
  )
}

export default Cart