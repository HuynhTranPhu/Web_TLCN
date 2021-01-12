import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/TopBar/TopBar'
import BottomBar from '../Common/TopBar/TopBar'
import Footer from '../Common/TopBar/TopBar'
const Fail = () =>{
	return(
		<>
			<TopBar/>
            <NavBar/>
            <BottomBar  ></BottomBar>
			<div className="container text-center">
				<div className="content-404">
					<h1><b>OPPS!</b>Fail</h1>
					<p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
					<h2><Link to="/">Bring me back Home</Link></h2>
				</div>
			</div>
			<Footer/>
		</>
		
	)

} 
export default Fail