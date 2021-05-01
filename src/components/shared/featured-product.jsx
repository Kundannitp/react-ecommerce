import React,{useContext} from 'react';
import './featured-product.styles.scss';
import {withRouter} from 'react-router-dom'
import {isInCart} from '../../helpers'
import {CartContext} from '../../context/cart-context'

const FeaturedProduct = (props) =>{
    const {title, imageUrl, price, history, id, description }=props;
    
    const product={title,imageUrl,price,id,description};
    const {addProduct, addMore, cartItems}=useContext(CartContext);

    return(
        <div className='featured-product'>
            <div className='feature-image' onClick={()=>{
                history.push(`/product/${id}`)
            }}>
                <img src={imageUrl} alt="product"/>
            </div>
            <div className='name-price'>
                <h3>{title}</h3>
                <p>Rs. {price}</p>
                {
                    !isInCart(product,cartItems)&&
                    <button className='button is-black nomad-btn' onClick={()=>{
                        addProduct(product);
                    }}>
                        ADD TO CART
                    </button>
                }
                {
                    isInCart(product, cartItems) &&
                    <button className='button is-white nomad-btn' id='btn-white-outline' onClick={() => {addMore(product)}}>
                        ADD MORE
                    </button>
                }
            </div>
        </div>
    )
}

export default withRouter(FeaturedProduct);