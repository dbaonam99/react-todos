import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <div className="Header d-flex header">
                <div className="return">
                    <p>Go back</p>
                </div>
                <div className="logo">
                    <img src="https://coders-x.com/wp-content/themes/codersx/dist/images/logo@256.png"/>
                </div>
                <div className="signup">Sign Up</div>
            </div>
        );
    }
}

export default Header;