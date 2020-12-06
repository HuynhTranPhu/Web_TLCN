import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../actions/userAction';
import MessageBox from '../../Config/MessageBox';





function RegisterScreen(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [userInfo]);
    
    const submitHandler =(e)=>{
        e.preventDefault();
        if(name===""|| email===""||password===""||repassword===""){
            alert("data are not valid");
        }
        else{
            dispatch(register(name, email,password,repassword));
        }
        
    }
    return <div className="formContain">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2 className="title">Create Account</h2>
                </li>
                <li>
                    {loading && <MessageBox></MessageBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                </li>
                <li>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="name" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>

                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>

                </li>
                <li>
                    <label htmlFor="password">
                            Password
                    </label>
                    <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="rePassword">
                            Re-Enter Password
                    </label>
                    <input type="Password" id="rePassword" name="rePassword" onChange={(e)=> setRePassword(e.target.value)}></input>
                </li>
                <li>
                    <button type="submit" className="button primary">
                            Register 
                    </button>
                </li>
                {/* <li>
                    <Link to="/login" className="button secondary text-center">
                        Back
                    </Link>
                </li> */}
               
            </ul>
        </form> 
    </div>
}
export default RegisterScreen;