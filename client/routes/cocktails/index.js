import React, { Component } from 'react';   
import  {FormGroup ,FormControl ,ControlLabel,PageHeader,Table ,Image,Button} from 'react-bootstrap';
import axios from 'axios';

import './style.css'

export default class Cocktail extends Component {
 
    constructor(props) {
        super(props);
        this.state = { 
            drinks: [] ,
            cocktails:[],
            selectedValue:"Martini"
        } ;   

        this.handleChange = this.handleChange.bind(this);
        this.getDrink = this.getDrink.bind(this); 
      } 

    componentWillMount() {
        axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then((response) => { 
                if(response.status==200) {               
                    var drinks=[];  
                    for (var i = 0; i < response.data.drinks.length-1; i++) {
                       drinks.push(
                            {   name:response.data.drinks[i].strDrink,
                                url:response.data.drinks[i].strDrinkThumb,
                                id:response.data.drinks[i].idDrink
                            });
                    }    
                    
                    this.setState({ 'cocktails':drinks})
                }
            })
        .catch(function (error) {
            console.log(error);
        });    
    }

    generateDrink (drink) {  
         
        return  drink.map((drk, i) =>         
            <tr>
                 <td><Image  src={drk.strDrinkThumb} className="profile" rounded /></td>
                 <td>{drk.strAlcoholic}</td>
                 <td>{drk.strDrink}</td>
                 <td>{drk.strInstructions}</td>
            </tr> );  
    };

    generateCocktails (lists) {   
            return lists.map((cocktail, i) =>         
                <option value={cocktail.id}>{cocktail.name}</option>
        );
    };

    handleChange (e) {   
        this.setState({selectedValue:e.target.value});
      };

    getDrink(){
        axios.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+this.state.selectedValue)
        .then((response) => { 
                if(response.status==200) 
                console.log(response.data.drinks);
                    this.setState({ 'drinks':response.data.drinks}); 
                })
        .catch(function (error) {
            console.log(error);
        }); 
    }

    render() {  

        let drink= this.state.drinks !==undefined? this.generateDrink(this.state.drinks) :null;
        let cocktails= this.state.cocktails !==undefined? this.generateCocktails(this.state.cocktails) :null;

        return( 
            
        <div className="container"> 
              <PageHeader>Cocktails <small>Browse Cocktail recipies.</small></PageHeader>
                 <form>
                       <FormGroup  controlId="txtSearch">
                            <ControlLabel>Search cocktail by name</ControlLabel>   
                                <FormControl componentClass="select" className="select" placeholder="select" defaultValue={this.state.selectedValue}  onChange={this.handleChange} >
                                  {cocktails}
                                </FormControl> 
                                    <Button bsStyle="primary"  className="btn-submit background" onClick={this.getDrink} >Submit</Button>
                        </FormGroup>    
                           
                </form> 
                <Table responsive>
                        <thead className="background">
                            <tr>
                                <th width="20%">PROFILE</th>
                                <th width="15%">ALCHOHOLIC</th> 
                                <th width="15%">DRINK</th>
                                <th width="50%">INSTRUCTIONS </th>
                           </tr>
                        </thead>   
                        <tbody> 
                          {drink}
                        </tbody>
                  </Table>  
        </div>  
        )
    }
}