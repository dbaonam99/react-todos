import React, { Component } from 'react';
import '../App.css';

class FollowFriendListItem extends Component {
    render() {
        return (
            <div className="FollowFriendListItem d-flex list-fl">
                <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/73321413_146697059956770_7174055866474168320_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=jPuIi6GTZBYAX80KjPO&_nc_ht=scontent.fsgn2-1.fna&oh=64c565054aa4154a498dd3214608e2ed&oe=5F60537C" height="48px" width= "48px"></img>
                <div class="center-name">
                    <p className="user-name">{this.props.user}</p>
                    <p>Gợi ý cho bạn</p>
                </div>
                <div className="fl-text">
                    Theo dõi
                </div>
                    
            </div>
        );
    }
}

export default FollowFriendListItem;