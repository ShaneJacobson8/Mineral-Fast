import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import firebase from '../firebase.js';

class SignUp extends Component {
  constructor() {
    super();
    this.state ={
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmailAddress: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault()
    const itemsRef = firebase.database().ref('SignUp')
    const item = {
        firstName: this.state.signUpFirstName,
        lastName: this.state.signUpLastName,
        emailAddress: this.state.signUpEmailAddress
    }
    itemsRef.push(item)
    this.setState({
        signUpFirstName: '',
        signUpLastName: '',
        signUpEmailAddress: ''
    })
}
  render() {
    return (
      <div>
        <br />
        <h2>Sign Up</h2>
        <br />
        <p>
          Sign up to receive special offers, and the latest in news, products,
          and transformations.
        </p>
        <br />
        <br />
        <h4>Use this form below to join our email list</h4>
        <br />
        {/* contact form */}
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="signUpFirstName"
                className="form-control"
                placeholder="First name"
                onChange={this.handleChange}
                value={this.state.signUpFirstName}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="signUpLastName"
                className="form-control"
                placeholder="Last name"
                onChange={this.handleChange}
                value={this.state.signUpLastName}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              name="signUpEmailAddress"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={this.handleChange}
              value={this.state.signUpEmailAddress}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <br />
          <br />
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default SignUp;
