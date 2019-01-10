import React, { Component } from "react";
import firebase, { auth, provider } from "../firebase.js";
import "./Admin.css";

// import { Link } from 'react-router-dom';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      signUpFirstName: "",
      signUpLastName: "",
      signUpEmailAddress: "",
      user: null
      // AdminFirstName: '',
      // AdminLastName: '',
      // AdminEmailAddress: '',
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // TODO adjust displayed properties to match desired values***
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("SignUp");
    const item = {
      title: this.state.emailAddress,
      user: this.state.user.displayName || this.state.user.email
    }
  }
  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
        <br />
        <header>
          <h3>Admin Sign In</h3>
          <br />
          {this.state.user ? (
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={this.logout}
            >
              Log Out
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.login}
            >
              Log In
            </button>
          )}
        </header>
        {this.state.user ?
      <div>
        <div className='user-profile'>
          <img src={this.state.user.photoURL} />
        </div>
        <div className='container'>
        <section className='add-item'>
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="displayName" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} />
        <input type="text" name="emailAddress" placeholder="What's your email address?" onChange={this.handleChange} value={this.state.emailAddress} /> 
        <button type="submit" className="btn btn-primary">Add Subscriber</button>
        </form>
        </section>
        </div>

          {/* <section className='display-item'>
          <div className="wrapper">
          <ul>
            {this.state.items.map((item) => {
              return(
                <li key={item.id}>
                <h3>{item.title}</h3>
                <p>email address: {item.user}
                {item.user === this.state.user.displayName || item.user === this.state.user.email ?
                   <button onClick={() => this.removeItem(item.id)}>Remove Item</button> : null}
                </p>
                </li>
              )
            })}
          </ul>
          </div>
          </section> */}

        </div>
        :
        <div className='wrapper'>
        <p>You must be logged in to see this page</p>
        </div>  
      }
      </div>
      // <div>
      // <h2>Admin Log In</h2>
      // Admin Login Form
      //            <form>
      //   <div class="form-group">
      //     <label for="exampleInputEmail1">Email address</label>
      //     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      //     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      //   </div>
      //   <div class="form-group">
      //     <label for="exampleInputPassword1">Password</label>
      //     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      //   </div>
      //    <div class="form-group form-check">
      //     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      //     <label class="form-check-label" for="exampleCheck1">Check me out</label>
      //   </div> */}
      //   <button type="submit" class="btn btn-primary">Submit</button>
      // </form>

      //             </div> */
    );
  }
}
export default Admin;
