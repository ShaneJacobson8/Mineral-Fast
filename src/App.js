import React, { Component } from "react";
import "./App.css";
// import Home from "./components/Home";
import Routing from "./Routing";
// import firebase from "./firebase.js";

class App extends Component {
  render() {
    
    
    return (
  
      <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Mineral Fast</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/GetStarted">Get Started</a>
          </li>
          {/* TODO: get each one to stay bold when current page.   <a class="nav-link" href="/GetStarted">Get Started <span class="sr-only">(current)</span></a> */}
          
          {/* If I want to change to dropdown menu list */}
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/Products" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Store
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Mineral</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/Store">See all Products</a>
            </div> */}
            <li className="nav-item">
            <a className="nav-link" href="/Store">Store</a>
            </li>
          <li className="nav-item">
            <a className="nav-link" href="/Transformation">Transformation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ContactUs">Contact Us</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      
      </div>
    </nav>

    <Routing />
    {/* <nav className="navbar sticky-top navbar-light bg-light"> */}
    {/* <nav className="navbar fixed-bottom navbar-light bg-light"> */}

    <nav className="navbar fixed-bottom navbar-light">
    <a className="navbar-brand">Property of Mineral Fast</a>
    <a className="nav-link-admin" href="./Admin">Admin</a>
  </nav>
    </div>

    );
  }
}


export default App;


//  {/* <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header> */}