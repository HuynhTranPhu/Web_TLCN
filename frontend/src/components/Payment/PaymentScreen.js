import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePayment } from '../../actions/cartAction';
import CheckoutSteps from '../CheckOutStep/CheckoutSteps';
import TopBar from '../Common/TopBar/TopBar';
import NavBar from '../Common/NavBar/index';
import BottomBar from '../Common/BottomBar/index';
import FooterPage from '../Common/Footer/Footer';
import ScrollToTopBtn from '../Common/ScrollToTop/ScrollToTop';





function PaymentScreen(props){

    const cart = useSelector((state)=>state.cart);
    const {shipping}= cart;
    if(!shipping.address){
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch();
    const submitHandler =(e)=>{
        if(paymentMethod===""){
            alert('Payment method not found');
        }
        e.preventDefault();
        dispatch(savePayment({paymentMethod}));
        props.history.push('/place-order');
        }

    return <div>
            <TopBar/>
            <NavBar/>
            <BottomBar  ></BottomBar>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="formShipping">
                <form onSubmit={submitHandler}>
                <ul className="form-container-shipping">
                    <li>
                        <h2>Payment</h2>
                    </li>
                    <li>
                        <input type="radio" name="paymentMethod" value="Paypal"
                        id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                PayPal
                            </label>
                    </li>
                    <li>
                        <input type="radio" name="paymentMethod" value="Momo"
                        id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                MoMo
                            </label>
                    </li>
                    <li>
                        <input type="radio" name="paymentMethod" value="payment On Delivery"
                        id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                Payment on delivery
                            </label>
                    </li>
                    
                    <li>
                        <button type="submit" className="button primary">
                                Continue 
                        </button>
                    </li>
                
                </ul>
            </form> 
        </div>
        <FooterPage/>
        <ScrollToTopBtn />
    </div> 
   
}
export default PaymentScreen;