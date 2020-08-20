import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const {item, onClick} = this.props;
        return (
            <div onClick={onClick} className={item.isCompleted ? 'Todo complete' : 'Todo'}>
                <p>{item.id}. {item.title}</p>
            </div>
        );
    }
}

export default Todo;