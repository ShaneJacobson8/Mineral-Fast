import React, { Component } from "react";
import "./App.css";
// import Home from "./components/Home";
import Routing from "./Routing";

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Mineral Fast</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/GetStarted">Get Started <span class="sr-only">(current)</span></a>
          </li>
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
            <li class="nav-item">
            <a class="nav-link" href="/Store">Store</a>
            </li>
          <li class="nav-item">
            <a class="nav-link" href="/Transformation">Transformation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ContactUs">Contact Us</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <Routing />
    {/* <nav class="navbar sticky-top navbar-light bg-light"> */}
    <nav class="navbar fixed-bottom navbar-light">
    <a class="navbar-brand">Property of Mineral Fast</a>
    <a class="nav-link" href="/admin">Admin Login</a>
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