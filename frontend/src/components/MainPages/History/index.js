import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import { useDispatch, useSelector } from 'react-redux';
import { historyGet,removeOrder,viewHistoryGet } from '../../../actions/orderActions';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';

const History = () => {
    const historyOrder = useSelector(state => state.historyOrder);
    const {history, loading, error } = historyOrder;
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;
    const dispatch = useDispatch();
    //const cartItems=[];
    const HandelViewDetails = (id_order)=>{
        dispatch(viewHistoryGet(id_order));
    }
    const removeOrderHandler = (id_order)=>{
        if(window.confirm('Do you want to delete this item?')){
            dispatch(removeOrder(id_order));
        }
       
    }
    useEffect(() => {
        dispatch(historyGet(userInfo.user.id));
        return () => {
            //
        };
    }, [])
   
    return (
        <div>
            <TopBar/>
            <NavBar/>
            <BottomBar ></BottomBar>
            <h1 className="Order-title">Order History</h1>
            {loading?(
            <LoadingBox></LoadingBox>
            ):
            error? (
                <MessageBox variant="danger">{error}</MessageBox>
            ):(

                <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12" >
                            <div className="cart-page-inner">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark"> 
                                                {
                                                    history.length === 0 ?(                                                  
                                                        <div className="empty-cart">
                                                            <img className="empty-cart-img" src="/images/emptyCart.png" alt="Product" />
                                                            <p className="empty-cart-note">Your orders is empty</p>
                                                            <Link className="empty-cart-shopping" to="/">Go to Shopping</Link>
                                                        </div>
                                                    ):
                                                    <tr>
                                                        <th>Id order</th>
                                                        <th>Date</th>
                                                        <th>Details</th>
                                                        <th>Total</th>
                                                        <th>Status</th>
                                                        <th>Remove</th>
                                                    
                                                    </tr>   
                                                }
                                                
                                        </thead>
                                        <tbody className="align-middle">
                                            {
                                                history.map(item=>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.order_date.substring(0, 10)}</td>
                                                    {/* <td>
                                                        <div className="img">
                                                            <Link to={"/product/"+item.product}>
                                                                <img src={item.img} alt="Product" />
                                                                </Link>
                                                            <p><Link to ={"/product/" +item.product}> {item.name}</Link></p>
                                                        </div>
                                                    </td> */}
                                                    {/* <td>${item.order_subtotal}</td> */}
                                                    {/* <td>
                                                        <div className="qty">
                                                            
                                                            <input type="text"
                                                            value={item.count}  />
                                                            
                                                        </div>
                                                    </td> */}
                                                    <td><Link to="/view-history" onClick={()=>HandelViewDetails(item._id)}>View Details</Link></td>
                                                    <td>${item.order_subtotal}</td>
                                                    <td>{item.order_status.toString()}</td>
                                                    <td>
                                                        <button disabled={item.order_status.toString() ==="delivering"} onClick ={() =>removeOrderHandler(item._id)}>
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
                    </div>
                </div>
            </div>

            )
            }
           
        </div>
       
    );
};

export default History;