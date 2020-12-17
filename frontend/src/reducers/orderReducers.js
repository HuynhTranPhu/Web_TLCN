import { ADD_ORDER_FAIL, ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS, HISTORY_FAIL, HISTORY_REQUEST, HISTORY_SUCCESS } from "../constants/orderContants";

function orderPostReducer(state={}, action){
    switch(action.type){
        case ADD_ORDER_REQUEST:
            return {loading : true};
        case ADD_ORDER_SUCCESS:
            return {loading : false, success:true};
        case ADD_ORDER_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}


function historyReducer (state = { history:[]}, action){
    switch(action.type){
        case HISTORY_REQUEST:
            return {loading: true, history:[]};
        case  HISTORY_SUCCESS:
            return { loading : false , history: action.payload};
        case HISTORY_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
export {orderPostReducer
    ,historyReducer
};