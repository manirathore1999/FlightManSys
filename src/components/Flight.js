import React from 'react';
import { useHistory } from 'react-router-dom';

const Flight = (props) =>{
    const flightName = props.data.flight;
    const source = props.data.source;
    const designation = props.data.designation;
    const fare = props.data.fare;
    // console.log(flight);
    console.log(props);
    let history = useHistory();
    const clickHandler = () => {
        // window.location.href = `${window.location.origin}/book`
        history.push({ //browserHistory.push should also work here
            pathname: `/book`,
            state: props.data.id
        }); 
    }
        return (
            <div>
                <h2>{flightName}</h2>
                <h2>{source}</h2>
                <h2>{designation}</h2>
                <h2>{fare}</h2>
                <button onClick={clickHandler}>Book Now</button>
            </div>
        );
}

export default Flight;