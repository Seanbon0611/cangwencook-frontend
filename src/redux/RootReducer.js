
import { combineReducers } from 'redux'
import CartReducer from './cart/CartReducer'

export default combineReducers({
  cart: CartReducer
})