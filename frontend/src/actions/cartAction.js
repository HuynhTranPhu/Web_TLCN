import axios from 'axios'
import Cookie from 'js-cookie';
import {CART_INCREASE, CART_DECREASE, CART_ADD_FAIL, CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from '../constants/cartConstants';


const addToCart = (productId, qty) => async (dispatch, getState) => {
    try{
        const {data} = await axios.get("/product/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload:{
            product: data._id,
            name: data.name,
            image: data.img,
            price: data.price,
            countInStock : data.count,
            qty
            }
        });
        const {cart: {cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch(error){
        dispatch({type: CART_ADD_FAIL, payload: error.message})
    }
}
const removeFromCart =(productId) => (dispatch, getState) =>{

    //const {cart: {cartItems}} = getState();
    //Cookie.set("cartItems", JSON.stringify(cartItems));
    Cookie.remove('cartItems');
    dispatch({type :CART_REMOVE_ITEM, payload : productId});
}
const decrease = (productId) =>(dispatch, getState)=>{
    const {cart: {cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    dispatch({type :CART_DECREASE, payload : productId});
}
const increase = (productId) =>(dispatch, getState)=>{
    const {cart: {cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    dispatch({type :CART_INCREASE, payload :productId });
}
const saveShipping =(data) => (dispatch) =>{
    dispatch({type:CART_SAVE_SHIPPING, payload:data});
} 
const savePayment =(data) => (dispatch) =>{
    dispatch({type:CART_SAVE_PAYMENT, payload:data});
} 
export {addToCart, removeFromCart, saveShipping, savePayment, decrease, increase};