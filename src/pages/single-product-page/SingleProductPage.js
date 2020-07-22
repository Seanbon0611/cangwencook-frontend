import React from 'react'
import FormInput from '../../components/form-input/FormInput'
import './single-product-page.styles.scss'

const SingleProductPage = ({ item }) => {
  return (
    <div className='single-product-container'>
      <div className='product-title'>
      <h4>{item.name}</h4>
      </div>
      <div>
        <h6>{item.price}</h6>
        </div>
        <div className='product-details'>
        <img src={item.image} alt="" />
        </div>
        <div>
        <form>
        <div className='add-to-cart-form'>
        <select className='browser-default'>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>2XL</option>
        </select>
        <div className="quantity">
        <label style={{fontSize: "15px", color: 'black'}}>Quantity:</label>
        <div className="number-field">
        <FormInput type='number'inputField />
        </div>
        </div>
        </div>
        <input type='submit' value='Add To Cart'/>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
