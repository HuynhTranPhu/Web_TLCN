import React from 'react'
import { Link } from 'react-router-dom'
const OTP = ({ setOTP, submitOTP, notificationOTP }) => (
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
)
export default OTP