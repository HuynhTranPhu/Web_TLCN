import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, decrease, increase } from '../../../actions/cartAction';
import MessageBox from '../../Config/MessageBox';
function CartScreen(props){


    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]):1;

    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId));
    }
    const decreaseHandler = (productId) =>{
        dispatch(decrease(productId));
    }
    const increaseHandler = (productId) =>{
        dispatch(increase(productId));
    }
    useEffect(() => { 
        if(productId){
            dispatch(addToCart(productId,qty));
        }
    },[dispatch,productId,qty]);
    const checkoutHandler = () =>{
        props.history.push("/login?redirect=shipping");
    }

    // return <div className="cart1">
    //         <div className="cart1-list">
    //             <ul className = "cart1-list-container">
    //                 <li>
    //                     <h3>
    //                         Shopping Cart
    //                     </h3>
    //                     <div>
    //                         Price
    //                     </div>
    //                 </li>
    //                 {
    //                     cartItems.length === 0 ?(
    //                         <MessageBox>
    //                             Cart Empty. <Link to="/">Go to Shopping</Link>
    //                         </MessageBox>
    //                     )
    //                     :
    //                     cartItems.map(item =>
    //                         <li key={item.product}>
    //                             <div className="cart1-image">
    //                                 <img src ={item.image} alt ="product"/>
    //                             </div>
                                
    //                             <div className="cart1-name">
    //                                 <div>
    //                                     <Link to ={"/product/" +item.product}>
    //                                     {item.name}
    //                                     </Link>
                                    
    //                                 </div>
    //                                 <div>
    //                                     Qty
    //                                     <select value={item.qty}onChange={(e)=> dispatch(addToCart(item.product,Number(e.target.value))) }>           
    //                                         {[...Array(item.countInStock).keys()].map(x =>
    //                                             <option key={x+1} value={x+1}>{x+1}</option>
    //                                         )}
    //                                     </select>
                                        
    //                                     <button type = "button" className="btnDelete" onClick ={() =>removeFromCartHandler(item.product)}>
    //                                         Delete
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                             <div className="cart1-price">
    //                                 ${item.price}
    //                             </div>
    //                         </li> 
    //                     )     
    //                 }
    //                 {
    //                     cartItems.length > 0 &&(
    //                         <MessageBox>
    //                            <Link to="/">Continue to Shopping</Link>
    //                         </MessageBox>
    //                     )
    //                 }         
    //             </ul>

    //         </div>
    //         <div className="cart1-action">
    //                 <h3>
    //                     Subtotal ({cartItems.reduce((a,c) => a + c.qty,0)} items):$ 
    //                      {cartItems.reduce((a,c) => a+c.price * c.qty,0)}
    //                 </h3>
    //                 <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length ===0}>
    //                     Proceed to Checkout

    //                 </button>
                    
    //         </div>
    // </div>
    return  <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8" >
                            <div className="cart-page-inner">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            {
                                                 cartItems.length === 0 ?(
                                                    <MessageBox>
                                                        Cart Empty. <Link to="/">Go to Shopping</Link>
                                                    </MessageBox>
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
                                                <tr key={item.product}>
                                                    <td>
                                                        <div className="img">
                                                            <Link to={"/product/"+item.product}>
                                                                <img src={item.image} alt="Image" />
                                                                </Link>
                                                            <p><Link to ={"/product/" +item.product}> {item.name}</Link></p>
                                                        </div>
                                                    </td>
                                                    <td>${item.price}</td>
                                                    <td>
                                                        <div className="qty">
                                                            <button className="btn-minus" onClick={()=> decreaseHandler(item.product)}><i className="fa fa-minus" /></button>
                                                            <input type="text"
                                                            value={item.qty} onChange={(e)=> 
                                                            dispatch(addToCart(item.product,Number(e.target.value))) } />
                                                            <button className="btn-plus" onClick={()=> increaseHandler(item.product)}><i className="fa fa-plus" /></button>
                                                        </div>
                                                    </td>
                                                    <td>${item.price * item.qty}</td>
                                                    <td>
                                                        <button onClick ={() =>removeFromCartHandler(item.product)}>
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
                                                    ${cartItems.reduce((a,c) => a+c.price * c.qty,0)}
                                                    </span>
                                                </p>
                                                <p>Shipping Cost<span>$0</span></p>
                                                <h2>Grand Total<span>${cartItems.reduce((a,c) => a+c.price * c.qty,0)}</span></h2>
                                            </div>
                                            <div className="cart-btn">
                                                <Link to="/"><button>Update Cart</button></Link>
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
  
    
}
export default CartScreen