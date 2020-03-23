import React from "react";
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
 

import Games from './pages/Games/Games'; 
import Projects from './pages/Projects/Projects'; 
import About from './pages/About/About';  
import Contact from './pages/Contact/Contact'; 


function LandingRouter({ match }) {
    return ( 
        <React.Fragment>
            <div className="lp2_container">
                <div className="lp2_menu"><NavBar /></div>
                <div className="lp2_body">
                    <Switch> 
                        <Route exact path="/landing/games" component={Games} /> 
                        <Route exact path="/landing/projects" component={Projects} /> 
                        <Route exact path="/landing/about" component={About} /> 
                        <Route exact path="/landing/contact" component={Contact} /> 
                    </Switch>
                </div> 
            </div>
        </React.Fragment>
    );
}

export default LandingRouter;

