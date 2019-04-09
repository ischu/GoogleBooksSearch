import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom",
import Hero from './components/shared/Hero';
import Navbar from './components/shared/Navbar';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Hero />
          <Navbar />
          <Switch>
            <Route />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
