import React from 'react';
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems,history,toggleCartHidden}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
       {
         cartItems.length
         ?
         cartItems.map(cartItem => (
         <CartItem key={cartItem.key} item={cartItem} />
       ))
       :
       <span class='empty-message'>Your cart is empty</span>
       }
         
     
    </div>
    <CustomButton onClick={() => {history.push('/checkout');toggleCartHidden();}}
    >CHECKOUT</CustomButton>
  
  </div>
);
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = ({cart:{cartItems}}) => ({
  cartItems
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));
