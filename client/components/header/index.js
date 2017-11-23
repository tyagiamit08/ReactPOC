import React, { Component } from 'react'; 
//import  './style.css' 
import Home from '../../routes/home/';
import Weather from '../../routes/weather/';
import Dogs from '../../routes/dogs/';

import  {Navbar,NavItem,MenuItem,Nav,NavDropdown,Breadcrumb,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    render() {  
        return(
            <div>
                <Router>
                    <div>  
                        <div style={{'background': '#222222','height': '50px','color':'#9d9d9d','text-align': 'center','padding-top': '9px','font-size': '18px'}}> 
                            <span style={{'margin-right': '890px'}}>React POC</span> 
                            <span style={{'margin-right': '10px'}}> 
                            <Link to={'/'} style={{'font-size': '15px'}}>Home</Link> | <Link to={'/Weather'} style={{'font-size': '15px'}}>Weather</Link> | <Link to={'/Dogs'} style={{'font-size': '15px'}}>Dogs</Link>  
                            </span> 
                        </div>    
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/Weather' component={Weather} />
                                <Route exact path='/Dogs' component={Dogs} />
                            </Switch>
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