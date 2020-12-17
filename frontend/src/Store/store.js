import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer } from '../reducers/productReducers';
import {cartGetReducer, cartPostReducer, cartReducer, decreaseCartReducer, increaseCartReducer, removeCartPostReducer} from '../reducers/cartReducers';
import {userUpdateProfileReducer, userDetailsReducer, userRegisterReducer, userLoginReducer, userUpdatePasswordReducer, forgotPasswordReducer, addCartReducer } from '../reducers/userReducers';
import { historyReducer, orderPostReducer } from '../reducers/orderReducers';

const cartItems = Cookie.getJSON("cartItems")|| [];
const userInfo = Cookie.getJSON("userInfo")|| null;

const initialState = {cart : {cartItems, shipping:{}, payment:{}}, userLogin: {userInfo}};
const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userUpdatePassword:userUpdatePasswordReducer,
    forgotPassword:forgotPasswordReducer,
    //userAddCart: addCartReducer,

    cartPost:cartPostReducer,
    cartGet:cartGetReducer,
    removeCartPost:removeCartPostReducer,
    increaseCart: increaseCartReducer,
    decreaseCart: decreaseCartReducer,
    orderPost: orderPostReducer,
    historyOrder: historyReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;