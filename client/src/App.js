import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import LoginReduxForm from './components/Authorization/Login.jsx';
import RegistrationContainer from './components/Authorization/RegistrationContainer.jsx';
import Calendar from './components/Calendar.jsx';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/login" component={LoginReduxForm} />
        <Route exact path="/signup" component={RegistrationContainer} />
      </BrowserRouter>
    );
  }
}

export default App;
