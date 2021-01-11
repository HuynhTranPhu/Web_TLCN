import { PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL, 
    ORDER_PRODUCTS_BY_PRICE,
     CATEGORY_LIST_REQUEST, 
     CATEGORY_LIST_SUCCESS,
      CATEGORY_LIST_FAIL, 
      FILTER_PRODUCTS_BY_CATEGORY, 
      SEARCH_FILTER_PRODUCTS, 
      PRODUCT_LIST_SUCCESS_OF_PAGE,
      SEARCH_REQUEST,
      SEARCH_SUCCESS,
      SEARCH_FAIL,
      PRODUCT_LIST_REQUEST_OF_PAGE} from "../constants/productConstants";

//List product
function productListReducer (state = { products: [],filteredItems: [], cate: "",sort: "",search:"",numberOfPages:0}, action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products:[]};
        case PRODUCT_LIST_REQUEST_OF_PAGE:
            return {loading: true, filteredItems:[]};
        case  PRODUCT_LIST_SUCCESS:
            return { loading : false , products: action.payload, filteredItems:action.payload};
        case  PRODUCT_LIST_SUCCESS_OF_PAGE:
            return { loading : false , products: action.payload.data,
                 filteredItems:action.payload.data,numberOfPages:action.payload.totalPage};
        case FILTER_PRODUCTS_BY_CATEGORY:
            return {
                  ...state,
                  filteredItems: action.payload.items,
                  cate: action.payload.category,
                };
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                    ...state,
                    filteredItems: action.payload.items,
                    sort: action.payload.sort,
                };
        case SEARCH_FILTER_PRODUCTS:
            return {
                    ...state,
                    filteredItems: action.payload.items,
                    search: action.payload.search,
                };
        case PRODUCT_LIST_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
//Category List
function categoryListReducer(state={category:[]},action){
    switch(action.type){
        case CATEGORY_LIST_REQUEST:
            return {loading: true, category:[]};
        case  CATEGORY_LIST_SUCCESS:
            return { loading : false , category: action.payload.data};
    
        case CATEGORY_LIST_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
function searchHeaderReducer(state={productSearch:[]},action){
    switch(action.type){
        case SEARCH_REQUEST:
            return {loading: true, productSearch:[]};
        case  SEARCH_SUCCESS:
            return { loading : false , productSearch: action.payload};
    
        case SEARCH_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
// Detail products
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



export {productListReducer, productDetailsReducer,categoryListReducer,searchHeaderReducer}