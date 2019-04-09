import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Hero from './components/shared/Hero';
import NavBar from './components/shared/Navbar';
import Container from './components/shared/Container';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Hero>
      </Hero>
      <NavBar>
      </NavBar>
        <Container>
        Hello
        </Container>
      </div>
    );
  }
}

export default App;
