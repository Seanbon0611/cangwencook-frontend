import React from 'react'
import { Button, Typography } from '@material-ui/core'
import FormInput from '../../components/form-input/FormInput'
import './single-product-page.styles.scss'

const SingleProductPage = ({ item }) => {
  return (
    <div className='single-product-container'>
      <div className='product-title'>
      <Typography variant="h4">{item.name}</Typography>
      </div>
      <div>
      <Typography variant="h5">{item.price}</Typography>
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
        <FormInput type='number' />
        </div>
        </div>
        </div>
        <Button type='submit' variant='contained' color="primary">ADD TO CART</Button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
