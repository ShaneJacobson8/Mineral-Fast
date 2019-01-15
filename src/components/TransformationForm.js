import React, { Component } from "react";
import firebase from "../firebase.js";
//  import { Link } from "react-router-dom";

class TransformationForm extends Component {
  constructor() {
    super();
    this.state = {
      transformationFirstName: "",
      transformationLastName: "",
      transformationEmailAddress: "",
      transformationMessage: "",
      transformationFile: ""
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
    const itemsRef = firebase.database().ref("Transformation");
    const item = {
      firstName: this.state.transformationFirstName,
      lastName: this.state.transformationLastName,
      emailAddress: this.state.transformationEmailAddress,
      message: this.state.transformationMessage,
      file: this.state.transformationFile
    };
    itemsRef.push(item);
    this.setState({
      transformationFirstName: "",
      transformationLastName: "",
      transformationEmailAddress: "",
      transformationMessage: "",
      transformationFile: ""
    });
  }
  render() {
    return (
      <div>
        <br />
        <h2>Transformation Form</h2>
        <br />
        <p>Use this form to submit your transformation.</p>
        <br />
        <br />
        {/* Form for submitting transformations */}
        <form onSubmit={this.handleSubmit}>
          <h7>Name</h7>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="transformationFirstName"
                className="form-control"
                placeholder="First name"
                onChange={this.handleChange}
                value={this.state.transformationFirstName}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="transformationLastName"
                className="form-control"
                placeholder="Last name"
                onChange={this.handleChange}
                value={this.state.transformationLastName}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              name="transformationEmailAddress"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={this.handleChange}
              value={this.state.transformationEmailAddress}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">
              Describe your transformation
            </label>
            <textarea
              name="transformationMessage"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              onChange={this.handleChange}
              value={this.state.transformationMessage}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlFile1">
              Add pics for transformation submissions
            </label>
            <input
              name="transformationFile"
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={this.handleChange}
              value={this.state.transformationFile}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default TransformationForm;
