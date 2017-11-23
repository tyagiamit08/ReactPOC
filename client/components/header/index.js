import React, { Component } from 'react'; 
//import  './style.css' 
import Home from '../../routes/home/';
import Weather from '../../routes/weather/';
import Dogs from '../../routes/dogs/';

import  {Navbar,NavItem,MenuItem,Nav,NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Header extends Component {
    render() {  
        return(
            <div>
                {/* <div style={{'background': 'green','height': '40px','color': '#fff','font-weight': 'bold','text-align': 'center','padding-top': '9px','font-size': '20px'}}> 
                    <span>REACT POC Application </span> 
                </div>   */}
                {/* <Router>
                        <div>   
                            <Link to={'/'}>Home</Link> | <Link to={'/Weather'}>Weather</Link> | <Link to={'/Dogs'}>Dogs</Link>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/Weather' component={Weather} />
                                <Route exact path='/Dogs' component={Dogs} />
                            </Switch>
                        </div>
                    </Router>  */} 
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React POC</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavItem eventKey={2} href="/Weather">Weather</NavItem>
                        <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Dogs</MenuItem>
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
                </Navbar>
      </div>  
        )
    }
}