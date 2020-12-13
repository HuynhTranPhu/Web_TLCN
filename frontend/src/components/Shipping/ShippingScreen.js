import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShipping } from '../../actions/cartAction';
import CheckoutSteps from '../CheckOutStep/CheckoutSteps';
import TopBar from '../Common/TopBar/TopBar';
import NavBar from '../Common/NavBar/index';
import BottomBar from '../Common/BottomBar/index';
import FooterPage from '../Common/Footer/Footer';
import ScrollToTopBtn from '../Common/ScrollToTop/ScrollToTop';





function ShippingScreen(props){
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo}= userLogin;
    if(!userInfo){
        props.history.push('/login');
    }
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    
    const dispatch = useDispatch();
   
   
    
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(saveShipping({address, city, postalCode, numberPhone}));
        props.history.push('payment');
    }
    return <div>
            <TopBar/>
            <NavBar/>
            <BottomBar></BottomBar>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <div className="formShipping">
                <form onSubmit={submitHandler}>
                <ul className="form-container-shipping">
                    <li>
                        <h2>Shipping</h2>
                    </li>
                    <li>
                        <label htmlFor="address">
                            Address
                        </label>
                        <input type="text" name="address" id="address" onChange={(e)=>setAddress(e.target.value)}></input>

                    </li>
                    <li>
                        <label htmlFor="city">
                            City
                        </label>
                        <input type="text" name="city" id="city" onChange={(e)=>setCity(e.target.value)}></input>

                    </li>
                    <li>
                        <label htmlFor="postalCode">
                            Postal Code
                        </label>
                        <input type="text" name="postalCode" id="postalCode" onChange={(e)=>setPostalCode(e.target.value)}></input>

                    </li>
                    <li>
                        <label htmlFor="numberPhone">
                            Number Phone
                        </label>
                        <input type="text" name="numberPhone" id="numberPhone" onChange={(e)=>setNumberPhone(e.target.value)}></input>

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
export default ShippingScreen;