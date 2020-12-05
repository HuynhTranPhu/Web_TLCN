import React from 'react';
import {
  BrowserRouter ,
  Link,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from './actions/userAction'

 import ScrollToTopBtn from "./components/ScrollToTop/ScrollToTop";
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
import FooterPage from './components/Footer/Footer';
import NotFound from './components/404/404';
import VerifyRegisterAccount from './components/VerifyRegisterAccount/VerifyRegisterAccount';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdatePasswordScreen from './components/MainPages/UpdatePassword/UpdatePassword';



function App() {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
  
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        dispatch(logout());
}
  return (
    <BrowserRouter>
      {/* <div className="grid-container">
        
        <Navbar/>
        
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="/">Shirts</a>
                </li>
                <li>
                    <a href="/">Pants</a>
                </li>
            </ul>

        </aside>
        <main className="main">
            <div className="content">
              <Route path="/products" component={ProductAdminScreen}></Route>
              <Route path="/shipping" component={ShippingScreen}></Route>
              <Route path="/payment" component={PaymentScreen}></Route>
              <Route path="/placeorder" component={PlaceOrderScreen}></Route>
              <Route path="/login" component={LoginScreen}></Route>
              <Route path="/register" component={RegisterScreen}></Route>
              <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/cart/:id?" component={CartScreen}></Route>
              <Route path="/profile" component={ProfileScreen}></Route>
              <Route path="/" exact={true} component={HomeScreen}></Route>
                
            </div>
            
            
        </main>
        <ScrollToTopBtn />
        
        <footer className="footer">
            All right reserved
        </footer>
       
      </div> */}
      <div>
         {/* <!-- Top bar Start --> */}
         <div className="top-bar">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-sm-6">
                              <i className="fa fa-envelope"></i>
                              support@email.com
                          </div>
                          <div className="col-sm-6">
                              <i className="fas fa-phone"></i>
                              +034-304-8571
                          </div>
                      </div>
                  </div>
            </div>
              {/* <!-- Top bar End --> */}
              
              {/* <!-- Nav Bar Start --> */}
              <div className="nav">
                  <div className="container-fluid">
                      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                          <Link to="" className="navbar-brand">MENU</Link>
                          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                              <span className="navbar-toggler-icon"></span>
                          </button>

                          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                              <div className="navbar-nav mr-auto">
                                  <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                  <NavLink to="/product-list" className="nav-item nav-link">Products</NavLink>
                                  <NavLink to="/cart" className="nav-item nav-link">Cart</NavLink>
                                  <NavLink to="/profile" className="nav-item nav-link">My Account</NavLink>
                                  <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
                              </div>
                              <div className="navbar-nav ml-auto">
                                  {
                                      userInfo?(
                                        <div className="nav-item dropdown">
                                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{userInfo.user.name}</Link>
                                                
                                            <div className="dropdown-menu">
                                                {/* <Link to="/login" className="dropdown-item">Login</Link> */}
                                                <Link to="/update-password" className="dropdown-item">ChangePassword</Link>
                                                <Link to="/" className="dropdown-item" onClick={logoutHandler}>Logout</Link>
                                            </div>
                                        </div>
                                      ):(
                                        <div className="nav-item dropdown">
                                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</Link>
                                            <div className="dropdown-menu">
                                                <Link to="/login" className="dropdown-item">Login</Link>
                                                <Link to="/register" className="dropdown-item">Register</Link>
                                            </div>
                                        </div>
                                      )
                                  }
                              </div>
                          </div>
                      </nav>
                  </div>
              </div>
              {/* <!-- Nav Bar End -->      
              
              <!-- Bottom Bar Start --> */}
              <div className="bottom-bar">
                  <div className="container-fluid">
                      <div className="row align-items-center">
                          <div className="col-md-3">
                              <div className="logo">
                                  <Link to="/">
                                      <img src="img/logo.png" alt="Logo"/>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="search">
                                  <input type="text" placeholder="Search"/>
                                  <button><i className="fa fa-search"></i></button>
                              </div>
                          </div>
                          <div className="col-md-2">
                              <div className="user">
                                  <Link to="/cart" className="btn cart">
                                      <i className="fa fa-shopping-cart"></i>
                                       {cartItems.length > 0 ? (
                                        <span className="badge">({cartItems.length})</span>
                                       ):(<span className="badge">(0)</span>)}
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="content-main">
                  <Switch>
                     <Route path="/" exact={true} component={HomeScreen}></Route> 
                     <Route path="/cart/:id?" component={CartScreen}></Route>
                     <Route path="/login" component={LoginScreen}></Route>
                     <Route path="/register" component={RegisterScreen}></Route>
                     <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
                     <Route path="/product-list" component={ProductScreen}></Route>
                     <Route path="/update-password" component={UpdatePasswordScreen}></Route>
                     <Route path="/product-detail/:id" component={ProductDetailScreen}></Route>
                     <Route path="/contact" component={ContactScreen}></Route>
                     <Route path="/confirm-account" component={VerifyRegisterAccount}></Route>
                     <Route path="/shipping" component={ShippingScreen}></Route>
                     <Route path="/payment" component={PaymentScreen}></Route>
                     <Route path="/place-order" component={PlaceOrderScreen}></Route>
                  </Switch>
                  <Route path="/k" component={NotFound}></Route>
                
              </div>
              {/* <!-- Bottom Bar End -->       
              
              <!-- Main Slider Start --> */}
              
              {/* <!-- Main Slider End -->      
              
              <!-- Brand Start --> */}
             
              {/* <!-- Brand End -->      
              
              <!-- Feature Start--> */}
              
              {/* <!-- Feature End-->      
              
              <!-- Category Start--> */}
             
              {/* <!-- Category End-->       
              
              <!-- Call to Action Start --> */}
              
              {/* <!-- Call to Action End -->       
              
              <!-- Featured Product Start --> */}
           
              {/* <!-- Featured Product End -->           
              
              <!-- Recent Product Start --> */}
             
              {/* <!-- Recent Product End -->
              
              <!-- Review Start --> */}
              
              <FooterPage/>
              {/* <!-- Review End -->    
              {/* <!-- Footer Bottom End -->       
              <!-- Back to Top --> */}
              <ScrollToTopBtn />
      </div>
           
    </BrowserRouter>  
  );
}

export default App;
