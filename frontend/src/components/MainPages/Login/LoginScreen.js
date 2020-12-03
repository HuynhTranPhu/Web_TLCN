import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/userAction';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';





function LoginScreen(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userLogin = useSelector(state => state.userLogin);
    const {loading, userInfo, error} = userLogin;
    const dispatch = useDispatch();

    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [props.history,redirect,userInfo]);
    
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(login(email,password));
    }
    return <div className="formContain">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2 className="title">Welcome</h2>
                    </li>
                    <li>
                        {loading && <LoadingBox></LoadingBox>}
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>

                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)}></input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">
                                Login 
                        </button>
                    </li>
                    <li>
                       <Link to="" className="forgot">Forgotten password?</Link> 
                    </li>
                    <li className="sign-up">
                        <p>
                            Don't have an account?
                            <Link to={redirect === "/" ? "register": "register? redirect=" + redirect} className="borders" >
                                Sign Up
                            </Link>
                        </p>
                        
                    </li>
                </ul>
             </form> 
            </div>
    
    
}
export default LoginScreen;