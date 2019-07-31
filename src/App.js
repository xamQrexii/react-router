import React, { Component } from 'react';
import Router from './routes/Router';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
 
  
  render() {
    return (
      <div>
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
