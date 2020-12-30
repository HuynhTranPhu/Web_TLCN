import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/userAction';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import Axios from 'axios';
import config from '../../Config/index';


const gg = config.REACT_APP_GOOGLE_CLIENT;
const fb = config.REACT_APP_FACEBOOK_CLIENT;
console.log(gg);





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
    const sendGoogleToken = tokenId => {
        Axios
          .post("/googlelogin", {
            idToken: tokenId
          })
          .then(res => {
            console.log(res.data);
            informParent();
          })
          .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
          });
      };
      const sendFacebookToken = (userID, accessToken) => {
        Axios
          .post("/facebooklogin", {
            userID,
            accessToken
          })
          .then(res => {
            console.log(res.data);
           // informParent();
          })
          .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
          });
      };

      const informParent = () => {
         props.history.push('/');
    
      };
    
      const responseGoogle = response => {
        console.log(response);
        sendGoogleToken(response.tokenId);
      };

      const responseFacebook = response => {
        console.log(response);
        sendFacebookToken(response.userID, response.accessToken)
      };
    



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
                    {/* <li className="facebook">
                        <p>
                            Login with 
                            <Link > <img className="img-fa" src="/images/fb.png" onClick={()=>loginFaceBookHandel()} alt=""/></Link> 
                            <Link ><img className="img-gg" src="/images/google.png" onClick={()=>loginGoogleHandel()} alt=""/></Link>
                        </p>
                        
                    </li> */}
                    <li>
                    <GoogleLogin
                        clientId={gg}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <button
                            onClick={renderProps.onClick}
                            //disabled={renderProps.disabled}
                            //className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                            >
                            <div className=' p-2 rounded-full '>
                                <i className='fab fa-google ' />
                            </div>
                            <span className='ml-4'>Sign In with Google</span>
                            </button>
                        )}
                ></GoogleLogin>

                <FacebookLogin
                  appId={fb}
                  autoLoad={false}
                  callback={responseFacebook}
                  render={renderProps => (
                    <button
                      onClick={renderProps.onClick}
                      //className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                    >
                      <div className=' p-2 rounded-full '>
                        <i className='fab fa-facebook' />
                      </div>
                      <span className='ml-4'>Sign In with Facebook</span>
                    </button>
                  )}
                />
                    </li>
                </ul>
             </form> 
            </div>
    
    
}
export default LoginScreen;