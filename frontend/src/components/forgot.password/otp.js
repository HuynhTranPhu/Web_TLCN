import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/NavBar/index'
import BottomBar from '../Common/BottomBar/index'
import Footer from '../Common/Footer/Footer'
const OTP = ({ setOTP, submitOTP, notificationOTP }) =>{
    return   (
        <div>
            <TopBar/>
            <NavBar/>
            <BottomBar  ></BottomBar>
            <div className="container text-center">
                <div className="content-404 forgotpass">
                    <h1><b>ENTER OTP
                    </b></h1>
                    <span>{notificationOTP}</span>
                    <input
                        type="text"
                        placeholder="Otp code"
                        onChange={(e) => setOTP(e.target.value)}
                    />
                    <span className="otp-notify">Please check your mail to receive your OTP code</span>
                    <br />
                    <button
                        className="btn btn-default"
                        onClick={() => submitOTP()}>
                        submit
                    </button>
                    <h2><Link to="/">Bring me back Home</Link></h2>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
    

}
   
export default OTP