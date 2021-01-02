import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../constants/productConstants";

function productListReducer (state = { products: [],filteredItems: [], category: "",sort: ""}, action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products:[]};
        case  PRODUCT_LIST_SUCCESS:
            return { loading : false , products: action.payload, filteredItems:action.payload};
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                  //...state,
                  filteredItems: action.payload.products,
                  category: action.payload.category,
                };
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                    ...state,
                    filteredItems: action.payload.items,
                    sort: action.payload.sort,
                };
        case PRODUCT_LIST_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
function productDetailsReducer (state = { product: {}}, action){
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true};
        case  PRODUCT_DETAILS_SUCCESS:
            return { loading : false , product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
function productDeleteReducer (state = { product: {}}, action){
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return {loading: true};
        case  PRODUCT_DELETE_SUCCESS:
            return { loading : false , product: action.payload, success: true};
        case PRODUCT_DELETE_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
function productSaveReducer (state = { product: {}}, action){
    switch(action.type){
        case PRODUCT_SAVE_REQUEST:
            return {loading: true};
        case  PRODUCT_SAVE_SUCCESS:
            return { loading : false , success: true, product: action.payload};
        case PRODUCT_SAVE_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}

export {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer}