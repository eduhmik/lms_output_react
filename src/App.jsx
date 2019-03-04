import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import UpdateContact from "./components/contacts/UpdateContact";
import About from "./components/pages/About";
import NotFound from './components/pages/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import "./App.scss";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
        <Switch>
          <Route exact path="/" component = {Contacts} />
          <Route exact path="/contact/add" component = {AddContact} />
          <Route exact path="/contact/update/:id" component = {UpdateContact} />
          <Route exact path="/about" component = {About} />
          <Route component={NotFound} />

        </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
