import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'

class GoogleOauth extends Component {

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }

    render() {
        return (
            <div>
                <GoogleLogin
                clientId=""
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default GoogleOauth;