import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, listCategory, listProducts, searchFilterProducts, sortProducts } from '../../../actions/productActions';
// import { detailsProduct } from '../../../actions/productActions';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import Brand from '../../Brand/Brand';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import { addCart } from '../../../actions/cartAction';



function ProductScreen(props){
    const productList = useSelector(state => state.productList);
    const {products,filteredItems,cate,sort,search,loading , error} = productList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;

    const categories = useSelector(state => state.categoryList);
    const {category} = categories;

    const addCartPost = useSelector(state => state.cartPost);
    const {success} = addCartPost;
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        dispatch(listCategory());
        return () => {
        };
    }, [])
    console.log(cate)
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
            if(success){
                props.history.push(`/cart/${id}`); 
            }else{
                alert('Something is wrong');
            }
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
                            <div className="col-md-12">
                                <div className="product-view-top">
                                    <div className="row">
                                        <div className="col-md-3">
                                            {`${filteredItems.length} products found`}
                                        </div>
                                        <div className="col-md-3">
                                            <div className="product-search">
                                                    <input type="text" placeholder="Search"
                                                    value={search}
                                                    onChange={e=>
                                                       {
                                                           dispatch(searchFilterProducts(
                                                               products,
                                                               e.target.value
                                                           ))
                                                       }
                                                    }
                                                    />
                                                    <button><i class="fa fa-search"></i></button>    
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="product-filter">
                                                <select
                                                           
                                                            value={cate}
                                                            onChange={(e) => {
                                                                dispatch(filterProducts(
                                                                    products,
                                                                    e.target.value
                                                                    )) 
                                                            }}
                                                            >
                                                            <option value="">All Products</option>
                                                            {
                                                                category.map(category => (
                                                                    <option value={category._id} key={category._id}>
                                                                        {category.name}
                                                                    </option>
                                                                ))
                                                            }
                                                        </select>
                                            </div>
                                                    
                                              
                                                
                                           
                                        </div>
                                        <div className="col-md-3">
                                           
                                              <div className="product-filter">
                                                    <select
                                                        className="product-search"
                                                        value={sort}
                                                        onChange={(e) => {
                                                        dispatch( sortProducts(
                                                            filteredItems,
                                                            e.target.value
                                                            ));
                                                        }}
                                                        >
                                                            <option value="">Sort by</option>
                                                            <option value="lowestprice">Lowest to highest</option>
                                                            <option value="highestprice">Highest to lowest</option>
                                                    </select>
                                              </div>
                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                filteredItems.map((product) =>

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
    <FooterPage/>
    <ScrollToTopBtn />
    </div>
}
export default ProductScreen;