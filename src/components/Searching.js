import React, { Component } from 'react'
import { Card, Form, Button, Col,Row } from 'react-bootstrap'
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Searching extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flights: []
        };
        this.state = { flight: '', source: '', designation: '', show: false };
        this.submitFlight = this.submitFlight.bind(this);
        this.flightChange = this.flightChange.bind(this);
        // this.flightChange2 = this.flightChange2.bind(this);

    }

    submitFlight(event) {
        // alert(this.state.from + this.state.to + this.state.date);
        event.preventDefault();

        const flight = {
            flight: this.state.flight,
            source: this.state.source,
            designation: this.state.designation
        };
        axios.post("http://localhost:8080/search/money", flight)
            // .then(response => response.data)
            .then(response => {
                if (response.data != null) {
                    this.setState({ show: true });
                }
                else {
                    console.log("hi")
                    this.setState({ show: true });
                }
            }).then((data) => this.setState({ flights: data }));
        console.log(this.state.flights)
        // this.props.history.push('/flight-list')

    }
    flightChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>

                <h1>hello</h1>
                <Form onSubmit={this.submitFlight} id="flightFormId">
                        <Row>
                            <Col>
                                <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                    <Form.Label>Departure Airport</Form.Label>
                                    <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="flight" onChange={this.flightChange} required >
                                        <option value="-">-</option>
                                        <option value="Bangalore" >Bangalore (BLR)</option>
                                        <option value="Delhi">Delhi (DEL)</option>
                                        <option value="Hyderabad">Hyderabad (HYD)</option>
                                        <option value="Kolkata">Kolkata (CCU)</option>
                                        <option value="Mumbai">Mumbai (BOM)</option>
                                        <option value="Pune">Pune (PNQ)</option>
                                        <option value="Chennai">Chennai (MAA)</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                    <Form.Label>Destination Airport</Form.Label>
                                    <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="source" onChange={this.flightChange} required >
                                        <option value="-">-</option>
                                        <option value="Bangalore" >Bangalore (BLR)</option>
                                        <option value="Delhi">Delhi (DEL)</option>
                                        <option value="Hyderabad">Hyderabad (HYD)</option>
                                        <option value="Kolkata">Kolkata (CCU)</option>
                                        <option value="Mumbai">Mumbai (BOM)</option>
                                        <option value="Pune">Pune (PNQ)</option>
                                        <option value="Chennai">Chennai (MAA)</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        <Col>
                        <Form.Group style={{ width: '80%', margin: 'auto' }}>
                        <Form.Label>Planning on</Form.Label>
                        <Form.Control type="date" placeholder="" name="designation" style={{ borderLeftWidth: '30px' }} onChange={this.flightChange2} required />
                        </Form.Group>
                        </Col>
                        </Row>
                        <br />
                        <Form.Group style={{ width: '10%', margin: 'auto' }}>
                        <Button variant="primary" type="submit" style={{  }}>
                            Search
                        </Button>
                        </Form.Group>

                    </Form>
            </div>
        );
    }
}

export default Searching;