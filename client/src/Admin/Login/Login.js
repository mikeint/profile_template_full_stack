import React, { Component } from "react";
import './Login.css'; 

import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';

class Login extends Component {
    constructor() {
        super();
		this.state = {  
            tabState: '1', 
		}; 
    }    

    changeTab = (tab) => {
        this.setState({ tabState: tab });
    }

    render() {
         return ( 
                <div className="loginContainer">
                    <div className="loginMiddle">
                        <div className="loginContent">
                            {/* <h2><img src={bannerAlpha} alt="logo" /></h2> */}

                            {
                                this.state.tabState === "1" ?
                                <div><LoginForm /></div>
                                :
                                <div><RegisterForm/></div>
                            }

                        </div>
                        <div id="tabContainer" className="tabContainer"> 
                            <div className={this.state.tabState==="1" ? "tab-item active" : "tab-item"} onClick={() => this.changeTab("1")}>Sign In</div>
                            <div className={this.state.tabState==="2" ? "tab-item active" : "tab-item"} onClick={() => this.changeTab("2")}>Sign Up</div>
                        </div>
                    </div>  
                </div>  
        );
    }
}

export default Login;

