import React,{useEffect} from 'react';
import {logout} from '../actions/userAction'
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch, useSelector } from 'react-redux';
import './navbar.css';
import {
  Link
} from "react-router-dom";

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 250 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['header'];
  if(scrolled){
    x.push('scrolled');
  }
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const dispatch = useDispatch();
  const logoutHandler = () =>{
      dispatch(logout());
  }
  return (
        <header className={x.join(" ")}>
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">UTE-SHOP</Link>
            </div>
            <div className="header-links">
                <Link to="/cart">
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                </Link>
                {
                  userInfo ? (
                    <div className="dropdown">
                        <Link to="#">
                          {userInfo.name} <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                            <Link to="/profile">
                              User profile
                            </Link>
                          </li>
                          <li>
                            <Link to="/" onClick={logoutHandler}>
                              Sign Out
                            </Link>
                          </li>
                         
                        </ul>
                    </div>
                  
                  ):
                      (<Link to ="/login">Sign In</Link>)
                }
            </div>
    </header>  
  )
};

export default Navbar;