import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import CheckoutSteps from '../CheckOutStep/CheckoutSteps';
import TopBar from '../Common/TopBar/TopBar';
import NavBar from '../Common/NavBar/index';
import BottomBar from '../Common/BottomBar/index';
import FooterPage from '../Common/Footer/Footer';
import ScrollToTopBtn from '../Common/ScrollToTop/ScrollToTop';
import { addOrder } from '../../actions/orderActions';
function PlaceOrderScreen(props){


    const cart = useSelector(state => state.cart);
    const {cartItems, payment} = cart;
    const addOrderPost = useSelector(state => state.orderPost);
    const {loading, success,error} = addOrderPost;
    // const cart = useSelector(state => state.cartGet);

    // const {cartItems, payment} = cart;
    // console.log(cartItems);
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;
    if(!payment.paymentMethod){
        
        props.history.push("/payment"); 
    }
    

    const toPrice = (num) => Number(num.toFixed(2));
    const itemsPrice = toPrice(
        cartItems.reduce((a,c)=> a + c.price * c.count,0)
    ); 
    const shippingPrice = itemsPrice > 100||itemsPrice===0 ? toPrice(0) : toPrice(10);
    const totalPrice = itemsPrice + shippingPrice ;

    const dispatch = useDispatch();
    const placeOrderHandler = () =>{
        ///create order
        dispatch(addOrder(userInfo.user.id,cart.shipping.city,cart.shipping.postalCode,cart.shipping.address,cart.shipping.numberPhone));
    }
    useEffect(()=>{
        if(success){
            props.history.push("/order-success");
        }
    },[props.history,success]);
    return<div>
        <TopBar/>
        <NavBar/>
        <BottomBar  ></BottomBar>
        <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
        <div className="placeorder">
            <div className="placeorder-info">
                <div>
                    <h3>
                        Shipping
                    </h3>
                    <div>
                        {cart.shipping.address},{cart.shipping.city},
                        {cart.shipping.postalCode},{cart.shipping.numberPhone}
                    </div>
                </div>
                <div>
                    <h3>
                        Payment
                    </h3>
                    <div>
                        Payment Method: {cart.payment.paymentMethod}
                    </div>
                </div>
                    <div className="cart-page">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12" >
                                    <div className="cart-page-inner">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead className="thead-dark"> 
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Total</th>
                                                            
                                                        </tr>    
                                                </thead>
                                                <tbody className="align-middle">
                                                    {
                                                        cartItems.map(item=>
                                                        <tr key={item._id}>
                                                            <td>
                                                                <div className="img">
                                                                    <Link to={"/product/"+item.product}>
                                                                        <img src={item.img} alt="Product" />
                                                                        </Link>
                                                                    <p><Link to ={"/product/" +item.product}> {item.name}</Link></p>
                                                                </div>
                                                            </td>
                                                            <td>${item.price}</td>
                                                            <td>
                                                                <div className="qty">
                                                                    
                                                                    <input type="text"
                                                                    value={item.count}  />
                                                                    
                                                                </div>
                                                            </td>
                                                            <td>${item.price * item.count}</td>
                                                           
                                                        </tr>)
                                                    }
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="placeorder-action">
                <ul>
                    <li>
                        <h3><b>Order Summary</b></h3>
                    </li>
                    <li>
                        
                            <div>
                                SubTotal
                            </div>
                            <div>
                                ${itemsPrice.toFixed(2)}
                            </div>
                        
                        
                    </li>
                    <li>
                        
                            <div>
                                Shipping
                            </div>
                            <div>
                                ${shippingPrice.toFixed(2)}
                            </div>
                        
                        
                    </li>
                    <li>
                        
                        <div>
                            Order Total
                        </div>
                        <div>
                            ${totalPrice.toFixed(2)}
                        </div>
                    </li>
                    <li>
                        <button className="checkout-btn" disabled={cartItems.length===0} onClick={placeOrderHandler}>Place Order</button>
                    </li>
                </ul>   
            </div>
                
           
        </div>
        <FooterPage/>
        <ScrollToTopBtn />
        
    </div>
    
   
}
export default PlaceOrderScreen