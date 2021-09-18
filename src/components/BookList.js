import axios from 'axios';
import React, { Component } from 'react';
import { Card,Form,Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = { passangers:[]}
        this.submitForm = this.submitForm.bind(this);
        this.setValues = this.setValues.bind(this);
        // this.flightChange2 = this.flightChange2.bind(this);

    }

    submitForm(e){
        e.preventDefault();
        console.log(this.props.location.state);
        const flight_id = this.props.location.state;
        const reqObj = {
            firstname: this.state.first,
            lastname: this.state.last,
            gender:this.state.gender,
            email:this.state.email,
            flightId: flight_id,
        }
        axios.post(`http://localhost:8999/passengar/save`,reqObj)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.props.history.push({ //browserHistory.push should also work here
                pathname: `/details`,
                state: res.data
            }); 
        })
        .catch(err => {
            console.log(err)
        })
    }


    setValues (event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        console.log(this.props);
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Book Flight</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.setValues} name="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicfirst">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control  onChange={this.setValues} name="first" type="first" placeholder="Enter first" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasiclast">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control  onChange={this.setValues} name="last" type="last" placeholder="Enter last" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicgender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control  onChange={this.setValues} name="gender"  type="gender" placeholder="Enter gender" />
                    </Form.Group>
                    
                    <Button onClick={this.submitForm} variant="primary" type="submit">
                        Submit
                    </Button>   
                </Form>
                </Card.Body>
            </Card>
            
        );
    }
}

export default BookList;