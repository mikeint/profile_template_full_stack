import React from 'react';
import './NavBar.css'; 
import { Redirect} from "react-router-dom";
import AuthFunctions from '../../AuthFunctions';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            logout: false, 
        }
        this.Auth = new AuthFunctions();
    }

    componentDidMount = () => {
        var navMobile = document.getElementById("nav-icon1"); 
        var navSlideOut = document.getElementById("side-menu");  
        
        if (document.getElementById("nav-icon1") !== undefined) {
            navMobile.onclick = function () {
                navMobile.classList.toggle("open");
                navSlideOut.classList.toggle("active-side-menu");
            }
        }
    }


    /* ...NAV BAR functions... */
    handleLogout = () => {
        this.Auth.logout();
        this.setState({logout: true})
    }
    toggleMobileMenu = () => { 
        document.getElementById("nav-icon1").classList.remove("open");
        document.getElementById("side-menu").classList.remove("active-side-menu");
        window.scrollTo(0,0);
    }
    /* ...NAV BAR functions... */


    render(){
        if(this.state.logout){
            return <Redirect to='/login'/>
        }
        return (
            <React.Fragment> 
                <div id="header"> 
                    <div id="navBar">
                        <li className="navBarA"><Link to="/newPage"><div className="admNavBtn">Page1</div></Link></li>
                        <li className="navBarA"><Link to="/newPage"><div className="admNavBtn">Page2</div></Link></li>
                        <li className="navBarA"><Link to="/newPage"><div className="admNavBtn">Page3</div></Link></li> 
                        <li className="navBarA"><div className="admNavBtn" onClick={this.handleLogout}>Log Out</div></li>
                    </div>

                    <div id="navBarMobile">
                        <div id="nav-icon1">
                            <span className="hmbSpanA"></span>
                            <span className="hmbSpanA"></span>
                            <span className="hmbSpanA"></span> 
                        </div>
                        <div className="side-menu" id="side-menu">
                            <li><Link to="/" onClick={this.toggleMobileMenu}>Home</Link></li> 
                            <li><Link to="/about" onClick={this.toggleMobileMenu}>About</Link></li>
                            <li><Link to="/contact" onClick={this.toggleMobileMenu}>Contact</Link></li>
                            <li><div className="admNavBtn" onClick={this.handleLogout}>Log Out</div></li>
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
};

export default NavBar;
