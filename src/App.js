import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Contact from './components/Contact.js';
class App extends Component {
  render() {
    return (
      <div>
        <Header title={"Contact Manager"}/>
        <Contact name={"Harland Lohora"} email={"harland@lohora.com"} phone={"5540856635"}/>
        <Contact name="Jocelyn Lopez" email="hello@joultorres.com" phone="55-6899-6365"/>
        <Contact/>
      </div>
    );
  }
}

export default App;
