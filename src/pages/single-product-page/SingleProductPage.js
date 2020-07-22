import React from 'react'
import './single-product-page.styles.scss'

const SingleProductPage = ({ item }) => {
  return (
    <div className='single-product-container'>
      <div className='product-title'>
      <h1>{item.name}</h1>
      </div>
      <div>
        <h3>{item.price}</h3>
      </div>
      <div className='product-details'>
      <img src={item.image} alt="" />
      </div>
      <div className='add-to-cart-form'>
        <form>
          <select>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>2XL</option>
          </select>
          <input type='submit' value='Add To Cart'/>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
