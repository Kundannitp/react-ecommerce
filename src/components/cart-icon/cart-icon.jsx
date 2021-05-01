import React,{useContext} from 'react';
import shoppingBag from '../../assets/shopping-bag.png';
import { CartContext } from '../../context/cart-context';
import {withRouter} from 'react-router-dom'
import './cart-icon.styles.scss';

const CartIcon = ({history}) => {
    const { itemCount, total, cartItems } = useContext(CartContext);
    console.log('itemCount',itemCount);
    console.log('total',total);
    console.log('CartItems:', cartItems);
    return (
        <div className='cart-container' onClick={()=>{
            history.push('/cart');
        }}>
            <img src={shoppingBag} alt='shopping-cart-icon' />
            {
                itemCount > 0 ? <span className='cart-count'> {itemCount} </span> : null
            }
        </div>
    );
}

export default withRouter(CartIcon);