import React from 'react';
import {
  BrowserRouter ,
  Link,
  NavLink,
  Route,
  Switch
} from "react-router-dom";


 import ScrollToTopBtn from "./components/Common/ScrollToTop/ScrollToTop";
// import Navbar from "./components/Navbar";
 import HomeScreen from './components/MainPages/HomePage/HomeScreen';
// import ProductScreen from './components/screens/ProductScreen';
 import CartScreen from './components/MainPages/Cart/CartScreen';
 import LoginScreen from './components/MainPages/Login/LoginScreen';

 import RegisterScreen from './components/MainPages/Register/RegisterScreen';
// import ProductAdminScreen from './components/screens/ProductAdminScreen';
import ShippingScreen from './components/Shipping/ShippingScreen';
import PaymentScreen from './components/Payment/PaymentScreen';
import PlaceOrderScreen from './components/PlaceOrder/PlaceOrderScreen';
import ProfileScreen from './components/MainPages/ProfileUser/ProfileScreen';
import ProductScreen from './components/MainPages/Products/ProductScreen';
import ProductDetailScreen from './components/MainPages/ProductDetails/ProductDetails';
import ContactScreen from './components/Contact/Contact';
import FooterPage from './components/Common/Footer/Footer';
import NotFound from './components/404/404';
import VerifyRegisterAccountContainer from './components/MainPages/ConfirmAcount/ConfirmAcount';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdatePasswordScreen from './components/MainPages/UpdatePassword/UpdatePassword';
import ForgotPasswordContainer from './components/MainPages/ForgotPassword/ForgotPasswordContainer';

import TopBar from './components/Common/TopBar/TopBar';
import NavBar from './components/Common/NavBar/index';
import orderSuccess from './components/MainPages/OrderSuccess/OrderSuccess';

function App() {
   
  return (
    <BrowserRouter>
      {/* <div> */}
         {/* <!-- Top bar Start --> */}
            
              {/* <!-- Top bar End --> */}
              
              {/* <!-- Nav Bar Start --> */}
           
              {/* <!-- Nav Bar End -->      
              
              <!-- Bottom Bar Start --> */}
       
              
                  <Switch>
                     <Route path="/" exact component={HomeScreen}></Route> 
                     <PrivateRoute path="/cart/:id?" exact component={CartScreen}></PrivateRoute>
                     <Route path="/login" exact component={LoginScreen}></Route>
                     <Route path="/register" exact component={RegisterScreen}></Route>
                     <PrivateRoute path="/profile" exact component={ProfileScreen}></PrivateRoute>
                     <Route path="/product-list" exact component={ProductScreen}></Route>
                     <Route path="/update-password" exact component={UpdatePasswordScreen}></Route>
                     <Route path="/product-detail/:id" exact component={ProductDetailScreen}></Route>
                     <Route path="/contact" exact component={ContactScreen}></Route>
                     <Route path="/confirm/:token" exact component={VerifyRegisterAccountContainer}></Route>
                     <Route path="/forgotPass/" exact component={ForgotPasswordContainer}></Route>
                     <Route path="/shipping" exact component={ShippingScreen}></Route>
                     <Route path="/payment" exact component={PaymentScreen}></Route>
                     <Route path="/place-order" exact component={PlaceOrderScreen}></Route>
                     <Route path="/order-success" exact component={orderSuccess}></Route>
                     <Route path="*" exact component={NotFound}></Route>
                  </Switch>   
            
              
              
    
      {/* </div> */}
           
    </BrowserRouter>  
  );
}

export default App;
