import Axios from "axios";
import Cookie from 'js-cookie';
import {CART_EMPTY, ADD_ORDER_FAIL, ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS } from "../constants/orderContants";

const addOrder = (id_user,city,posteCode,address,phone) => async (dispatch) =>{
    dispatch({type: ADD_ORDER_REQUEST, payload:{id_user,city,posteCode,address,phone}});
    try{
        const {data} = await Axios.post("/order/addorder", {id_user,city,posteCode,address,phone});
        dispatch({type:ADD_ORDER_SUCCESS,payload:data});
        dispatch({type: CART_EMPTY});
        //console.log(cartItems);
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:ADD_ORDER_FAIL,payload:message});
    }
    Cookie.remove('cartItems');
}
export {addOrder};