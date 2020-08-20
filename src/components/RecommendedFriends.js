import React, { Component } from 'react';
import '../App.css';
import FollowFriendListItem from './FollowFriendListItem.js';

class RecommendedFriends extends Component {
    render() {
        return (
            // <div className="RecommendedFriends d-flex">
                
            //     <div className="recommendList"></div>
            // </div>

            <div className="RecommendedFriends d-flex rec">
                <div className="recommend-box d-flex">
                    <div className="d-flex title">
                        <p className="left">Gợi ý cho bạn</p>
                        <p className="right">Xem tất cả</p>
                    </div>
                    <div className="list">
                        {this.props.friends.map(friend =>
                            < FollowFriendListItem user={friend.name} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecommendedFriends;