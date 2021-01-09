import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Link, useHistory
  } from "react-router-dom";
import { searchHeader } from '../../../actions/productActions';






function Index(props) {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const history =useHistory();
    const dispatch = useDispatch();
    

const handelSearch=()=>{
    history.push('/search');
}
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
                    <input type="text" placeholder="Search"
                    //value={e.target.value}
                    
                    onChange={(e)=>
                       {
                        if (e.target.value!=='')
                          {
                            dispatch(searchHeader(
                                e.target.value
                            ));
                          }   
                       }   
                    }
                    />
                    <button onClick={handelSearch}><i  className="fa fa-search"></i></button> 
                </div>
            </div>
            <div className="col-md-2">
                <div className="user">
                    <Link to="/cart" className="btn cart">

                        <i className="fa fa-shopping-cart"></i>
                        {cartItems.length> 0 ? (
                        <span className="badge">({cartItems.length})</span>
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

