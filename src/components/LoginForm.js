import React, { Component } from 'react';
import '../App.css';

class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm d-flex login">
                <p className="signin-title">Sign in</p>
                <form>
                    <div className="input-container">
                        <p>Username</p>
                        <input type="text"/>
                    </div>
                    <div className="input-container">
                        <p>Password</p>
                        <input type="text"/>
                    </div>
                    <div className="signin-btn d-flex">Signip to Coders-x</div>
                </form>
            </div>
        );
    }
}

export default LoginForm;