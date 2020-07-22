import React from 'react'
import { Link } from 'react-router-dom'
import './cart-dropdown.styles.scss'
const CartDropdown = () => {
  return (
    <div class="cart-dropdown">
    <div class="cart-items">
    <Link to='/checkout'>
    <button>GO TO CHECKOUT</button>
    </Link>
    </div>
    </div>
  )
}

export default CartDropdown
