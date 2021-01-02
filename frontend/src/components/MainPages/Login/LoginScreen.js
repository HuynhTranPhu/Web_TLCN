import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginFaceBook, loginGoogle } from '../../../actions/userAction';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import config from '../../Config/index';


const gg = config.REACT_APP_GOOGLE_CLIENT;
const fb = config.REACT_APP_FACEBOOK_CLIENT;
//console.log(gg);





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
    // const sendGoogleToken = tokenId => {
    //     Axios
    //       .post("/googlelogin", {
    //         idToken: tokenId
    //       })
    //       .then(res => {
    //         console.log(res.data);
    //         //informParent();
    //       })
    //       .catch(error => {
    //         console.log('GOOGLE SIGNIN ERROR', error.response);
    //       });
    //   };
    // const sendFacebookToken = (userID, accessToken) => {
    //     Axios
    //       .post("/facebooklogin", {
    //         userID,
    //         accessToken
    //       })
    //       .then(res => {
    //         console.log(res.data);
    //        //informParent();
    //       })
    //       .catch(error => {
    //         console.log('GOOGLE SIGNIN ERROR', error.response);
    //       });
    //   };

      // const informParent = () => {
      //    props.history.push('/');
    
      // };
    
      const responseGoogle = response => {
        console.log(response);
        dispatch(loginGoogle(response.tokenId));
      };
      // const responseGoogle = response => {
      //   console.log(response);
      //   sendGoogleToken(response.tokenId);
      // };

      const responseFacebook = response => {
        console.log(response);
        dispatch(loginFaceBook(response.userID, response.accessToken)); 
      };
    
      // const responseFacebook = response => {
      //   console.log(response);
      //   sendFacebookToken(response.userID, response.accessToken)
      // };
    



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
                       <Link to="/forgotPass/" className="forgot">Forgotten password?</Link> 
                    </li>
                    <li className="sign-up">
                        <p>
                            Don't have an account?
                            <Link to={redirect === "/" ? "register": "register? redirect=" + redirect} className="borders" >
                                Sign Up
                            </Link>
                        </p>
                        
                    </li>
                
                    <li className="facebook">
                        <p>
                            Login with
                            <FacebookLogin
                            appId={fb}
                            autoLoad={false}
                            callback={responseFacebook}
                            render={renderProps => (
                                <b 
                                onClick={renderProps.onClick}
                                >
                                {/* <div className=' p-2 rounded-full '> */}
                                
                                <img className="img-fa" src="/images/fb.png" alt=""/>
                                {/* </div> */}
                                </b>
                            )}
                            />
                            <GoogleLogin
                                clientId={gg}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps => (
                                    <b 
                                
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}>
                                    {/* <div className=' p-2 rounded-full '> */}
                                    <img className="img-gg" src="/images/google.png" alt=""/>
                                    {/* </div> */}
                                
                                    </b>
                                )}
                            ></GoogleLogin>
                        </p>
                        
                        
                    </li>

                    
                    
                        
                    
                </ul>
             </form> 
            
            </div>
    
    
}
export default LoginScreen;