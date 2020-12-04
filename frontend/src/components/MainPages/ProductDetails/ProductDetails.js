import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../../../actions/productActions';
import { listProducts } from '../../../actions/productActions';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import Brand from '../../Brand/Brand';



function ProductDetailScreen(props){
   // const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error } = productDetails;
    const productList = useSelector(state => state.productList);
    const {products} = productList;
    const dispatch = useDispatch();


    const settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
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

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        dispatch(listProducts());
        return () => {
            //
        };
    }, [])
    const handleAddToCart = () =>{
        props.history.push("/cart/" +props.match.params.id )
    }

    return <div>
        {loading?(
            <LoadingBox></LoadingBox>
        ):
        error? (
            <MessageBox variant="danger">{error}</MessageBox>
        ):
        (
            // <div className="details">
            //     <div className="details-image">
            //         <img src={product.image} alt="product"></img>
            //     </div>
            //     <div className="details-info">
            //         <ul>
            //             <li>
            //                 <h4>{product.name}</h4>
            //             </li>
            //             <li>
            //                 {product.rating} Stars ({product.numReviews} Reviews)
            //             </li>
            //             <li>
            //                 Price: <b> ${product.price}</b>
            //             </li>
            //             <li>
            //                 Description:
            //                 <div>               
            //                     {product.description}   
            //                 </div>
            //             </li>
            //         </ul>
            //     </div>
            //     <div className="details-action">
            //         <ul>
            //             <li>
            //                 Price: ${product.price}
            //             </li>
            //             <li>
                            // Status:{product.countInStock > 0? 
                            // (
                            //     <span className="success">In Stock</span>
                            // ):(
                            //     <span className="danger">Unavailable</span>
                            // )}
            //             </li>
            //             <li>
            //                 Qty:<select value={qty} onChange={(e) =>{setQty(e.target.value)}}>
            //                     {[...Array(product.countInStock).keys()].map(x =>
            //                         <option key={x+1} value={x+1}>{x+1}</option>
            //                     )}
            //                 </select>
            //             </li>
            //             <li>
            //                 {
            //                     product.countInStock>0 && 
            //                     <button onClick={handleAddToCart} className="button">
            //                         Add to Cart
            //                     </button>
            //                 }
                            
            //             </li>
            //         </ul>

            //     </div>
            // </div>
            <div className="product-detail">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-lg-10">
                                <div className="product-detail-top">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <div className="product-slider-single ">
                                                <img src={product.img} alt="Product" />  
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="product-content">
                                                <div className="title">
                                                    <h2>{product.name}</h2>
                                                </div>
                                                <div className="ratting">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <div className="price">
                                                    <h4>Price:</h4>
                                                    <p> ${product.price} <span>$149</span></p>
                                                </div>
                                                <div className="quantity">
                                                    <h4>Status:</h4>       
                                                    {product.count > 0? 
                                                    (
                                                        <span className="success">In Stock</span>
                                                    ):(
                                                        <span className="danger">Unavailable</span>
                                                    )}
                                                </div>
                                                <div className="p-size">
                                                    <h4>Size:</h4>
                                                    <div className="btn-group btn-group-sm">
                                                        <button type="button" className="btn">S</button>
                                                        <button type="button" className="btn">M</button>
                                                        <button type="button" className="btn">L</button>
                                                        <button type="button" className="btn">XL</button>
                                                    </div> 
                                                </div>
                                                <div className="p-color">
                                                    <h4>Color:</h4>
                                                    <div className="btn-group btn-group-sm">
                                                        <button type="button" className="btn">White</button>
                                                        <button type="button" className="btn">Black</button>
                                                        <button type="button" className="btn">Blue</button>
                                                    </div> 
                                                </div>
                                                <div className="action">
                                                {
                                                    product.count>0 && 
                                                    <a className="btn"  onClick={handleAddToCart} ><i className="fa fa-shopping-cart" />Add to Cart</a>
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-detail-bottom">
                                    <div className="col-lg-12">
                                        <ul className="nav nav-pills nav-justified">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="pill" href="#description">Description</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#specification">Specification</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#reviews">Reviews (1)</a>
                                        </li>
                                        </ul>
                                        <div className="tab-content">
                                        <div id="description" className="container tab-pane active">
                                            <h4>Product description</h4>
                                            <p>
                                                {product.description}   
                                            </p>
                                        </div>
                                        <div id="specification" className="container tab-pane fade">
                                            <h4>Product specification</h4>
                                            <ul>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>
                                        <div id="reviews" className="container tab-pane fade">
                                            <div className="reviews-submitted">
                                            <div className="reviewer">Phasellus Gravida - <span>01 Jan 2020</span></div>
                                            <div className="ratting">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                            </p>
                                            </div>
                                            <div className="reviews-submit">
                                            <h4>Give your Review:</h4>
                                            <div className="ratting">
                                                <i className="far fa-star" />
                                                <i className="far fa-star" />
                                                <i className="far fa-star" />
                                                <i className="far fa-star" />
                                                <i className="far fa-star" />
                                            </div>
                                            <div className="row form">
                                                <div className="col-sm-6">
                                                <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="col-sm-6">
                                                <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="col-sm-12">
                                                <textarea placeholder="Review" defaultValue={""} />
                                                </div>
                                                <div className="col-sm-12">
                                                <button>Submit</button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="section-header">
                                    <h1>Related Products</h1>
                                </div>
                                <div className="align-items-center">
                                <Slider {...settings}>
                                    {
                                        products.map((product)=>
                                            <div className="col-lg-12" key={product._id}>
                                                <div className="product-item">
                                                    <div className="product-title">
                                                    <Link to={"/product-detail/"+ product._id}>{product.name}</Link>
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    </div>
                                                    <div className="product-image">
                                                        <img src={product.img}alt="Product" />
                                                        <div className="product-action">
                                                            <Link to={'/product-detail/' + product._id}><i className="fas fa-eye" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product-price">
                                                    <h3><span>$</span>{product.price}</h3>
                                                    <a className="btn" onClick={()=>{ props.history.push(`/cart/${product._id}`)}} ><i className="fa fa-shopping-cart" />Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    
                                </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    <Brand/>
    </div>
}
export default ProductDetailScreen;