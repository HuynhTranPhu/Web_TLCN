import axios from 'axios';
import Cookie from 'js-cookie';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, 
    USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAIL, USER_SIGNOUT, USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS, USER_DETAIL_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_SUCCESS} 
from  '../constants/userConstant';

const login = (email,password) => async (dispatch) =>{
    dispatch({type: USER_SIGNIN_REQUEST, payload:{email, password}});
    try{
        const {data} = await axios.post("/user/login", {email,password});
        dispatch({type:USER_SIGNIN_SUCCESS,payload:data});
        //console.log(data);
        Cookie.set('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({type:USER_SIGNIN_FAIL,payload:error.message});
    }
}
const logout = () =>(dispatch) =>{
    dispatch({type: USER_SIGNOUT});
}


const register = (name, email, password, repassword) => async (dispatch) =>{
    dispatch({type: USER_REGISTER_REQUEST, payload:{name, email, password,repassword}});
        try{
            const {data} = await axios.post("/user/register", {name, email,password,repassword});
            dispatch({type:USER_REGISTER_SUCCESS,payload:data});
            Cookie.set('userInfo', JSON.stringify(data));
        }catch(error){
            dispatch({type:USER_REGISTER_FAIL,payload:error.message});
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
const updateUserProfile =(email,name,oldpassword, newpassword, id) =>async (dispatch,getState) =>{
    dispatch ({type:USER_UPDATE_PROFILE_REQUEST, payload:{email,name,oldpassword, newpassword, id}});
    const {userLogin:{userInfo}} =getState();
    try{
        const {data} = await axios.put("/user/updateinfor",{email,name,oldpassword, newpassword, id}
        ,{
            headers : {Authorization: `${userInfo.token}`},
        }
        );
        console.log(data);
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


export {login, register, logout, detailsUser, updateUserProfile};