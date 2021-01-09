import { 
PRODUCT_LIST_REQUEST,
PRODUCT_LIST_SUCCESS,
PRODUCT_LIST_FAIL, 
PRODUCT_DETAILS_REQUEST, 
PRODUCT_DETAILS_SUCCESS,
PRODUCT_DETAILS_FAIL,
FILTER_PRODUCTS_BY_CATEGORY,
ORDER_PRODUCTS_BY_PRICE,
CATEGORY_LIST_REQUEST,
CATEGORY_LIST_SUCCESS,
CATEGORY_LIST_FAIL,
SEARCH_FILTER_PRODUCTS, 
PRODUCT_LIST_SUCCESS_OF_PAGE,
SEARCH_REQUEST,
SEARCH_SUCCESS,
SEARCH_FAIL
} 
from  '../constants/productConstants';
//import apiUrl from '../components/Config/apiUrl/apiUrl';
import axios from 'axios'

const listProductsOfPage = (pageNumber) => async (dispatch) =>{
    try{
        //dispatch({type: PRODUCT_LIST_REQUEST});
         //const {data} =await axios.get("/api/products");
         const {data} = await axios.get('/product/getproduct/'+ pageNumber);
        console.log({data});
        dispatch({type: PRODUCT_LIST_SUCCESS_OF_PAGE, payload: data});
        
    }  
    catch(error){

        //dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }

}
const listProducts = () => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST});
         //const {data} =await axios.get("/api/products");
         const {data} = await axios.get('/product');
        //console.log({data});
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: PRODUCT_LIST_FAIL, payload: message});
    }

}
const searchHeader = (value) => async (dispatch) =>{
    try{
        dispatch({type: SEARCH_REQUEST, payload: value});
         //const {data} =await axios.get("/api/products");
         const {data} = await axios.get('/product/search/'+value);
        console.log(data);
        dispatch({type: SEARCH_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: SEARCH_FAIL, payload:message});
    }

}
const listCategory = () => async (dispatch) =>{
    try{
        dispatch({type: CATEGORY_LIST_REQUEST});
         //const {data} =await axios.get("/api/products");
         const {data} = await axios.get('/category');
        //console.log({data});
        dispatch({type: CATEGORY_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: CATEGORY_LIST_FAIL, payload: message});
    }

}




const detailsProduct = (productId) => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await axios.get("/product/" + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload:data });
    }
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: message})
    }
}
const searchFilterProducts  = (products,search) =>  (dispatch) =>{
    
  dispatch({
      type: SEARCH_FILTER_PRODUCTS, 
      payload: {
        search: search,
          items:
          products === ""
              ? products
              : products.filter(
                  (x) => x.name.toLowerCase().includes(search.toLowerCase())
                ) 
        }
       
  }); 
  //console.log(category)
  
}
const filterProducts  = (products,category) =>  (dispatch) =>{
    
        dispatch({
            type: FILTER_PRODUCTS_BY_CATEGORY, 
            payload: {
                category: category,
                items:
                category === ""
                    ? products
                    : products.filter(
                        (x) => x.id_category===category
                      )      
              }
        }); 
        //console.log(category)
        
}
const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
      products.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    dispatch({
      type: ORDER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: products,
      },
    });
  };


export {listProducts, detailsProduct,
    filterProducts,
    sortProducts,
    listCategory,
    searchFilterProducts,
    listProductsOfPage,
    searchHeader
};