import React, { Component } from 'react';   
import  {FormGroup ,FormControl ,ControlLabel,PageHeader,Table ,Image,Col} from 'react-bootstrap';

export default class Cocktail extends Component {
    render() {  
        return( 
        <div className="container"> 
              <PageHeader>Cocktails <small>Browse Cocktail recipies.</small></PageHeader>
                    <form>
                            <FormGroup  controlId="formBasicText">
                            <ControlLabel>Search cocktail by name</ControlLabel>
                                    <FormControl type="text" placeholder="Enter Name"  /> 
                            </FormGroup>
                     </form>
 
                 <Table responsive>
                        <thead style={{'background':'#337ab7'}}>
                            <tr>
                                <th>Name</th>
                                <th>Alchoholic</th> 
                                <th>Drink</th>
                                <th>Instructions </th>
                        </tr>
                        </thead>   
                        <tbody>
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