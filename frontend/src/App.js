import React from 'react';
import {
  BrowserRouter ,
  Route
} from "react-router-dom";

//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';


import ScrollToTopBtn from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';
import LoginScreen from './components/screens/LoginScreen';
//import { useSelector } from 'react-redux';
import RegisterScreen from './components/screens/RegisterScreen';
import ProductAdminScreen from './components/screens/ProductAdminScreen';
import ShippingScreen from './components/screens/ShippingScreen';
import PaymentScreen from './components/screens/PaymentScreen';
import PlaceOrderScreen from './components/screens/PlaceOrderScreen';
import ProfileScreen from './components/screens/ProfileScreen';
//import FooterPage from './components/screens/Footer';


function App() {

  // const userLogin = useSelector(state => state.userLogin);
  // const {userInfo} = userSignin;
  // const openMenu = () => {
  //   document.querySelector(".sidebar").classList.add("open");
  // }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  

  return (
    <BrowserRouter>
      <div className="grid-container">
        {/* <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">UTE-SHOP</Link>
            </div>
            <div className="header-links">
                <Link to="/cart">Cart</Link>
                {
                  userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                      <Link to ="/signin">Sign In</Link>
                }
            </div>
        </header> */}
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
        {/* <FooterPage/> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
