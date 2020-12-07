import axios from 'axios';
import Cookie from 'js-cookie';
import {
    USER_UPDATE_PASSWORD_REQUEST,
    USER_UPDATE_PASSWORD_SUCCESS,
    USER_UPDATE_PASSWORD_FAIL,
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
    USER_UPDATE_PROFILE_FAIL, 
    USER_UPDATE_PROFILE_SUCCESS,
    FORGOT_EMAIL_SUCCESS,
    FORGOT_EMAIL_FAIL,
    RESET_FORGOT_PASSWORD,
    SET_EMAIL_FORGOTPASSWORD,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAIL,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL} 
from  '../constants/userConstant';

const login = (email,password) => async (dispatch) =>{
    dispatch({type: USER_SIGNIN_REQUEST, payload:{email, password}});
    try{
        const {data} = await axios.post("/user/login", {email,password});
        dispatch({type:USER_SIGNIN_SUCCESS,payload:data});
        //console.log(data);
        Cookie.set('userInfo', JSON.stringify(data));
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:USER_SIGNIN_FAIL,payload:message});
    }
}
const logout = () =>(dispatch) =>{
    Cookie.remove('userInfo');
    Cookie.remove('cartItems');
    Cookie.remove('shipping');
    dispatch({type: USER_SIGNOUT});
}


const register = (name, email, password, repassword) => async (dispatch) =>{
    dispatch({type: USER_REGISTER_REQUEST, payload:{name, email, password,repassword}});
        try{
            const {data} = await axios.post("/user/register", {name, email,password,repassword});
            dispatch({type:USER_REGISTER_SUCCESS,payload:data});
            Cookie.set('userInfo', JSON.stringify(data));
        }catch(error){
            const message=
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            dispatch({type:USER_REGISTER_FAIL,payload:message});
        }  
}

const detailsUser =(userId) => async (dispatch,getState)=>{
    dispatch({type: USER_DETAIL_REQUEST, payload: userId});
    const { userLogin :{userInfo}}= getState();
    try{    
        const {data} = await axios.get("/user/"+userId
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type: USER_DETAIL_SUCCESS, payload:data});
        console.log(data);

    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:USER_DETAIL_FAIL, payload: message});
    }
}
const updateUserProfile =(email,name, id) =>async (dispatch,getState) =>{
    dispatch ({type:USER_UPDATE_PROFILE_REQUEST, payload:{email,name, id}});
    const {userLogin:{userInfo}} =getState();
    try{
        const {data} = await axios.put("/user/updateinfor",{email,name, id}
        ,{
            headers : {Authorization: `${userInfo.token}`},
        }
        );
        //console.log(data);
        dispatch({type:USER_UPDATE_PROFILE_SUCCESS, payload:data});
        dispatch({type:USER_SIGNIN_SUCCESS, payload:data})
        Cookie.set('userInfo', JSON.stringify(data));

    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:USER_UPDATE_PROFILE_FAIL, payload:message})
    }
}
const updateUserPassword =(oldpassword, newpassword, id) =>async (dispatch,getState) =>{
    dispatch ({type:USER_UPDATE_PASSWORD_REQUEST, payload:{oldpassword,newpassword, id}});
    const {userLogin:{userInfo}} =getState();
    try{
        const {data} = await axios.put("/user/updatepassword",{oldpassword,newpassword, id}
        ,{
            headers : {Authorization: `${userInfo.token}`},
        }
        );
        //console.log(data);
        dispatch({type:USER_UPDATE_PASSWORD_SUCCESS, payload:data});
        //dispatch({type:USER_SIGNIN_SUCCESS, payload:data})
        //Cookie.set('userInfo', JSON.stringify(data));

    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:USER_UPDATE_PASSWORD_FAIL, payload:message})
    }
}
///*******forgot password************///
export const forgotEmailSuccess = () => ({
    type: FORGOT_EMAIL_SUCCESS
})
export const forgotEmailFail = () => ({
    type: FORGOT_EMAIL_FAIL
})
export const resetForgotPassword = () => ({
    type:RESET_FORGOT_PASSWORD
})
export const setEmailForgotPassword = (email) => ({
    type:SET_EMAIL_FORGOTPASSWORD,
    email
})
export const submitForgotPassword = (email) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('/user/request/forgotpassword/' +email)
    }
    catch (err) {
        dispatch(forgotEmailFail())
        return
    }
    dispatch(setEmailForgotPassword(res.data.email))    
    dispatch(forgotEmailSuccess())
}   
export const submitOTP = (otp) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('/user/verify/forgotpassword', {
            email: getState().forgotPassword.email,
            otp: otp,
        })
    }
    catch (err) {
        dispatch(verifyOTPFAIL())
        return
    }
    dispatch(verifyOTPSuccess(otp))

}
export const verifyOTPSuccess = (otp) => ({
    type: VERIFY_OTP_SUCCESS,
    otp
})
export const verifyOTPFAIL = () => ({
    type:VERIFY_OTP_FAIL
})

export const submitEnterNewPassword = (newPassword) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('/user/forgotpassword', {
            email: getState().forgotPassword.email,
            otp: getState().forgotPassword.otp,
            newPassword: newPassword
        })
    }
    catch (err) {
        dispatch(forgotPasswordFail())
        return
    }
    dispatch(forgotPasswordSuccess())
}

export const forgotPasswordSuccess = () => ({
    type:FORGOT_PASSWORD_SUCCESS
})
export const forgotPasswordFail = () => ({
    type: FORGOT_PASSWORD_FAIL
})


export {login, register, logout, detailsUser, updateUserProfile, updateUserPassword};