import React, { Component } from 'react';    

export default class Weather extends Component {
    render() {  
        return(  
            <div className="container"> 
                  <h2>Welcome To Weather Page.</h2>  
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
        )
    }
}