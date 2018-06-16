import React, { Component } from 'react';
import Board from './../../containers/board/board';
import './app.css';
export default class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-row"> 
          <header className="header">                
            <p className="redText">Should I eat at <span>McDonalds?</span></p>
          </header>
          <Board/>
          <footer>
            <p className="redText">Press "Enter" to add, edit or delete</p>            
            <img 
              className="mcdonalds-icon" 
              src="https://png.icons8.com/color/1600/mcdonalds-french-fries.png"
              alt="McDonalds"
            />
          </footer>
        </div>
      </div>
    );
  }
}
