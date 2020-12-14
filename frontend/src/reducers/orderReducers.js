import { ADD_ORDER_FAIL, ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS } from "../constants/orderContants";

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
export {orderPostReducer};