import React, { Component } from 'react';
import { Card, Form, Button, Col,Row } from 'react-bootstrap';
import axios from 'axios';

import Flight from './Flight';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



class Searching extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flights: [],
            showFlights: false
        };
        this.state = { date: '', source: '', designation: '', show: false };
        this.submitFlight = this.submitFlight.bind(this);
        this.flightChange = this.flightChange.bind(this);
        // this.flightChange2 = this.flightChange2.bind(this);

    }


    submitFlight(event) {
        // alert(this.state.from + this.state.to + this.state.date);
        event.preventDefault();
        console.log(this.state.source);
        console.log(this.state.designation);
        console.log(this.state.date);
        const srchReqObj = {
            // flight: this.state.flight,
            source: this.state.source,
            designation: this.state.designation,
            date: '2021-08-11'
        };
        axios.post(`http://localhost:8999/search/getflights`, null, { params: srchReqObj})//{}
            .then(res => {
                console.log(res);
                
                this.setState({
                    flights: res.data,
                    showFlights: true
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
            
       
    renderFlightHandler() {
        console.log(this.state.flights);
        const resFlights = this.state.flights;
        const flightDetails = resFlights.map((flight) => {
            return(<Flight data={flight}/>)
        })
        return flightDetails;
    }

    flightChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const flightDetails = null;
        return (
            <div>

                <h1>hello</h1>
                <Form onSubmit={this.submitFlight} id="flightFormId">
                        <Row>
                            <Col>
                                <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                    <Form.Label>Departure Airport</Form.Label>
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
                                    <Form.Label>Destination Airport</Form.Label>
                                    <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="designation" onChange={this.flightChange} required >
                                        <option value="-">-</option>
                                        <option value="Bangalore" >Bangalore (BLR)</option>
                                        <option value="Delhi">Delhi (DEL)</option>
                                        <option value="Patna">Patna (PAT)</option>
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
                        <Form.Control type="date" placeholder="" name="date" style={{ borderLeftWidth: '30px' }} onChange={this.flightChange} required />
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
                    {this.state.showFlights && <h1>Your results</h1> && this.renderFlightHandler()}
                    {/* <Flight data={dummyResGlobal}/> */}
            </div>
        );
    }
};


export default Searching;