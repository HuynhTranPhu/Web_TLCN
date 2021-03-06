import Axios from "axios";
import Cookie from 'js-cookie';
import {REMOVE_ORDER_REQUEST,
        REMOVE_ORDER_SUCCESS,
        REMOVE_ORDER_FAIL,
        CART_EMPTY,
        ADD_ORDER_FAIL,
        ADD_ORDER_REQUEST, 
        ADD_ORDER_SUCCESS, 
        HISTORY_FAIL, 
        HISTORY_SUCCESS, 
        HISTORY_REQUEST, VIEW_HISTORY_FAIL,
        VIEW_HISTORY_SUCCESS, 
        VIEW_HISTORY_REQUEST } from "../constants/orderContants";

const addOrder = (id_user,city,posteCode,address,phone,payment,shiping) => async (dispatch, getState) =>{
    console.log({id_user,city,posteCode,address,phone,payment,shiping});
    dispatch({type: ADD_ORDER_REQUEST, payload:{id_user,city,posteCode,address,phone,payment,shiping}});
    const { userLogin :{userInfo}}= getState();
    try{
        const {data} = await Axios.post("https://backendheroku112.herokuapp.com/order/addorder", {id_user,city,posteCode,address,phone,payment,shiping},
        {
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type:ADD_ORDER_SUCCESS,payload:data});
        dispatch({type: CART_EMPTY});
         
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:ADD_ORDER_FAIL,payload:message});
    }
    Cookie.remove('cartItems');
}
const historyGet = (id_user) => async (dispatch,getState) =>{
    const { userLogin :{userInfo}}= getState();
    try{
        dispatch({type: HISTORY_REQUEST, payload: id_user});
        const {data} = await Axios.get("https://backendheroku112.herokuapp.com/order/getorder/" + id_user
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type: HISTORY_SUCCESS, payload:data });
        //console.log(data);
    }
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: HISTORY_FAIL, payload: message})
    }
}
const viewHistoryGet = (id_order) => async (dispatch,getState) =>{
    const { userLogin :{userInfo}}= getState();
    try{
        dispatch({type: VIEW_HISTORY_REQUEST, payload: id_order});
        const {data} = await Axios.get("https://backendheroku112.herokuapp.com/order/detail/" +id_order,
        {
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type: VIEW_HISTORY_SUCCESS, payload:data });
        //console.log(data);
    }
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: VIEW_HISTORY_FAIL, payload: message})
    }
}
const removeOrder = (id_order) => async (dispatch) =>{
    try{
        dispatch({type: REMOVE_ORDER_REQUEST, payload:id_order});
        const {data} = await Axios.put("https://backendheroku112.herokuapp.com/order/" +id_order);
        dispatch({type: REMOVE_ORDER_SUCCESS, payload:data});
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:REMOVE_ORDER_FAIL,payload:message});
    }
}



export {addOrder
    ,historyGet
    ,viewHistoryGet
    ,removeOrder
};