import React, { useState } from 'react';

import {
    BrowserRouter ,
    Link,
    NavLink,
    Route,
    Switch
  } from "react-router-dom";






function Index(props) {


   

return (
        
 <div className="bottom-bar">
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-md-3">
                <div className="logo">
                    <Link to="/">
                        <img src="/img/logo.png" alt="Logo"/>
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
                        {props.cartItems> 0 ? (
                        <span className="badge">({props.cartItems})</span>
                        ):(<span className="badge">(0)</span>)}
                    </Link>
                </div>
            </div>
        </div>
    </div>
 </div> 
);
}

export default Index;

