import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './NavBar.scss' 
 
  

class NavBar extends Component {
    
	render() {
		return ( 
            <div className="lp2_navBar"> 
            
                <div className="navBar">
                    <div className="topNavContainer"> 
                        <NavLink to="/" className="navItem"><img src={ require('../../files/images/logoLW.png') } /></NavLink> 
                        <NavLink to="/landing/games" className="navItem">Games</NavLink> 
                        <NavLink to="/landing/projects" className="navItem">Projects</NavLink>
                        <NavLink to="/landing/about" className="navItem">About</NavLink>
                        <NavLink to="/landing/contact" className="navItem">Contact</NavLink>
                    </div> 
                </div>


            </div> 
        ) 
  	}
} 

export default withRouter((NavBar));