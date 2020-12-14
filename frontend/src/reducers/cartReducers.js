import {CART_INCREASE, CART_DECREASE, CART_ADD_FAIL,CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING, CART_ADD_POST_FAIL, CART_ADD_POST_SUCCESS, CART_ADD_POST_REQUEST, CART_REMOVE_POST_REQUEST, CART_REMOVE_POST_SUCCESS, CART_REMOVE_POST_FAIL, CART_LIST_REQUEST, CART_LIST_SUCCESS, CART_LIST_FAIL } from "../constants/cartConstants";

function cartReducer(state ={cartItems:[], shipping: {}, payment: {}}, action){

    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x=> x._id === item._id);
            if(product){
               return { 
                   cartItems: 
                   state.cartItems.map( x => x._id === product._id? item :x)
                };
            }
            return { cartItems: [...state.cartItems, item]};
        case CART_REMOVE_ITEM:
            return {
                ...state
                ,cartItems: state.cartItems.filter(x=>x._id!== action.payload)}
        case CART_INCREASE:
            let tempCart =state.cartItems.map(item=>{
                if(item._id === action.payload){
                   item ={...item, count: item.count +1}
                }
                return item;
            })
            return {
                ...state,cartItems:tempCart}
            //console.log(action.payload);
        case CART_DECREASE:
            let tempCart1 = state.cartItems.map(item=>{
                if(item._id === action.payload){
                    if(item.count===1){
                        item ={...item,count:1}
                    }else{
                        item ={...item,count:item.count -1}
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
// function cartReducer(state ={cartItems:[], shipping: {}, payment: {}}, action){

//     switch(action.type){
//         case CART_ADD_ITEM:
//             const item = action.payload;
//             const product = state.cartItems.find(x=> x._id === item._id);
//             if(product){
//                return { 
//                    cartItems: 
//                    state.cartItems.map( x => x._id === product._id? item :x)
//                 };
//             }
//             return { cartItems: [...state.cartItems, item]};
//         case CART_REMOVE_ITEM:
//             return {
//                 ...state
//                 ,cartItems: state.cartItems.filter(x=>x._id!== action.payload)}
//         case CART_INCREASE:
//             let tempCart =state.cartItems.map(item=>{
//                 if(item._id === action.payload){
//                    item ={...item, count: item.count +1}
//                 }
//                 return item;
//             })
//             return {
//                 ...state,cartItems:tempCart}
//             //console.log(action.payload);
//         case CART_DECREASE:
//             let tempCart1 = state.cartItems.map(item=>{
//                 if(item._id === action.payload){
//                     if(item.count===1){
//                         item ={...item,count:1}
//                     }else{
//                         item ={...item,count:item.count -1}
//                     } 
//                 }
//                 return item;
//             })
//             return {
//                 ...state,cartItems:tempCart1 }
//         case CART_SAVE_SHIPPING:
//             return {...state, shipping:action.payload}
//         case CART_SAVE_PAYMENT:
//             return {...state, payment:action.payload}
//         case CART_ADD_FAIL:
//             return { loading : false, error: action.payload}
//         default:
//                 return state
//     }
// }
function cartPostReducer(state={}, action){
    switch(action.type){
        case CART_ADD_POST_REQUEST:
            return {loading : true};
        case CART_ADD_POST_SUCCESS:
            return {loading : false, success:true};
        case CART_ADD_POST_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
function cartGetReducer (state = { cartItems: []}, action){
    switch(action.type){
        case CART_LIST_REQUEST:
            return {loading: true, cartItems:[]};
        case  CART_LIST_SUCCESS:
            return { loading : false , cartItems: action.payload};
        case CART_LIST_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}

function removeCartPostReducer(state={}, action){
    switch(action.type){
        case CART_REMOVE_POST_REQUEST:
            return {loading : true};
        case CART_REMOVE_POST_SUCCESS:
            return {loading : false, success : true};
        case CART_REMOVE_POST_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}

export {cartReducer
     ,cartPostReducer
     ,cartGetReducer
    , removeCartPostReducer
}