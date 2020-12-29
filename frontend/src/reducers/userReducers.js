import { CART_ADD_POST_FAIL, CART_ADD_POST_REQUEST, CART_ADD_POST_SUCCESS } from '../constants/cartConstants';
import {
    USER_UPDATE_PASSWORD_REQUEST, 
    USER_UPDATE_PASSWORD_SUCCESS, 
    USER_UPDATE_PASSWORD_FAIL, 
    USER_UPDATE_PASSWORD_RESET, 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNIN_FAIL, 
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAIL, 
    USER_SIGNOUT, 
    USER_DETAIL_REQUEST,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    FORGOT_EMAIL_SUCCESS,
    FORGOT_EMAIL_FAIL,
    SET_EMAIL_FORGOTPASSWORD,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAIL,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_FORGOT_PASSWORD,
    USER_SIGNIN_FB_SUCCESS} from  '../constants/userConstant';
function userLoginReducer(state={}, action){
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading : true};
        case USER_SIGNIN_SUCCESS:
            return {loading : false, userInfo : action.payload};
        case USER_SIGNIN_FB_SUCCESS:
            return {loading : false, userInfo : action.payload};
        case USER_SIGNIN_FAIL:
            return {loading : false, error : action.payload};
        case USER_SIGNOUT:
            return {};
        default : return state;
    }
}
// function userLoginFaceBookReducer(state={}, action){
//     switch(action.type){
//         case USER_SIGNIN_REQUEST:
//             return {loading : true};
//         case USER_SIGNIN_SUCCESS:
//             return {loading : false, userInfo : action.payload};
//         case USER_SIGNIN_FAIL:
//             return {loading : false, error : action.payload};
//         default : return state;
//     }
// }

function userRegisterReducer(state={}, action){
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading : true};
        case USER_REGISTER_SUCCESS:
            return {loading : false, userInfo : action.payload};
        case USER_REGISTER_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}

function userDetailsReducer(state ={loading:true}, action) {
    switch(action.type){
        case USER_DETAIL_REQUEST:
            return {loading : true};
        case USER_DETAIL_SUCCESS:
            return {loading : false, user : action.payload};
        case USER_DETAIL_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
function userUpdateProfileReducer(state ={}, action){
    switch(action.type){
        case USER_UPDATE_PROFILE_REQUEST:
            return {loading:true};
        case USER_UPDATE_PROFILE_SUCCESS:
            return {loading :false, success:true};
        case USER_UPDATE_PROFILE_FAIL:
            return {loading: false, error :action.payload};
        case USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state;
    }
}

function userUpdatePasswordReducer(state ={}, action){
    switch(action.type){
        case USER_UPDATE_PASSWORD_REQUEST:
            return {loading:true};
        case USER_UPDATE_PASSWORD_SUCCESS:
            return {loading :false, success:true};
        case USER_UPDATE_PASSWORD_FAIL:
            return {loading: false, error :action.payload};
        case USER_UPDATE_PASSWORD_RESET:
            return {};
        default:
            return state;
    }
}
////////Add to cart user/////////////
function addCartReducer(state={cart:[]}, action){
    switch(action.type){
        case CART_ADD_POST_SUCCESS:
            const product = action.payload.product;
            const check = state.cart.every(item =>{
                return item._id !== product._id
            })
    
            if(check){
                return{ cart:  ([...state.cart, {...product, quantity: 1}]) }
               

            }else{
                alert("This product has been added to cart.")
            }
            return ;
        case CART_ADD_POST_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}


//********Forgot password********////
function forgotPasswordReducer(state = {}, action){
    switch(action.type) {
        case FORGOT_EMAIL_SUCCESS: {
            return {
                ...state,
                isForgot: true
            }
        }
        case FORGOT_EMAIL_FAIL: {
            return {
                ...state,
                isForgot: false
            }
        }
        case SET_EMAIL_FORGOTPASSWORD: {
            return { 
                ...state,
                email: action.email
            }
        }
        case VERIFY_OTP_SUCCESS: {
            return { 
                ...state,
                verify_otp: true,
                otp: action.otp
            }
        }
        case VERIFY_OTP_FAIL: {
            return {
                ...state,
                verify_otp: false
            }
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                forgotpassword: true
            }
        }
        case FORGOT_PASSWORD_FAIL: {
            return {
                ...state,
                forgotpassword: false
            }
        }
        case RESET_FORGOT_PASSWORD: {
            return {}
        }
        default: return state
    }
}


export{
    userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userUpdatePasswordReducer,
    forgotPasswordReducer,
    addCartReducer,
   // userLoginFaceBookReducer
}