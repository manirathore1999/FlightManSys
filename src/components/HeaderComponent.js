import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (

            <Navbar variant="dark" bg="secondary"  >
                <Link to={""} className="navbar-brand" style={{color:"golden"}}>
                Flight Booking
                </Link>
                <Nav className="me-auto">
                    <Link to={"addflight"} className="nav-link" style={{color:"white"}}>Add Flights</Link>
                    <Link to={"list"} className="nav-link" style={{color:"white"}}>Flights</Link>
                    <Link to={"book"} className="nav-link" style={{color:"white"}}>Book</Link>
                    <Link to={"searchFlights"} className="nav-link" style={{color:"white"}}>Search Flights</Link>
                    
                </Nav>
                <Nav className="navbar-right">
                    <Link to={"register"} className="nav-link" style={{color:"white"}}><FontAwesomeIcon icon={faUserPlus} />Register</Link>
                    <Link to={"login"} className="nav-link" style={{color:"white"}}><FontAwesomeIcon icon={faSignInAlt} />Login</Link>

                </Nav>
          </Navbar>
            
            
        )
    }
}

export default HeaderComponent