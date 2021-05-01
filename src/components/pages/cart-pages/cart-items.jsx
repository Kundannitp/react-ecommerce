import React,{useContext} from 'react';
import {PlusCircleIcon,MinusCircleIcon,TrashIcon} from '../../icons/index'
import './cart-page.styles.scss'
import {CartContext} from '../../../context/cart-context'

const CartItem=(product)=>{
    const {title,imageUrl,price,quantity}=product;
    const { addMore, decreaseItem, deleteItem} =useContext(CartContext);
    return (
        <div className='cart-item'>
            <div className='item-image'>
                <img src={imageUrl} alt="product"/>
            </div>
            <div className='name-price'>
                <h4>{title}</h4>
                <p>Rs. {price}</p>
            </div>
            <div className='quantity'>
                <p>{`Quantity: ${quantity}`}</p>
            </div>
            <div className='btns-container'>
                <button className='btn-increase' onClick={()=>{
                    addMore(product);
                }}>
                    <PlusCircleIcon width='20px'/>
                </button>
                {
                    quantity===1 &&
                    <button className='btn-trash'
                    onClick={()=>{
                        deleteItem(product);
                    }}>
                        <TrashIcon width='20px'/>
                    </button>
                }
                {
                    quantity > 1 &&
                    <button className='btn-decrease' onClick={() => {decreaseItem(product)}}>
                        <MinusCircleIcon width='20px'/>
                    </button>
                }
            </div>
        </div>
    )
}

export default CartItem;