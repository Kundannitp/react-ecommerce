import React, {createContext, useReducer} from 'react';
import cartReducer,{sumItems} from './cart-reducer'

export const CartContext= createContext();

const cartFromStorage=localStorage.getItem('cart')?
JSON.parse(localStorage.getItem('cart')):[]

const initialState = {cartItems: cartFromStorage,...sumItems(cartFromStorage)};

const CartContextProvider = ({children})=>{
    const [state, dispatch]=useReducer(cartReducer, initialState);
    const addProduct = (product)=>dispatch({type:'ADD_ITEM',payload: product});
    const addMore = (product)=>dispatch(
        {type:'ADD_MORE',payload: product}
    )
    const decreaseItem=(product)=>dispatch(
        {type:'DECREASE_QUANTITY',payload: product}
    )
    const deleteItem=(product)=>dispatch(
        {type:'DELETE_ITEM',payload: product}
    )
    const clearCart=()=>dispatch(
        {type:'CLEAR_CART'}
    )
    const contextValues={
        ...state,
        addProduct,
        addMore,
        decreaseItem,
        deleteItem,
        clearCart,
    }

    return (
        <CartContext.Provider value={contextValues}>
            {
                children
            }
        </CartContext.Provider>
    )
}

export default CartContextProvider;
