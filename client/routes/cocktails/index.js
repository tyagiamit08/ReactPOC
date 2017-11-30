import React, { Component } from 'react';   
import  {FormGroup ,FormControl ,ControlLabel,PageHeader,Table ,Image,Col,Button} from 'react-bootstrap';
import axios from 'axios';

import './style.css'

export default class Cocktail extends Component {
 
    constructor(props) {
        super(props);
        this.state = { 
            drinks: [] 
        } ;   
      } 

    componentWillMount() {
        axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then((response) => { 
                    if(response.status==200) 
                    console.log(response.data.drinks);
                        this.setState({ 'drinks':response.data.drinks}); 
                    })
            .catch(function (error) {
                console.log(error);
            });
    }

    generateDrinksList (lists) {   
           return lists.map((list, i) =>         
                <tr>
                    <td><Image  src={list.strDrinkThumb} style={{'width': '100px','height': '100px'}} rounded /></td>
                    <td>{list.strAlcoholic}</td>
                    <td>{list.strDrink}</td>
                    <td>{list.strInstructions}</td>
                </tr> 
        )
    };

    render() {  

        let drinksList= this.state.drinks !==undefined? this.generateDrinksList(this.state.drinks) :null;

        return( 
            
        <div className="container"> 
              <PageHeader>Cocktails <small>Browse Cocktail recipies.</small></PageHeader>
                 <form>
                       <FormGroup  controlId="txtSearch">
                            <ControlLabel>Search cocktail by name</ControlLabel>
                                    <FormControl type="text" placeholder="Enter Name" style={{'width': '25%'}} /> 
                                    <Button bsStyle="primary"  className="btn-submit background" >Submit</Button>
                        </FormGroup>    
                           
                </form> 
                <Table responsive>
                        <thead className="background">
                            <tr>
                                <th>Name</th>
                                <th>Alchoholic</th> 
                                <th>Drink</th>
                                <th>Instructions </th>
                        </tr>
                        </thead>   
                        <tbody> 
                            {drinksList}   
                        </tbody>
                  </Table>  
        </div>  
        )
    }
}