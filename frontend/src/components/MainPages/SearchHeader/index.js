import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { filterProducts, listCategory, listProductsOfPage, searchFilterProducts, sortProducts } from '../../../actions/productActions';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import Brand from '../../Brand/Brand';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import { addCart } from '../../../actions/cartAction';




function SearchScreen(props){
    const searchHeader = useSelector(state => state.searchHeader);
    const {productSearch, loading , error} = searchHeader;

    console.log(productSearch);
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;

  

    // const addCartPost = useSelector(state => state.cartPost);
    // const {success} = addCartPost;

    //pagination
  


   
   
    const dispatch = useDispatch();

    useEffect(() => {
        
        //dispatch(listProducts());
        //dispatch(listCategory());
        return () => {
        };
    }, [])
    //Add to cart
    const handleAddToCart = (id,name,price, image) =>{
        let a = {_id: id,
            name: name,
            price: price,
            img: image,
            count: 1};
        let carts =[a];
        
        if(!userInfo){
            props.history.push("/login");
        }else{
            
            dispatch(addCart(userInfo.newUser._id,carts));
            // if(success){
                props.history.push(`/cart/${id}`); 
            // }else{
            //     alert('Something is wrong');
            // }
        }
       
    }
    
   
    return <div>
        <TopBar/>
        <NavBar/>
        <BottomBar  ></BottomBar>
        {loading?(
            <LoadingBox></LoadingBox>
        ):
        error? (
            <MessageBox variant="danger">{error}</MessageBox>
        ):
        (
            
        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            {  productSearch.length === 0 ?(                                                 
                                <div className="empty-cart1 ">
                                    <img className="empty-cart-img" src="/images/emptyCart.png" alt="Product" />
                                    <p className="empty-cart-note">OOPS!!!Products you search is not found!</p>
                                    <Link className="empty-cart-shopping" to="/">Go to Shopping</Link>
                                </div>
                                ):
                                productSearch.map((product) =>

                                    <div className="col-md-3" key={product._id}>
                                        <div className="product-item">
                                            <div className="product-title">
                                                <Link to={'/product-detail/' + product._id}>{product.name}</Link>
                                                <div className="ratting">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <div className="product-image">
                                                    <img src={product.img} alt="Product" />
                                                    <div className="product-action">
                                                        <Link to={'/product-detail/' + product._id}><i className="fas fa-eye" /></Link>             
                                                    </div>
                                            </div>
                                            <div className="product-price">
                                            <h3><span>$</span>{product.price}</h3>
                                            {
                                                product.count>0 && 
                                                <a className="btn" onClick={()=>handleAddToCart(product._id,product.name,product.price,product.img)}>
                                                    <i className="fa fa-shopping-cart"></i>Buy Now</a>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            
                        </div>
                        
                    </div>           
                    
                </div>
                {/* Side Bar End */}
            </div>
        </div>)
    }
    <Brand/>
    <FooterPage/>
    <ScrollToTopBtn />
    </div>
}
export default SearchScreen;