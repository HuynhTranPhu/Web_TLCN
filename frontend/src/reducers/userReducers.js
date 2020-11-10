import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_SIGNOUT, USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS, USER_DETAIL_FAIL} from  '../constants/userConstant';
function userLoginReducer(state={}, action){
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading : true};
        case USER_SIGNIN_SUCCESS:
            return {loading : false, userInfo : action.payload};
        case USER_SIGNIN_FAIL:
            return {loading : false, error : action.payload};
        case USER_SIGNOUT:
            return {};
        default : return state;
    }
}

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


export{
    userLoginReducer, userRegisterReducer, userDetailsReducer
}