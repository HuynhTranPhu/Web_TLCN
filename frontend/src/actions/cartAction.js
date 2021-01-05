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
    CART_REMOVE_POST_FAIL,
    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL,
    CART_INCREASE_REQUEST,
    CART_INCREASE_SUCCESS,
    CART_INCREASE_FAIL,
    CART_DECREASE_REQUEST,
    CART_DECREASE_FAIL,
    CART_DECREASE_SUCCESS} 
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
///add cart tren man hinh
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
const addCart = (id_user,products) => async (dispatch,getState) =>{
    dispatch({type: CART_ADD_POST_REQUEST, payload:{id_user, products}});
    console.log(id_user,products);
    const { userLogin :{userInfo}}= getState();
    try{
        const {data} = await axios.post("/cart/addcart", {id_user,products}
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type:CART_ADD_POST_SUCCESS,payload:data});
      
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:CART_ADD_POST_FAIL,payload:message});
    }
}
const getCart = (id_user) => async (dispatch) =>{
    dispatch({type: CART_LIST_REQUEST,payload: id_user});
    try{
         const {data} = await axios.get('/cart/'+id_user);
         //console.log(data);
        dispatch({type: CART_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: CART_LIST_FAIL, payload: message});
    }

}
const removeCart = (id_user,id_product) => async (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_POST_REQUEST, payload:{id_user,id_product}});
    const { userLogin :{userInfo}}= getState();
    //console.log(id_user,id_product);
    try{
        //console.log({id_product,id_user});
        const {data} = await axios.put("/cart/remove", {id_user,id_product}
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type:CART_REMOVE_POST_SUCCESS,payload:data, success:true});
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:CART_REMOVE_POST_FAIL,payload:message});
    }
}
const increaseCart = (id_user,id_product) => async (dispatch, getState) =>{
    dispatch({type: CART_INCREASE_REQUEST, payload:{id_user,id_product}});
    const { userLogin :{userInfo}}= getState();
    //console.log(id_user,id_product);
    try{
        //console.log({id_product,id_user});
        const {data} = await axios.put("/cart/updatetang", {id_user,id_product}
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type:CART_INCREASE_SUCCESS,payload:data, success:true});
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:CART_INCREASE_FAIL,payload:message});
    }
}
const decreaseCart = (id_user,id_product) => async (dispatch, getState) =>{
    dispatch({type: CART_DECREASE_REQUEST, payload:{id_user,id_product}});
    const { userLogin :{userInfo}}= getState();
    //console.log(id_user,id_product);
    try{
        //console.log({id_product,id_user});
        const {data} = await axios.put("/cart/updategiam", {id_user,id_product}
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type:CART_DECREASE_SUCCESS,payload:data, success:true});
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:CART_DECREASE_FAIL,payload:message});
    }
}
export {addToCart, removeFromCart, saveShipping, savePayment, decrease, increase
     ,addCart
     ,getCart
     , removeCart
     ,increaseCart
     ,decreaseCart
};