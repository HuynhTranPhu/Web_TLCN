import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, listCategory, listProductsOfPage, searchFilterProducts, sortProducts } from '../../../actions/productActions';
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
    const {products,filteredItems,cate,sort,search,loading , error,numberOfPages} = productList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;

    const categories = useSelector(state => state.categoryList);
    const {category} = categories;

    // const addCartPost = useSelector(state => state.cartPost);
    // const {success} = addCartPost;

    //pagination
    const [pageNumber, setPageNumber] = useState(1);



    const pages = new Array(numberOfPages).fill(null).map((v, i) => i+1);
    console.log(pageNumber);
    console.log(numberOfPages);
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsOfPage(pageNumber))
        //dispatch(listProducts());
        dispatch(listCategory());
        return () => {
        };
    }, [pageNumber])
    //Add to cart
    const handleAddToCart = (id,name,price, image) =>{
        let a = {_id: id,
            name: name,
            price: price,
            img: image,
            quantity: 1};
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
    
    const gotoPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
      };
    
      const gotoNext = () => {
        setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
      };
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
                                            {`${filteredItems.length} products found- pages ${pageNumber}`}
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
                                filteredItems.length===0?(                                                 
                                    <div className="empty-cart1 ">
                                        <img className="empty-cart-img" src="/images/emptyCart.png" alt="Product" />
                                        <p className="empty-cart-note">OOPS!!!Products you search is not found!</p>
                                        <Link className="empty-cart-shopping" to="/">Go to Shopping</Link>
                                    </div>
                                    ):
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
                       { filteredItems.length>0 &&
                        <div className="col-md-12 pagination justify-content-center">
                            <button onClick={gotoPrevious}>Previous</button>
                            {pages.map((pageIndex) => (
                                <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
                                {pageIndex }
                                </button>
                            ))}
                            <button onClick={gotoNext}>Next</button>
                        </div>
                       
                       }
                       
                        
                        {/* Pagination Start */}
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
export default ProductScreen;