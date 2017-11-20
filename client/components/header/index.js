import React, { Component } from 'react'; 

export default class Header extends Component {
    render() {
        var headerStyle={ 
            background:'green',
            height: '40px',
            color: '#fff',
            fontweight: 'bold',
            textalign: 'center',
            paddingtop: '9px',
            fontsize: '20px'
        }

        return(
        <div style={headerStyle}> 
             REACT POC Application 
        </div>       
        )
    }
}