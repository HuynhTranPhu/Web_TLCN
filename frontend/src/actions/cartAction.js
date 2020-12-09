import axios from 'axios'
import Cookie from 'js-cookie';
import {CART_INCREASE, 
    CART_DECREASE, 
    CART_ADD_FAIL, 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM, 
    CART_SAVE_PAYMENT, 
    CART_SAVE_SHIPPING, 
    CART_ADD_POST_REQUEST,
    CART_ADD_POST_SUCCESS,
    CART_ADD_POST_FAIL,
    CART_REMOVE_POST_REQUEST,
    CART_REMOVE_POST_SUCCESS,
    CART_REMOVE_POST_FAIL} 
    from '../constants/cartConstants';


// const addToCart = (productId, count) => async (dispatch, getState) => {
//     try{
//         const {data} = await axios.get("/product/" + productId);
//         dispatch({
//             type: CART_ADD_ITEM, payload:{
//             _id: data._id,
//             name: data.name,
//             img: data.img,
//             price: data.price,
//             countInStock : data.count,
//             count,
//             }
//         });
//         const {cart: {cartItems}} = getState();
//         Cookie.set("cartItems", JSON.stringify(cartItems));

//     } catch(error){
//         dispatch({type: CART_ADD_FAIL, payload: error.message})
//     }
// }
const addToCart = (productId, count) => async (dispatch, getState) => {
    try{
        const {data} = await axios.get("/product/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload:{
            _id: data._id,
            name: data.name,
            img: data.img,
            price: data.price,
            countInStock : data.count,
            count,
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
const addCart = (id_user,products) => async (dispatch) =>{
    dispatch({type: CART_ADD_POST_REQUEST, payload:{id_user, products}});
    try{
        const {data} = await axios.post("/cart/addcart", {id_user,products});
        dispatch({type:CART_ADD_POST_SUCCESS,payload:data});
        console.log(data);
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:CART_ADD_POST_FAIL,payload:message});
    }
}
// const removeCart = (id_user,id_product) => async (dispatch) =>{
//     dispatch({type: CART_REMOVE_POST_REQUEST, payload:{id_user, id_product}});
//     try{
//         const {data} = await axios.delete("/cart/remove", {id_user,id_product});
//         dispatch({type:CART_REMOVE_POST_SUCCESS,payload:data});
//         console.log(data);
//     }catch(error){
//         const message=
//         error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//         dispatch({type:CART_REMOVE_POST_FAIL,payload:message});
//     }
// }
export {addToCart, removeFromCart, saveShipping, savePayment, decrease, increase
     ,addCart
     //, removeCart
};