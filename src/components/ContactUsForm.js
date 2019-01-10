import React, { Component } from "react";
import firebase from '../firebase.js';
// import { Link } from "react-router-dom";

class ContactUsForm extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      contactFirstName: '',
      contactLastName: '',
      contactEmailAddress: '',
      contactMessage: ''
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
      e.preventDefault();
      const itemsRef = firebase.database().ref('ContactUs');
      const item = {
          firstName: this.state.contactFirstName,
          lastName: this.state.contactLastName,
          emailAddress: this.state.contactEmailAddress,
          message: this.state.contactMessage
      }
      itemsRef.push(item);
      this.setState({
          contactFirstName: '',
          contactLastName: '',
          contactEmailAddress: '',
          contactMessage: ''
      })
  }
  render() {
    return (
      <div>
        <br />
        <h2>Contact Us Form</h2>
        <br />
        <p>
          Fill out the form below and we will get back to you as soon as we can.
        </p>
        <br />
        <br />
        <br />
        {/* contact form */}
        <form onSubmit={this.handleSubmit}>
          <h7>Name</h7>
          <section className="form-row">
            <div className="col">
              <input
                type="text"
                name="contactFirstName"
                className="form-control"
                placeholder="First name"
                onChange={this.handleChange}
                value={this.state.contactFirstName}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="contactLastName"
                className="form-control"
                placeholder="Last name"
                onChange={this.handleChange}
                value={this.state.contactLastName}
              />
            </div>
          </section>
          <br />
          <section className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              name="contactEmailAddress"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={this.handleChange}
              value={this.state.contactEmailAddress}
            />
      
          {/* if choose to have a subject selector */}
          {/* <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              What can we do for you?
            </label>
            <textarea
              className="form-control"
              name="contactMessage"
              id="exampleFormControlTextarea1"
              rows="4"
              onChange={this.handleChange}
              value={this.state.contactMessage}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <br />
          <br />
          <br />
          <br />
          </section>
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default ContactUsForm;
