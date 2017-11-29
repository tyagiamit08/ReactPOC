import React, { Component } from 'react';   
import  {FormGroup ,FormControl ,ControlLabel,PageHeader,Table ,Image,Col,Button} from 'react-bootstrap';
import axios from 'axios';

export default class Cocktail extends Component {
 
    constructor(props) {
        super(props);
        this.state = { 
            drinks: undefined 
        } ; 

       this.generateDrinksList = this.generateDrinksList.bind(this);
      }

    componentWillMount() {
        axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(function (response) {
             console.log(response);
                if(response.status==200) 
                   this.setState({ drinks:response.data.drinks});
                })
        .catch(function (error) {
             console.log(error);
        });
    }

    generateDrinksList (lists) { 
        console.log(lists);
           return lists.map((list, index) =>
            <tr>
                <td><Image  src={list.strDrinkThumb} style={{'width': '100px','height': '100px'}} rounded /></td>
                <td>{list.Alchoholic}</td>
                <td>{list.Name}</td>
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
                                    <Button bsStyle="primary"  style={{'margin-top': '-33px','margin-right': '750px','float': 'right'}}>Submit</Button>
                        </FormGroup>    
                           
                </form> 
                <Table responsive>
                        <thead style={{'background':'#337ab7'}}>
                            <tr>
                                <th>Name asd adad</th>
                                <th>Alchoholic</th> 
                                <th>Drink</th>
                                <th>Instructions </th>
                        </tr>
                        </thead>   
                        <tbody> 
                            {/* {drinksList} */}  
                             <tr>
                                <td><Image  src="http://www.thecocktaildb.com//images//media//drink//wpxpvu1439905379.jpg" style={{'width': '100px','height': '100px'}} rounded /></td>
                                <td>Yes</td>
                                <td>Margarita</td>
                                <td>Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.</td>
                            </tr>      
                            <tr> 
                                <td> 
                                    <Image src="http://www.thecocktaildb.com//images//media//drink//loezxn1504373874.jpg" style={{'width': '100px','height': '100px'}} rounded/>
                                </td>
                                <td>Yes</td>
                                <td>Margarita</td>
                                <td>Shake and strain into a chilled cocktail glass.</td>
                            </tr>  
                            </tbody>
                  </Table>  
        </div>  
        )
    }
}