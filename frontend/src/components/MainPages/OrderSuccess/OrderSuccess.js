import React from 'react'
import { Link} from 'react-router-dom'
import TopBar from '../../Common/TopBar/TopBar'
import NavBar from '../../Common/NavBar/index'
import BottomBar from '../../Common/BottomBar/index'
import Footer from '../../Common/Footer/Footer'
const orderSuccess = () => {
	return <div>
		<TopBar/>
		<NavBar/>
		<BottomBar  ></BottomBar>
		<div className="container text-center">
			<div className="content-404">
				<img src="/img/confirm.png" className="img-responsive" alt="" />
				<h1><b>Congratulations!!!
				</b> Your order had been place order, this your order will delivering soon!!!</h1>
				<h2><Link to="/">Bring me back Home</Link></h2>
			</div>
		</div>
		<Footer/>

	</div>

}
	
    
export default orderSuccess