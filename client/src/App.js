import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import LoginContainer from './components/Authorization/LoginContainer.jsx';
import Calendar from './components/Calendar.jsx';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/login" component={LoginContainer} />
      </BrowserRouter>
    );
  }
}

export default App;
