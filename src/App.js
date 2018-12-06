import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './route.jsx';
import NavBar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  render() {
    return (

      <div className="App">
        
        <NavBar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
