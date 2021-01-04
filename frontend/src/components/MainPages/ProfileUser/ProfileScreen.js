import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../../../actions/userAction';
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userConstant';
//import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';

export default function ProfileScreen(props){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    //console.log(userInfo);
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;
    console.log(user);
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {success:successUpdate , 
        error: errorUpdate, 
        loading:loadingUpdate,}= userUpdateProfile;
    const dispatch = useDispatch();
   
    useEffect(() =>{
        // if(error==="Time out, Please login again"){
        //     props.history.push('/login');
        // }
        if(!user){
            dispatch({type:USER_UPDATE_PROFILE_RESET});
            dispatch(detailsUser(userInfo.newUser._id));     
        }else{
            setName(user.user.name);
            setEmail(user.user.email);
        }
        
       
    },[dispatch, userInfo.newUser._id, user]);

    const submitHandler = (e) =>{
        e.preventDefault();
        //dispatch update 
        if(email==="" || name===""){
            alert('Email or name are not valid');
        }else{
            dispatch(updateUserProfile(  email, name, userInfo.newUser._id));
        }
           
    }
    return<div>
        <TopBar/>
        <NavBar/>
        <BottomBar  ></BottomBar>
        {
             loading ? (
                <LoadingBox></LoadingBox>)
                : error? (<MessageBox variant="danger">{error}</MessageBox>
                ) :(
                    <form className="form-profile" onSubmit={submitHandler}>
                        <div>
                            <h1 className="title">
                                User Profile
                            </h1>
                        </div>
                            <>
                            { loadingUpdate && <LoadingBox></LoadingBox>}
                            {errorUpdate && (<MessageBox variant="danger">{errorUpdate}</MessageBox>)}
                            {successUpdate &&(<MessageBox variant="success">Profile Updated Successfully</MessageBox>) }
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter name"
                                        value ={name}
                                        onChange={(e) =>setName(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter email"
                                        value ={email}
                                        onChange={(e) =>setEmail(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label> </label>
                                    <button className="button primary update-profile" type="submit">
                                        Update
                                    </button>
                                </div>
                            </>
                    </form>
                )
        }
       {/* <FooterPage/> */}
       <ScrollToTopBtn />
    </div>;  
}