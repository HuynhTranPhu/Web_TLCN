import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePayment } from '../../actions/cartAction';
import CheckoutSteps from '../CheckOutStep/CheckoutSteps';





function PaymentScreen(props){

    const cart = useSelector((state)=>state.cart);
    const {shipping}= cart;
    if(!shipping.address){
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch();
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(savePayment({paymentMethod}));
        props.history.push('place-order');
    }
    return <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="formContain">
                <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Payment</h2>
                    </li>
                    <li>
                        <input type="radio" name="paymentMethod" value="paypal"
                        id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                PayPal
                            </label>
                    </li>
                    <li>
                        <input type="radio" name="paymentMethod" value="momo"
                        id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                MoMo
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
    </div> 
   
}
export default PaymentScreen;