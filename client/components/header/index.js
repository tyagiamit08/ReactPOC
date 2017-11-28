import React, { Component } from 'react'; 
// import CSSModules from 'react-css-modules';
//import styles from './style.css'  ;
import  './style.css'  ;
import Home from '../../routes/home/';
import Weather from '../../routes/weather/';
import Dogs from '../../routes/dogs/';
import Cocktail from '../../routes/Cocktails/';

import  {Navbar,NavItem,MenuItem,Nav,NavDropdown,Breadcrumb,Button,Image } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink, browserHistory  } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    render() {  
        return(
            <div>
                <Router history={browserHistory}>
                    <div>   
                        <div className="blueBack"> asda dsa dsa dsa  sadad
                            </div>
                        <div style={{'background': '#222222','height': '50px','color':'#9d9d9d','text-align': 'center','padding-top': '9px','font-size': '18px'}}> 
                            <span style={{'margin-right': '805px'}}>React POC </span> 
                            <span style={{'margin-right': '10px'}}> 
                             <NavLink to='/' style={{'font-size': '15px'}}>Home</NavLink> |
                             <NavLink to='/Weather' style={{'font-size': '15px'}}> Weather</NavLink> | 
                             <NavLink to='/Dogs' style={{'font-size': '15px'}}> Dogs</NavLink>   | 
                             <NavLink to='/Cocktail' style={{'font-size': '15px'}}> Cocktails</NavLink> 
                            </span> 
                            {/* <img src={require('../../poc.jpg')} /> */}
                        </div>    
                            {/* <Switch> */}
                                <Route exact path='/' component={Home} />
                                <Route  path='/Weather' component={Weather} />
                                <Route  path='/Dogs' component={Dogs} /> 
                                <Route  path='/Cocktail' component={Cocktail} /> 
                            {/* </Switch> */}
                    </div>
                </Router>   
                 
                 {/* <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a to="/">React POC</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                         <LinkContainer to={'/Weather'}>
                                 <NavItem eventKey={1} href="/" to="/">Home</NavItem>  
                         </LinkContainer>
                        <NavItem eventKey={2} href="/Weather" to="/Weather">Weather</NavItem> 
                        <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
                        <LinkContainer to="/Weather">
                               <MenuItem eventKey={3.1}>Dogs</MenuItem>
                        </LinkContainer>
                        <MenuItem eventKey={3.2}>Books</MenuItem>
                        <MenuItem eventKey={3.3}>Music</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Help</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Welcome Amit Tyagi</NavItem>
                        <NavItem eventKey={2} href="#">Profile</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>     */}
 
      </div>  
        )
    }
}