import React, { Component } from 'react'; 
import  './style.css'  ;
import Home from '../../routes/home/';
import Weather from '../../routes/weather/';
import Dogs from '../../routes/dogs/';
import Cocktail from '../../routes/Cocktails/';

import { BrowserRouter as Router, Route, NavLink, browserHistory  } from 'react-router-dom'; 

export default class Header extends Component {
    render() {  
        return(
            <div>
                <Router history={browserHistory}>
                    <div>    
                        <div className="header" > 
                            <span className="header-title">
                                <NavLink to='/'> React POC  <img src={require('../../images/poc.jpg')} className="header-logo-image" /></NavLink>
                            </span> 
                            <span  className="header-links-right"> 
                                <NavLink to='/' className="size-15">Home</NavLink> |
                                <NavLink to='/Weather' className="size-15"> Weather</NavLink> | 
                                <NavLink to='/Dogs' className="size-15"> Dogs</NavLink>   | 
                                <NavLink to='/Cocktail' className="size-15"> Cocktails</NavLink> 
                            </span>  
                        </div>     
                            <Route exact path='/' component={Home} />
                            <Route  path='/Weather' component={Weather} />
                            <Route  path='/Dogs' component={Dogs} /> 
                            <Route  path='/Cocktail' component={Cocktail} />  
                    </div>
                </Router>  
      </div>  
        )
    }
}