import React, { Component } from 'react';
import { Card,Form,Button } from 'react-bootstrap';

class BookList extends Component {
    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Book Flight</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicfirst">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="first" placeholder="Enter first" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasiclast">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="last" placeholder="Enter last" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicgender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="gender" placeholder="Enter gender" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>   
                </Form>
                </Card.Body>
            </Card>
            
        );
    }
}

export default BookList;