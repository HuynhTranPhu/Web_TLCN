import React from 'react'
import { Link} from 'react-router-dom'
const VerifyRegisterAccount = () => (
    <div className="container text-center">
		<div className="content-404">
            <img src="/img/confirm.png" className="img-responsive" alt="" />
			<h1><b>Congratulations!!!
			</b> You have verified login successfully</h1>
			<h2><Link to="/">Bring me back Home</Link></h2>
		</div>
	</div>
)
export default VerifyRegisterAccount