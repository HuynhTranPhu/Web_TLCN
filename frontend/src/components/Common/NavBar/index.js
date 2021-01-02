import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../../actions/userAction';

const Index = () => {


    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
  
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        dispatch(logout());}
    return (
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
                                  {/* <NavLink to="/place-order" className="nav-item nav-link">Place Order</NavLink> */}
                                  <NavLink to="/history" className="nav-item nav-link">History</NavLink>
                              </div>
                              <div className="navbar-nav ml-auto">
                                  {
                                      userInfo?(
                                        <div className="nav-item dropdown">
                                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{userInfo.newUser.name}</Link>
                                                
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
    );
};

export default Index;