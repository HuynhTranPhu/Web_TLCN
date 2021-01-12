import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/NavBar/index'
import BottomBar from '../Common/BottomBar/index'
import Footer from '../Common/Footer/Footer'
const Success = () =>{
	return (
		<>
			<TopBar/>
            <NavBar/>
            <BottomBar  ></BottomBar>
			<div className="container text-center">
				<div className="content-404">
					<h1><b>CONGRATULATIONS!</b></h1>
					<p></p>
					<h2><Link to="/">Bring me back Home</Link></h2>
				</div>
			</div>
			<Footer/>
		</>
		
	)
}
export default Success