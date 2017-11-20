import React, { Component } from 'react';  
import { Button } from 'react-bootstrap'; 
import Header from '../components/Header/'

export default class App extends Component {
  render() {
    return (   
         <div>
          <Header /> 
              <div className="container"> 
                  <h2>Contextual Classes</h2>
                  <p>Contextual classes can be used to color table rows or table cells. The classes that can be used are: .active, .success, .info, .warning, and .danger.</p>
                  <table className="table">
                  <thead>
                      <tr>
                        <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>Default</td>
                        <td>Defaultson</td>
                        <td>def@somemail.com</td>
                      </tr>      
                      <tr className="success">
                        <td>Success</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                      </tr> 
                    </tbody>
                  </table> 
            </div>  
        </div> 
    );
  }
}
