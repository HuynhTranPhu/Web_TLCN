import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer } from '../reducers/productReducers';
import {cartPostReducer, cartReducer, removeCartPostReducer} from '../reducers/cartReducers';
import {userUpdateProfileReducer, userDetailsReducer, userRegisterReducer, userLoginReducer, userUpdatePasswordReducer, forgotPasswordReducer } from '../reducers/userReducers';

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
    cartPost:cartPostReducer,
    removeCartPost:removeCartPostReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;