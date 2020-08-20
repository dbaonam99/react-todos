import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header.js';
// import LoginForm from './components/LoginForm.js';
// import TabMenu from './components/TabMenu.js';
// import RecommendedFriends from './components/RecommendedFriends.js';
import Todo from './components/Todo.js';
import './components/Todo.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { id: '1', title: 'Mua bim bim', isCompleted: true},
        { id: '2', title: 'Học bài', isCompleted: false},
        { id: '3', title: 'Coi phim', isCompleted: false},
        { id: '4', title: 'Chơi game', isCompleted: false},
        { id: '5', title: 'Nghe nhạc', isCompleted: true}
      ]
    }
  }

  onItemClicked(item) {
    return (event) => {
      const todoItems = this.state.todoItems;
      const isCompleted = item.isCompleted;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isCompleted: !isCompleted
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const { todoItems } = this.state;

    let notdone = todoItems.filter((item)=> {
      return item.isCompleted === false;
    })
    let done = todoItems.filter((item)=> {
      return item.isCompleted === true;
    })

    if (todoItems.length > 0) {
      return (
        <div className="App">
          <div className="box-container">
            <div className="box-title">TODO LIST</div>
              <div className="box">
              <p className="small-title">Upcoming</p>
              {
                notdone.map((item, index) =>
                  <Todo key={index} item={item} onClick={this.onItemClicked(item)}/>
              )}
              <p className="small-title">finished</p>
              {
                done.map((item, index) =>
                  <Todo key={index} item={item} onClick={this.onItemClicked(item)}/>
              )}
            </div>
            <div className="add-btn">
              <img src="https://cdn.glitch.com/671be2db-721c-4dd5-bc2c-9ac7fcbf5d32%2Fplus-2.svg?v=1597730702013" width="16px"></img>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="box-container">
            <div className="box-title">TODO LIST</div>
            <p>Nothing here</p>
          </div>
        </div>
      )
    }
  }
  
}

export default App;
