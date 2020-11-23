import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../../../actions/userAction';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';

export default function ProfileScreen(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(detailsUser(userInfo._id));
    },[dispatch, userInfo._id]);

    const submitHandler = (e) =>{
        e.preventDefault();
        //dispatch update
    }
    return<div>
        <form className="form-profile" onSubmit={submitHandler}>
            <div>
                <h1 className="title">
                    User Profile
                </h1>
            </div>
            {
                loading ? (
                <LoadingBox></LoadingBox>)
                : error? (<MessageBox variant="danger">{error}</MessageBox>
                ) :(
                    <>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value ={user.name}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value ={user.email}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Enter confirm password"
                            ></input>
                        </div>
                        <div>
                            <label> </label>
                            <button className="button primary update-profile" type="submit">
                                Update
                            </button>
                        </div>
                    </>
            )}
        </form>
    </div>;  
}