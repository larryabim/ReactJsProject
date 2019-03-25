import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import MainScreen from "./MainScreen"
// import CashRegister from ".compnents/CashRegister"


class App extends Component {
  render() {
    return (
      <div className="App">
      <Login/>
      {/* <MainScreen/> */}
      {/* <CashRegister/> */}
      
      </div>
    );
  }
}

export default App;
