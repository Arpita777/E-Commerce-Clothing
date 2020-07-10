import React from 'react'
import {connect} from 'react-redux'
import CheckOutItem from '../checkout-item/checkout-item.component'
import StripeCheckoutButton from '../stripe-button/stripe-buttton.component'
import './checkout.styles.scss'


const Checkout = ({cartItems,totalPrice}) =>(
  <div className='checkout-page'>
    <div className='checkout-header'>
       <div className='header-block'>
          <span>Product</span>
       </div>
       <div className='header-block'>
          <span>Description</span>
       </div>
       <div className='header-block'>
          <span>Quantity</span>
       </div>
       <div className='header-block'>
          <span>Price</span>
       </div>
       <div className='header-block'>
          <span>Remove</span>
       </div>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
      ))
    }
    <div className='total'>
        Total Price: ${totalPrice}
    </div>
    <div className='test-warning'>
      *Please use following test credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp:06/20  CVV-123
    </div>
    <StripeCheckoutButton price={totalPrice}/>
   
  </div>
)

const mapStateToProps = ({cart:{cartItems}})=>({
  cartItems,
  totalPrice: cartItems.reduce((accumulatedQty,cartItem)=>accumulatedQty+cartItem.quantity*cartItem.price,0)
})
export default connect(mapStateToProps)(Checkout);