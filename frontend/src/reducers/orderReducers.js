import {ORDER_RESET, ADD_ORDER_FAIL, ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS, HISTORY_FAIL, HISTORY_REQUEST, HISTORY_SUCCESS, REMOVE_ORDER_FAIL, REMOVE_ORDER_REQUEST, REMOVE_ORDER_SUCCESS, VIEW_HISTORY_FAIL, VIEW_HISTORY_REQUEST, VIEW_HISTORY_SUCCESS } from "../constants/orderContants";

function orderPostReducer(state={}, action){
    switch(action.type){
        case ADD_ORDER_REQUEST:
            return {loading : true};
        case ADD_ORDER_SUCCESS:
            return {loading : false, success:true};
        case ADD_ORDER_FAIL:
            return {loading : false, error : action.payload};
        case ORDER_RESET:
            return{};
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
        case REMOVE_ORDER_SUCCESS:
            return {
                ...state
                ,history: state.history.filter(x=>x._id!== action.payload)}
        default:
            return state;
    }
}
function viewHistoryReducer (state = { viewHistory:[]}, action){
    switch(action.type){
        case VIEW_HISTORY_REQUEST:
            return {loading: true, viewHistory:[]};
        case  VIEW_HISTORY_SUCCESS:
            return { loading : false , viewHistory: action.payload};
        case VIEW_HISTORY_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
function removeOrderReducer(state={}, action){
    switch(action.type){
        case REMOVE_ORDER_REQUEST:
            return {loading : true};
        case REMOVE_ORDER_SUCCESS:
            return {loading : false, success : true};
        case REMOVE_ORDER_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
export {orderPostReducer
    ,historyReducer
    ,viewHistoryReducer
    ,removeOrderReducer
};