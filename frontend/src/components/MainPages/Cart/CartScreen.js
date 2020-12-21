import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, decrease, increase, getCart, removeCart, increaseCart, decreaseCart
    // , addCart, removeCart 
} from '../../../actions/cartAction';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
//import MessageBox from '../../Config/MessageBox';
function CartScreen(props){

    //const cartGet = useSelector(state => state.cartGet);
    //const cart = useSelector(state => state.cartGet);
    //console.log(cart);
    //const {cartItems, loading, error } = cart;
   // console.log(cartItems);
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]):1;
    //let total=0 ;
    //let grandTotal=0;
    const dispatch = useDispatch();
    const removeFromCartHandler = (id) =>{
        if(window.confirm('Do you want to delete this item?')){
            dispatch(removeFromCart(id));
            dispatch(removeCart(userInfo.user.id,id));
        }
        
    }
    const decreaseHandler = (productId) =>{
        dispatch(decrease(productId));
        dispatch(decreaseCart(userInfo.user.id,productId));
    }
    const increaseHandler = (productId) =>{
        dispatch(increase(productId));
        console.log(productId)
        dispatch(increaseCart(userInfo.user.id,productId));
    }
    useEffect(() => { 
        // dispatch(getCart(userInfo.user.id));
        // return () => {
        //     //
        // };
        if(productId){
            dispatch(addToCart(productId,qty));
        }
    },
    //[]
     [dispatch,productId,qty]
    );
    const checkoutHandler = () =>{
        //dispatch(addCart(userInfo.user.id,cartItems, grandTotal));
        //console.log(cartItems,grandTotal);
        props.history.push("/login?redirect=shipping");
    }
    return  (
        <div>
            <TopBar/>
            <NavBar/>
            <BottomBar  ></BottomBar>
            <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8" >
                            <div className="cart-page-inner">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            {
                                                 cartItems.length === 0 ?(                                                  
                                                    <div className="empty-cart">
                                                        <img className="empty-cart-img" src="/images/emptyCart.png" alt="Product" />
                                                        <p className="empty-cart-note">Your shopping cart is empty.</p>
                                                        <Link className="empty-cart-shopping" to="/">Go to Shopping</Link>
                                                    </div>
                                                )
                                                :
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Remove</th>
                                                </tr>
                                            }
                                            
                                        </thead>
                                        <tbody className="align-middle">
                                            {
                                                cartItems.map(item=>
                                                <tr key={item._id}>
                                                    <td>
                                                        <div className="img">
                                                            <Link to={"/product/"+item._id}>
                                                                <img src={item.img} alt="Product" />
                                                                </Link>
                                                            <p><Link to ={"/product/" +item._id}> {item.name}</Link></p>
                                                        </div>
                                                    </td>
                                                    <td>${item.price}</td>
                                                    <td>
                                                        <div className="qty">
                                                            <button className="btn-minus" onClick={()=> decreaseHandler(item._id)}><i className="fa fa-minus" /></button>
                                                            <input type="text"
                                                            value={item.count} onChange={(e)=> 
                                                            dispatch(addToCart(item._id,Number(e.target.value))) } />
                                                            <button className="btn-plus" onClick={()=> increaseHandler(item._id)}><i className="fa fa-plus" /></button>
                                                        </div>
                                                    </td>
                                                    <td>${item.price * item.count}</td>
                                                    <td>
                                                        <button onClick ={() =>removeFromCartHandler(item._id)}>
                                                            <i className="fa fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>)
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="cart-page-inner">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="cart-summary">
                                            <div className="cart-content">
                                                <h1>Cart Summary</h1>
                                                <p>Sub Total
                                                    <span>
                                                    ${cartItems.reduce((a,c) => a+c.price * c.count,0)}
                                                    </span>
                                                </p>
                                                <p>Shipping Cost<span>$0</span></p>
                                                <h2>Grand Total<span>${ cartItems.reduce((a,c) => a+c.price * c.count,0)}</span></h2>
                                            </div>
                                            <div className="cart-btn">
                                                <Link to="/product-list"><button>Update Cart</button></Link>
                                                <button onClick={checkoutHandler} disabled={cartItems.length ===0}>Proceed to Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
         <FooterPage/>
              
        <ScrollToTopBtn />
        </div>
        
                
    )
  
    
}
export default CartScreen