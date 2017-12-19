import React, { Component } from 'react';
import  './style.css';
import { Navbar, FormControl, FormGroup, Button, Jumbotron, PageHeader, DropdownButton, MenuItem, Form, option, Table, Image, img, className } from 'react-bootstrap';
import axios from 'axios';

export default class Pet extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            breeds: [] 
        } ;   
      } 

      componentWillMount()
      {
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then((response) => {
            if(response.status==200)
            // {
            //     var breeds=[];
            //     for(var index=0; index< response.data.breeds.lenght-1; index++)
            //     {
            //         breeds.push(
            //             {

            //             });
            //     }
            // }
            console.log(response.data.breeds);
            this.setState({'breeds': response.data.breeds});
        })
        .catch(function(error){
            console.log(error);
        });       
      }

      generateDogsBreedList(lists)
      {
         
      };

    render() {
        return (
            <div className="container">
                <PageHeader>Best<small> friend you will ever have </small></PageHeader>
                <Form inline>
                    <div> <b>find your love</b> </div>
                    <FormGroup controlId="formInlineSearchBox" className="pets">
                        {' '}
                        <FormControl componentClass="select" className = "dropdown" placeholder="select">
                            <option value="dogs">Dog</option>
                            <option value="cats">Cat</option>
                            <option value="others">Other</option>
                        </FormControl>
                    </FormGroup>
                    {' '}
                    {/* <FormGroup controlId="formInlineSearchBox">
                        {' '}
                        <FormControl type="text" placeholder="Breed" />
                    </FormGroup>
                    {' '} */}
                    <Button type="submit" className="table-header">Go Fetch</Button>
                </Form>
              {/*  <Table responsive className="table-margin">                    
                    <thead className="table-header">
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Breed</th>
                            <th>Description</th>
                        </tr>
                    </thead>                    
                     <tbody>
                        <tr>
                            <td><Image src='http://dog.ceo//api//img//dane-great//n02109047_10414.jpg' className="image-header" rounded /> </td>
                            <td>Tiger</td>
                            <td>Dane</td>
                            <td>The Great Dane is a large German breed of domestic dog known for its giant size</td>
                        </tr>
                        <tr>
                            <td><Image src='https://dog.ceo//api//img//terrier-toy//n02087046_2551.jpg' className="image-header" rounded /> </td>
                            <td>Tommy</td>
                            <td>Dane</td>
                            <td>The Great Dane is a large German breed of domestic dog known for its giant size</td>
                        </tr>
                    </tbody> 
                </Table>*/}
            </div>
        )
    }
}