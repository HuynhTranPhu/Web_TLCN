import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';
import { updateUserPassword } from '../../../actions/userAction';
import { USER_UPDATE_PASSWORD_RESET } from '../../../constants/userConstant';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
//import {logout} from '../../../actions/userAction'

export default function UpdatePasswordScreen(){
    const [oldpassword,setOldPassword] = useState('');
    const [newpassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    // const userDetails = useSelector((state) => state.userDetails);
    // const {loading, error, user} = userDetails;
    const userUpdatePassword = useSelector((state) => state.userUpdatePassword);
    const {success:successUpdate , 
        error: errorUpdate, 
        loading:loadingUpdate,}= userUpdatePassword;
    const dispatch = useDispatch();
   
    useEffect(() =>{
           // dispatch({type:USER_UPDATE_PASSWORD_RESET});
    },[]);
    // const logoutHandler = () =>{
    //     dispatch(logout());
    // }
    const submitHandler = (e) =>{
        e.preventDefault();
        //dispatch update
        if(newpassword !== confirmPassword){
            alert('Password and Confirm Password are not matched');
        }else{
            dispatch(updateUserPassword( oldpassword, newpassword, userInfo.user.id));
        }
       // Redirect("/logout/");
    }
    return<div>
        <form className="form-profile" onSubmit={submitHandler}>
            <div>
                <h1 className="title">
                   Change Password
                </h1>
            </div>
            {
                    <>
                    { loadingUpdate && <LoadingBox></LoadingBox>}
                    {errorUpdate && (<MessageBox variant="danger">{errorUpdate}</MessageBox>)}
                    {successUpdate &&(<MessageBox variant="success">Password Updated Successfully</MessageBox>) }
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                onChange={(e) => setOldPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="newPassword">New Password</label>
                            <input
                                id="newPassword"
                                type="password"
                                placeholder="Enter new password"
                                onChange={(e) => setNewPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Enter confirm password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label> </label>
                            <button className="button primary update-profile" type="submit" >
                                Update
                            </button>
                        </div>
                    </>
            }
        </form>
    </div>;  
}