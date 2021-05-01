const storeCartItems=(cartItems)=>{
    const cart=cartItems.length>0?cartItems:[];
    localStorage.setItem('cart',JSON.stringify(cart));
}
export const sumItems=cartItems=>{
    storeCartItems(cartItems);
    return {
        itemCount: cartItems.reduce((total,prod)=>total+prod.quantity,0),
        total: cartItems.reduce((total, prod)=> total+(prod.price*prod.quantity),0)
    }
}

const cartReducer=(state, action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            //if condition to verify is the item already in the cart or not
            if(!state.cartItems.find(item=>item.id===action.payload.id)){
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'ADD_MORE':
            const itemIndex=state.cartItems.findIndex(item=>item.id===action.payload.id);
            if(itemIndex!==-1){
                state.cartItems[itemIndex].quantity+=1;
            }
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'DECREASE_QUANTITY':
            const item_i=state.cartItems.findIndex(item=>item.id===action.payload.id);
            if(item_i!==-1){
                state.cartItems[item_i].quantity-=1;
            }
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'DELETE_ITEM':
            const item_del_i=state.cartItems.findIndex(item=>item.id===action.payload.id);
            if(item_del_i!==-1){
                state.cartItems.splice(item_del_i,1);
            }
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'CLEAR_CART':
            localStorage.removeItem('cart');
            state.cartItems.splice(0);
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        default:
            return state;
    }
}

export default cartReducer;