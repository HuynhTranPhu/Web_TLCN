import React, {useEffect, useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../../actions/productActions';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';

import Brand from '../../Brand/Brand';
import Review from '../../Review/Review';
import HeaderSlider from '../../Header/HeaderSlider/HeaderSlider';
import {addCart, addToCart } from '../../../actions/cartAction';
import  BottomBar from '../../Common/BottomBar/index'
import Feature from '../../Common/Feature/index'
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';

function HomeScreen(props){
    
    const productList = useSelector(state => state.productList);
    const {products,loading , error} = productList;
    // const addCartPost = useSelector(state => state.cartPost);
    // const {success} = addCartPost;

    // const cart = useSelector(state => state.cart);
    // const {cartItems} = cart;
    
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;
    const dispatch = useDispatch();

 
    // const [cartIte,setcart] =useState(0);
  
    // const addtocartcount= ()=>{
    //     const cartupdate = cartIte+1;
    //     setcart(cartupdate)   
    // }
 

    const feature = [ {title:'Secure Payment',content:'You can chose payments', icon:'fab fa-cc-mastercard'},
                    {title:'Worldwide Delivery',content:'Delivery anywhere in the world',icon:'fa fa-truck'},
                    {title:'90 Days Return',content:'You can return orders in 90 days', icon:'fas fa-sync'},
                    {title:'24/7 Support',content:'Our staff always support you if you want', icon:'fa fa-comments'}
                    ]
    

    const addToCartHandler = (id,name,price,image) =>{
        let a = {_id: id,
            name: name,
            price: price,
            img: image,
            quantity: 1
        };
        let carts =[a];
        
        if(!userInfo){
            props.history.push("/login");
        }else{
            dispatch(addCart(userInfo.newUser._id,carts));
            // if(success){
            dispatch(addToCart(id,1));   
            // }else{
            //     alert('Something is wrong');
            // }
        }
    }
  
    
   
    useEffect(() => {
        dispatch(listProducts());
        
        return () => {
        };
    }, [])
    const settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    // const handleAddToCart = (productId) =>{
    //     // //  props.history.push("/cart/" + `${productId}` +"?qty=" + 1)
    //     //  props.history.push(`/cart/${productId}?qty=1`)
    //     // console.log(props);
    // }
    return(
        loading?(
            <LoadingBox></LoadingBox>
        ):error? (
            <MessageBox variant="danger">{error}</MessageBox>
        ):
        <div>
            <TopBar/>
            <NavBar/>
            {/* <BottomBar cartItems={cartIte} ></BottomBar> */}
            <BottomBar  ></BottomBar>
             <div className="header">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3">
                              <nav className="navbar bg-light">
                                  <ul className="navbar-nav">
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/"><i className="fa fa-home"></i>Home</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-shopping-bag"></i>Best Selling</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-plus-square"></i>New Arrivals</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-female"></i>Fashion & Beauty</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-child"></i>Kids & Babies Clothes</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link"to="/product-list"><i className="fas fa-tshirt"></i>Men & Women Clothes</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fas fa-mobile"></i>Gadgets & Accessories</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-microchip"></i>Electronics & Accessories</Link>
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                          <HeaderSlider/>
                          <div className="col-md-3">
                              <div className="header-img">
                                  <div className="img-item">
                                      <img src="/img/category-1.jpg" />
                                      <Link className="img-text" to="/product-list">
                                          <p>Woman Fashion 2021</p>
                                      </Link>
                                  </div>
                                  <div className="img-item">
                                      <img src="/img/category-2.jpg" />
                                      <Link className="img-text" to="/product-list">
                                          <p>Kids Fashion 2021</p>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Main Slider End -->      
              
              <!-- Brand Start --> */}
              <Brand/>
              {/* <!-- Brand End -->      
              
              <!-- Feature Start--> */}
              <div className="feature">
                  <div className="container-fluid">
                      <div className="row align-items-center">
                          {feature.map(item=><Feature title={item.title}content={item.content} icon={item.icon}></Feature>)}
                      
                      </div>
                  </div>
              </div>
              {/* <!-- Feature End-->      
              
              <!-- Category Start--> */}
              <div className="category">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3">
                              <div className="category-item ch-400">
                                  <img src="img/category-3.jpg" />
                                  <Link className="category-name" >
                                      <p>Hot trend in 2021</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-250">
                                  <img src="img/category-4.jpg" />
                                  <Link className="category-name" >
                                      <p>Hot trend in 2021</p>
                                  </Link>
                              </div>
                              <div className="category-item ch-150">
                                  <img src="img/category-5.jpg" />
                                  <Link className="category-name" >
                                      <p>Hot trend in 2021</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-150">
                                  <img src="img/category-6.jpg" />
                                  <Link className="category-name" >
                                      <p>Hot trend in 2021</p>
                                  </Link>
                              </div>
                              <div className="category-item ch-250">
                                  <img src="img/category-7.jpg" />
                                  <Link className="category-name" >
                                      <p>Hot trend in 2021</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-400">
                                  <img src="img/category-8.jpg" />
                                  <a className="category-name" >
                                      <p>Hot trend in 2021</p>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Category End-->       
              
              <!-- Call to Action Start --> */}
              <div className="call-to-action">
                  <div className="container-fluid">
                      <div className="row align-items-center">
                          <div className="col-md-6">
                              <h1>call us for any queries</h1>
                          </div>
                          <div className="col-md-6">
                              <a href="tel:0123456789">+034-304-8571</a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Call to Action End -->       
              
              <!-- Featured Product Start --> */}
               <div className="featured-product product">
                  <div className="container-fluid">
                      <div className="section-header">
                          <h1>Featured Product</h1>
                      </div>
                      {/* <div className="align-items-center "> */}
                        <Slider {...settings}>
                        {
                            products.map( (product) =>
                                <div className="col-lg-12" key={product._id}>
                                    <div className="product-item">
                                        <div className="product-title">
                                            <Link to={'/product-detail/' + product._id}>{product.name}</Link>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            {
                                                <img src={product.img} alt="Product "/>
                                            }  
                                            <div className="product-action">   
                                                    <Link to={'/product-detail/' + product._id}><i className="fas fa-eye" ></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>{product.price}</h3>                                          
                                            {
                                                product.quantity>0 && 
                                                <a className="btn" 
                                                    onClick={()=>addToCartHandler( product._id,product.name,product.price ,product.img)} >
                                                    <i className="fa fa-shopping-cart"></i>Add To Cart</a>
                                            }
                                        </div>
                                    </div>
                                </div> 
                                )
                        } 
                        </Slider>   
                      {/* </div> */}
                  </div>
              </div>
              {/* <!-- Featured Product End -->           
              
              <!-- Recent Product Start --> */}
              {/* <div className="recent-product product">
                  <div className="container-fluid">
                      <div className="section-header">
                          <h1>Recent Product</h1>
                      </div> */}
                      {/* <div className="align-items-center"> */}
                          {/* <Slider {...settings}>
                            {
                                products.map( (product) =>
                                <div className="col-lg-12" key={product._id}>
                                    <div className="product-item">
                                        <div className="product-title">
                                            <Link to={'/product-detail/' + product._id}>{product.name}</Link>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            {
                                                <img src={product.img} alt="Product "/>
                                            }  
                                            <div className="product-action">
                                                  <Link  to={'/product-detail/' + product._id}><i className="fas fa-eye"  ></i></Link>  
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>{product.price}</h3>
                                            {
                                                product.count>0 && 
                                                <a className="btn" onClick={()=>{ props.history.push(`/cart/${product._id}`)}}>
                                                    <i className="fa fa-shopping-cart"></i>Add To Cart</a>
                                            }
                                        </div>
                                    </div>
                                </div>  )
                            } 
                         </Slider>  */}
                      {/* </div> */}
                  {/* </div>
              </div> */}
              <Review/>
              <FooterPage/>
              
              <ScrollToTopBtn />
        </div>
    )
}
export default HomeScreen;