import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import Reducer from '../reducers/index';

const cartItems = Cookie.getJSON("cartItems")|| [];
const userInfo = Cookie.getJSON("userInfo")|| null;

const initialState = {cart : {cartItems, shipping:{}, payment:{}}, userLogin: {userInfo}};
const reducer = Reducer;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;