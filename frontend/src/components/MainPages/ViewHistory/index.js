import React, { useEffect } from 'react';
import {  useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import { removeOrder, viewHistoryGet } from '../../../actions/orderActions';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import OrderStatus from '../../OrderStatus/index';

function ViewHistory(props){


     const viewHistoryOrder = useSelector(state => state.viewHistoryOrder);
     const {viewHistory, loading, error } = viewHistoryOrder;
    const dispatch = useDispatch();
    const removeOrderHandler = (id_order)=>{
        if(window.confirm('Do you want to delete this item?')){
            dispatch(removeOrder(id_order));
            //props.history.push('/history');
        }
    }
    //const [viewHistory, setViewHistory] = useState([])
    //const dispatch = useDispatch();
    //const cartItems=[];
    console.log(viewHistory);
    useEffect(() => {
        dispatch(viewHistoryGet(props.match.params.id));
        return () => {
            //
        };
    }, [])
    return<div>
        <TopBar/>
        <NavBar/>
        <BottomBar  ></BottomBar>
        {loading?(
            <LoadingBox></LoadingBox>
            ):
            error? (
                <MessageBox variant="danger">{error}</MessageBox>
            ):(
               
                <div>
                 <OrderStatus/>
                <div className="placeorder">
                <div className="placeorder-info">
                    <div>
                        <h3>
                            Shipping
                        </h3>
                        <div>
                            {viewHistory.map(item=>item.address )},
                            {viewHistory.map(item=>item.city)},
                            {viewHistory.map(item=> item.posteCode )},
                            {viewHistory.map(item=>item.phone)}
                        </div>
                    </div>
                    <div>
                        <h3>
                            Payment
                        </h3>
                        <div>
                            Payment Method: {viewHistory.map(item=>item.payment)},
                            Payment Status: {viewHistory.map(item=>item.paymentStatus)}
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
                                                            viewHistory.map(item=>
                                                                <>
                                                                    
                                                                     {item.cart.map(i=>  
                                                                        <tr key={i._id}>

                                                                            <td>
                                                                                <div className="img">
                                                                                    <Link to={"/product/"+i._id}>
                                                                                    <img src={i.img} alt="Product" />
                                                                                    </Link>
                                                                                    <p><Link to ={"/product/" +i._id}>  {i.name}</Link></p>     
                                                                                </div>
                                                                            </td>
                                                                            <td>${i.price}</td>
                                                                            <td>
                                                                                <div className="qty">
                                                                                    
                                                                                    <input type="text"
                                                                                    value={i.quantity}  />
                                                                                    
                                                                                </div>
                                                                            </td>
                                                                            <td>${i.price * i.quantity}</td>

                                                                        </tr>
                                                                        
                                                                    )}
                                                                </>
                                                            )}
                                                        
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
                                    ${viewHistory.map(item=>item.order_subtotal.toFixed(2) )}
                                </div>
                            
                            
                        </li>
                        <li>
                            
                                <div>
                                    Shipping
                                </div>
                                <div>
                                    ${viewHistory.map(item=>item.shiping.toFixed(2) )}
                                </div>
                            
                            
                        </li>
                        <li>
                            
                            <div>
                                Order Total
                            </div>
                            <div>
                                ${viewHistory.map(item=>item.order_subtotal.toFixed(2) )}
                            </div>
                        </li>
                        <li>
                            <button className="checkout-btn"  onClick ={() =>removeOrderHandler(viewHistory.map(item=>item._id ))}>Delete orders</button>
                        </li>
                    </ul>
                    
                </div>
                </div>
               
                <FooterPage/>
                <ScrollToTopBtn /> 
                
            </div>
            
            )
        }
                
       
        
    </div>
    
   
}
export default ViewHistory
