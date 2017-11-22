import React, { Component } from 'react'; 
//import  './style.css' 
import Home from '../../routes/home/';
import Weather from '../../routes/weather/';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class Header extends Component {
    render() {  
        return(
            <div>
                <div style={{'background': 'green','height': '40px','color': '#fff','font-weight': 'bold','text-align': 'center','padding-top': '9px','font-size': '20px'}}> 
                    <span>REACT POC Application </span> 
                </div>  
                <Router>
                        <div>   
                            <Link to={'/'}>Home</Link> | <Link to={'/Weather'}>Weather</Link>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/Weather' component={Weather} />
                            </Switch>
                        </div>
                </Router> 
      </div>  
        )
    }
}