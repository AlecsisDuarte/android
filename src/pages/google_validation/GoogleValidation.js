import React, { Component } from 'react';
import GoogleVerification from './google_verification.json'

class GoogleValidation extends Component {
    render() {
        return (
            <div className="GoogleValidation">{GoogleVerification.token}</div>
        );
    }
}

export default GoogleValidation;
