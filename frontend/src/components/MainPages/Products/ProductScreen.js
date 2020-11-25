import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../actions/productActions';
// import { detailsProduct } from '../../../actions/productActions';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import Brand from '../../Brand/Brand';



function ProductScreen(props){
    const productList = useSelector(state => state.productList);
    const {products,loading , error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
        };
    }, [])
    // const [qty, setQty] = useState(1);
    // const productDetails = useSelector(state => state.productDetails);
    // const {product, loading, error } = productDetails;
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(detailsProduct(props.match.params.id));
    //     return () => {
    //         //
    //     };
    // }, [])
    // const handleAddToCart = () =>{
    //     props.history.push("/cart/" +props.match.params.id +"?qty=" + qty)
    // }

    return <div>
        {/* <div className="back-to-result">
            <Link to="/"> &#8701; Back to result</Link>
        </div> */}
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
            //                 Status:{product.countInStock > 0? 
            //                 (
            //                     <span className="success">In Stock</span>
            //                 ):(
            //                     <span className="danger">Unavailable</span>
            //                 )}
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
            
        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-view-top">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="product-search">
                                                <input type="email" defaultValue="Search" />
                                                <button><i className="fa fa-search" /></button>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="product-short">
                                                <div className="dropdown">
                                                    <div className="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <Link to="#" className="dropdown-item">Newest</Link>
                                                        <Link to="#" className="dropdown-item">Popular</Link>
                                                        <Link to="#" className="dropdown-item">Most sale</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="product-price-range">
                                                <div className="dropdown">
                                                <div className="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <Link to="#" className="dropdown-item">$0 to $50</Link>
                                                        <Link to="#" className="dropdown-item">$51 to $100</Link>
                                                        <Link to="#" className="dropdown-item">$101 to $150</Link>
                                                        <Link to="#" className="dropdown-item">$151 to $200</Link>
                                                        <Link to="#" className="dropdown-item">$201 to $250</Link>
                                                        <Link to="#" className="dropdown-item">$251 to $300</Link>
                                                        <Link to="#" className="dropdown-item">$301 to $350</Link>
                                                        <Link to="#" className="dropdown-item">$351 to $400</Link>
                                                        <Link to="#"className="dropdown-item">$401 to $450</Link>
                                                        <Link to="#" className="dropdown-item">$451 to $500</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                products.map((product) =>

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
                                                <Link to={'/product-detail/' + product._id}>
                                                    <img src={product.image} alt="Product Image" />
                                                </Link>
                                                <div className="product-action">
                                                    <Link to="#"><i className="fa fa-cart-plus" /></Link>             
                                                </div>
                                            </div>
                                            <div className="product-price">
                                            <h3><span>$</span>{product.price}</h3>
                                            {
                                                product.countInStock>0 && 
                                                <a className="btn" onClick={()=>{ props.history.push(`/cart/${product._id}?qty=1`)}}>
                                                    <i className="fa fa-shopping-cart"></i>Buy Now</a>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            
                        </div>
                        {/* Pagination Start */}
                        <div className="col-md-12">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <Link className="page-link" to="#" tabIndex={-1}>Previous</Link>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">Next</Link>
                                </li>
                                </ul>
                            </nav>
                        </div>
                        {/* Pagination Start */}
                    </div>           
                    {/* <div className="sidebar-widget brands">
                        <h2 className="title">Our Brands</h2>
                        <ul>
                            <li><a href="#">Nulla </a><span>(45)</span></li>
                            <li><a href="#">Curabitur </a><span>(34)</span></li>
                            <li><a href="#">Nunc </a><span>(67)</span></li>
                            <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                            <li><a href="#">Fusce </a><span>(89)</span></li>
                            <li><a href="#">Sagittis</a><span>(28)</span></li>
                        </ul>
                    </div> */}
                    {/* <div className="sidebar-widget tag">
                        <h2 className="title">Tags Cloud</h2>
                        <a href="#">Lorem ipsum</a>
                        <a href="#">Vivamus</a>
                        <a href="#">Phasellus</a>
                        <a href="#">pulvinar</a>
                        <a href="#">Curabitur</a>
                        <a href="#">Fusce</a>
                        <a href="#">Sem quis</a>
                        <a href="#">Mollis metus</a>
                        <a href="#">Sit amet</a>
                        <a href="#">Vel posuere</a>
                        <a href="#">orci luctus</a>
                        <a href="#">Nam lorem</a>
                    </div> */}
                </div>
                {/* Side Bar End */}
            </div>
        </div>)
    }
    <Brand/>
    </div>
}
export default ProductScreen;