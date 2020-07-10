import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import shoppingicon from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden,itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <img className='shopping-icon' src={shoppingicon} alt='shoppingicon' />
   
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = ({cart:{cartItems}})=>({
  itemCount: cartItems.reduce((accumulatedQty,cartItem)=>accumulatedQty+cartItem.quantity,0)
 
})

export default connect(
  mapStateToProps ,
  mapDispatchToProps
)(CartIcon);
