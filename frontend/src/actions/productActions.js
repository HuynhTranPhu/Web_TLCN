import { 
PRODUCT_LIST_REQUEST,
PRODUCT_LIST_SUCCESS,
PRODUCT_LIST_FAIL, 
PRODUCT_DETAILS_REQUEST, 
PRODUCT_DETAILS_SUCCESS,
PRODUCT_DETAILS_FAIL,
FILTER_PRODUCTS_BY_SIZE,
ORDER_PRODUCTS_BY_PRICE, 
} 
from  '../constants/productConstants';
//import apiUrl from '../components/Config/apiUrl/apiUrl';
import axios from 'axios'

const listProducts = () => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST});
         //const {data} =await axios.get("/api/products");
         const {data} = await axios.get('/product');
        //console.log({data});
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){

        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }

}




const detailsProduct = (productId) => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await axios.get("/product/" + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload:data });
    }
    catch(error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message})
    }
}
// const filterProducts  = (products,category) =>  (dispatch) =>{
    
//         dispatch({
//             type: FILTER_PRODUCTS_BY_SIZE, 
//             payload: {
//                 category: category,
//                 products:
//                 category === ""
//                     ? products
//                     : products.filter(
//                         (x) => x.category.indexOf(category.toUpperCase()) >= 0
//                       )
//               }
//         });   
// }
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
    //filterProducts,
    sortProducts
};