import {CART_INCREASE, CART_DECREASE, CART_ADD_FAIL,CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from "../constants/cartConstants";

function cartReducer(state ={cartItems:[], shipping: {}, payment: {}}, action){

    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x=> x.product === item.product);
            if(product){
               return { 
                   cartItems: 
                   state.cartItems.map( x => x.product === product.product? item :x)
                };
            }
            return { cartItems: [...state.cartItems, item]};
        case CART_REMOVE_ITEM:
            return {
                ...state
                ,cartItems: state.cartItems.filter(x=>x.product!== action.payload)}
        case CART_INCREASE:
            let tempCart =state.cartItems.map(item=>{
                if(item.product === action.payload){
                   item ={...item, qty: item.qty +1}
                }
                return item;
            })
            return {
                ...state,cartItems:tempCart}
            //console.log(action.payload);
        case CART_DECREASE:
            let tempCart1 = state.cartItems.map(item=>{
                if(item.product === action.payload){
                    if(item.qty===1){
                        item ={...item,qty:1}
                    }else{
                        item ={...item,qty:item.qty -1}
                    } 
                }
                return item;
            })
            return {
                ...state,cartItems:tempCart1 }
        case CART_SAVE_SHIPPING:
            return {...state, shipping:action.payload}
        case CART_SAVE_PAYMENT:
            return {...state, payment:action.payload}
        case CART_ADD_FAIL:
            return { loading : false, error: action.payload}
        default:
                return state
    }
}
export {cartReducer}