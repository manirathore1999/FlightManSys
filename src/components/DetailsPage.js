import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const DetailPage = (props) => {
    let location = useLocation();
    const details = location.state;
    const [flightDetails,setFlightDetails] = useState(null);

    useEffect(() => {
       axios.get('http://localhost:8999/search/findbyid', null, { params: details.flightId})
       .then(res => {
           console.log(res.data);
           setFlightDetails(res.data);
       })
       .catch(err => console.log(err));
    });

    return(
        <div>
            <h3>First Name: {details.firstname}</h3>
            <h3>Last Name: {details.lastname}</h3>
            <h3>Email Id: {details.email}</h3>
            <h3>Gender: {details.gender}</h3>
            <h3>{flightDetails}</h3>
        </div>
    );
}

export default DetailPage;