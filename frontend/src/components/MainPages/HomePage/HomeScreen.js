import React, {useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../../actions/productActions';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';

import Brand from '../../Brand/Brand';
import Review from '../../Review/Review';
import HeaderSlider from '../../Header/HeaderSlider/HeaderSlider';
function HomeScreen(props){
    const productList = useSelector(state => state.productList);
    const {products,loading , error} = productList;
    const dispatch = useDispatch();

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
        // <ul className="products">
        // {
        //     products.map(product =>
        //     <li key={product._id}>
        //         <div className="product">
        //             <Link to={'/product/' + product._id}>{
        //                 <img className="product-image" src={product.image} alt="product"/>
        //             }</Link>
                    
        //             <div className="product-name">
        //                 <Link to={'/product/' + product._id}>{product.name}</Link>
        //             </div>
        //             <div className="product-brand">{product.brand}</div>
        //             <div className="product-price">${product.price}</div>
        //             <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
        //         </div>
        //     </li>)
        // }       
        // </ul>
        <div>
             <div className="header">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3">
                              <nav className="navbar bg-light">
                                  <ul className="navbar-nav">
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fa fa-home"></i>Home</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fa fa-shopping-bag"></i>Best Selling</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fa fa-plus-square"></i>New Arrivals</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fa fa-female"></i>Fashion & Beauty</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fa fa-child"></i>Kids & Babies Clothes</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fas fa-tshirt"></i>Men & Women Clothes</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fas fa-mobile"></i>Gadgets & Accessories</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fa fa-microchip"></i>Electronics & Accessories</a>
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                          <HeaderSlider/>
                          <div className="col-md-3">
                              <div className="header-img">
                                  <div className="img-item">
                                      <img src="img/category-1.jpg" />
                                      <a className="img-text" href="">
                                          <p>Woman Fashion 2021</p>
                                      </a>
                                  </div>
                                  <div className="img-item">
                                      <img src="img/category-2.jpg" />
                                      <a className="img-text" href="">
                                          <p>Kids Fashion 2021</p>
                                      </a>
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
                          <div className="col-lg-3 col-md-6 feature-col">
                              <div className="feature-content">
                                  <i className="fab fa-cc-mastercard"></i>
                                  <h2>Secure Payment</h2>
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur elit
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 feature-col">
                              <div className="feature-content">
                                  <i className="fa fa-truck"></i>
                                  <h2>Worldwide Delivery</h2>
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur elit
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 feature-col">
                              <div className="feature-content">
                                  <i className="fas fa-sync"></i>
                                  <h2>90 Days Return</h2>
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur elit
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 feature-col">
                              <div className="feature-content">
                                  <i className="fa fa-comments"></i>
                                  <h2>24/7 Support</h2>
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur elit
                                  </p>
                              </div>
                          </div>
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
                                  <a className="category-name" href="">
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-250">
                                  <img src="img/category-4.jpg" />
                                  <a className="category-name" href="">
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                              <div className="category-item ch-150">
                                  <img src="img/category-5.jpg" />
                                  <a className="category-name" href="">
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-150">
                                  <img src="img/category-6.jpg" />
                                  <a className="category-name" href="">
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                              <div className="category-item ch-250">
                                  <img src="img/category-7.jpg" />
                                  <a className="category-name" href="">
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-400">
                                  <img src="img/category-8.jpg" />
                                  <a className="category-name" href="">
                                      <p>Some text goes here that describes the image</p>
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
                                                <img src={product.image} alt="Product Image"/>
                                            }  
                                            <div className="product-action">   
                                                    <Link to={'/product-detail/' + product._id}><i className="fas fa-eye" ></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>{product.price}</h3>                                          
                                            {
                                                product.countInStock>0 && 
                                                <a className="btn" onClick={()=>{ props.history.push(`/cart/${product._id}?qty=1`)}}><i className="fa fa-shopping-cart"></i>Buy Now</a>
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
              <div className="recent-product product">
                  <div className="container-fluid">
                      <div className="section-header">
                          <h1>Recent Product</h1>
                      </div>
                      {/* <div className="align-items-center"> */}
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
                                                <img src={product.image} alt="Product Image"/>
                                            }  
                                            <div className="product-action">
                                                  <Link  to={'/product-detail/' + product._id}><i className="fas fa-eye"  ></i></Link>  
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>{product.price}</h3>
                                            {
                                                product.countInStock>0 && 
                                                <a className="btn" onClick={()=>{ props.history.push(`/cart/${product._id}?qty=1`)}}><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                            }
                                        </div>
                                    </div>
                                </div>  )
                            } 
                         </Slider> 
                      {/* </div> */}
                  </div>
              </div>
              <Review/>
        </div>
    )
}
export default HomeScreen;