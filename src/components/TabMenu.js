import React, { Component } from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';

class TabMenu extends Component {
    render() {
        return (
            <div className="TabMenu d-flex tabmenu">
                {this.props.items.map(item =>
                    <div className="tabBox d-flex tab">
                        <img src={item.icon} width="32px" height="32px"/>
                        <p>{item.label}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default TabMenu;