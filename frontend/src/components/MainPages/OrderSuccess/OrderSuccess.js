import React from 'react'
import { Link} from 'react-router-dom'
const orderSuccess = () => (
    <div className="container text-center">
		<div className="content-404">
            <img src="/img/confirm.png" className="img-responsive" alt="" />
			<h1><b>Congratulations!!!
			</b> Your order had been place order, Please Check mail to verify order</h1>
			<h2><Link to="/">Bring me back Home</Link></h2>
		</div>
	</div>
)
export default orderSuccess