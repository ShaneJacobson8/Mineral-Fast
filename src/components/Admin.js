import React, { Component, Fragment } from "react";
import firebase, { auth, provider } from "../firebase.js";
import "./Admin.css";

 import { Link } from 'react-router-dom';
 import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      id: [
        {
          firstName: "",
          lastName: "",
          emailAddress: "",
        }
      ],
      signUp: [
        {
        signUpFirstName: "",
        signUpLastName: "",
        signUpEmailAddress: "",
        }
      ],
      signUpFirstName: "",
      signUpLastName: "",
      signUpEmailAddress: "",
      transformationFirstName: "",
      transformationLastName: "",
      transformationEmailAddress: "",
      transformationMessage: "",
      transformationFile: "",
      user: null,
      items: [],
      firstName: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("SignUp");
    const item = {
      // title: this.state.emailAddress,
      // user: this.state.firstName || this.state.lastName,
      firstName: this.state.signUpFirstName,
      lastName: this.state.signUpLastName,
      emailAddress: this.state.signUpEmailAddress
      // user: this.state.user.firstName || this.state.user.emailAddress
    };
    itemsRef.push(item);
    this.setState({
      signUpFirstName: "",
      signUpLastName: "",
      signUpEmailAddress: ""
    });
  }
  handleSubmit2(e) {
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

    // Tracking SignUp items
    const itemsRef = firebase.database().ref("SignUp");
    itemsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          firstName: items[item].firstName,
          lastName: items[item].lastName,
          // signUpFirstName: items[item].signUpFirstName,
          // signUpLastName: items[item].signUpLastName,
          // signUpEmailAddress: items[item].signUpEmailAddress
        });
      }
      this.setState({
        items: newState
      });
    });
  }
//   const itemsRef = firebase.database().ref("SignUp");
//   itemsRef.on("value", snapshot => {
//     items = snapshot.val();
//     this.setState({ items: snapshot.val })
// console.log(items);
//   })

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/SignUp/${itemId}`);
    itemRef.remove();
  }
  updateItem(param) {
    history.push('/updateForm', {admin: {item: param }})
    history.go(0)
  }

  render() {
    console.log(this.state.items)
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
        {this.state.user ? (
          <div>
            <div className="user-profile">
              <img src={this.state.user.photoURL} />
            </div>
            {/* add new subscriber */}
            <Fragment>
              <div className="subscriber-container">
                <section className="add-subscriber">
                  <form onSubmit={this.handleSubmit}>
                    <h3>Add new subscriber</h3>
                    {/* <input type="text" name="displayName" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} /> */}
                    <input
                      type="text"
                      name="signUpFirstName"
                      className="form-control"
                      placeholder="New Subscriber First Name"
                      onChange={this.handleChange}
                      value={this.state.signUpFirstName}
                    />
                    <input
                      type="text"
                      name="signUpLastName"
                      className="form-control"
                      placeholder="New Subscriber Last Name"
                      onChange={this.handleChange}
                      value={this.state.signUpLastName}
                    />
                    <input
                      type="text"
                      name="signUpEmailAddress"
                      className="form-control"
                      placeholder="New Subscriber email"
                      onChange={this.handleChange}
                      value={this.state.signUpEmailAddress}
                    />
                    <button type="submit" className="btn btn-primary">
                      Add Subscriber
                    </button>
                  </form>
                </section>
              </div>
              {/* add new transformation */}
              <div className="transformation-container">
                <section className="add-transformation">
                  <form onSubmit={e => this.handleSubmit2(e)}>
                    {/* <form onSubmit={this.handleSubmit2}></form> */}
                    <h3>Add new transformation</h3>
                    {/* <input type="text" name="displayName" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} /> */}
                    <input
                      type="text"
                      name="transformationFirstName"
                      className="form-control"
                      placeholder="New Transformation First Name"
                      onChange={this.handleChange}
                      value={this.state.transformationFirstName}
                    />
                    <input
                      type="text"
                      name="transformationLastName"
                      className="form-control"
                      placeholder="New Transformation Last Name"
                      onChange={this.handleChange}
                      value={this.state.transformationLastName}
                    />
                    <input
                      type="text"
                      name="transformationEmailAddress"
                      className="form-control"
                      placeholder="New Transformation email"
                      onChange={this.handleChange}
                      value={this.state.transformationEmailAddress}
                    />
                    <textarea
                      name="transformationMessage"
                      className="form-control"
                      placeholder="Enter Tranformation Message"
                      id="exampleFormControlTextarea1"
                      rows="6"
                      onChange={this.handleChange}
                      value={this.state.transformationMessage}
                    />
                    <input
                      name="transformationFile"
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                      onChange={this.handleChange}
                      value={this.state.transformationFile}
                    />
                    <button type="submit2" className="btn btn-primary">
                      Add Transformation
                    </button>
                  </form>
                </section>
              </div>


       {/* return SignUp List TEST */}
              <div className="display-container">
                <section className="display-signUp">
                  <div className="wrapper">
                    <h2>Subscriber</h2>
                    <br />
                    <ul>
                      <div>
                        <button><Link to='/UpdateForm' type="submit" className="btn btn-primary">Update Subscriber</Link></button>
                        <br />
                        </div>
                  {/* handleAddItem= async _id => {
                    const newData = JSON.stringify({
                        firstName: this.state.signUpFirstName,
                        lastName: this.state.signUpLastName,
                        emailAddress: this.state.signUpEmailAddress
                  })
                } */}
                 




{/* firstName: this.state.signUpFirstName */}

                      {/* {this.state.items.map(item => {
                        return (
                          <li key={item.firstName}>
                            <h3>{item.title}</h3>
                            <p>
                              Subscriber First Name: {item.id}
                              {item.firstName === this.state.signUpFirstName ||
                                item.emailAddress ===
                                this.state.user.emailAddress ? (
                                  <button
                                    onClick={() => this.updateItem(item.id)}
                                    className="btn btn-primary">
                                    Update Subscriber</button>) : null}
                            </p>
                          </li>
                        );
                      })} */}

                    </ul>
                  </div>
                </section>
              </div>


              {/* {this.state.items.map(item => {
                        return (
                          <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>
                              Subscriber id: {item.id}
                              {item.user === this.state.user||
                                item.emailAddress ===
                                this.state.user.emailAddress ? (
                                  <button
                                    onClick={() => this.removeItem(item.id)}
                                    className="btn btn-primary">
                                    Remove Subscriber</button>) : null}
                            </p>
                          </li>
                        );
                      })} */}


              {/* <list>
                    <div>
                  let Signup = {
                    firstName: signUpFirstName,
                    lastName: signUpLastName,
                    emailAddress: signUpEmailAddress,
                       displaySignUp: function() {
                         return this.Signup;
                   }
              }
               </div>
               Signup.displaySignUp();
              </list> */}


              {/* return Test List with email*/}
              {/* <div className="display-container">
                <section className="display-transformation">
                  <div className="wrapper">
                    <h2>Transformation test box</h2>
                    <br />
                    <ul>
                    {this.state.emailAddress.map((emailAddress) => {
  const tEmailAddress= emailAddress.id;
                        return (
                          <li tEmailAddress>
                            <p>Transformation email: {tEmailAddress}
{emailAddress.id === this.state.user.emailAddress || emailAddress.emailAddress === this.state.user.emailAddress ? (
  <button onClick={() => this.removeItem(tEmailAddress)} className="btn btn-primary">Remove Email</button>) : null}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              </div> */}


              {/* return SignUp List */}
              <div className="display-container">
                <section className="display-signUp">
                  <div className="wrapper">
                    <h2>Subscriber</h2>
                    <br />
                    <ul>
                      {this.state.items.map((item, index) => {
                        return <li key={index}>
                            {/* <h3>{item.title}</h3> */}
                            {/* TODO figure out how to return name */}
                            <p>
                              Subscriber id: {item.id}
                              <br />
                              First Name: {item.firstName}
                              <br />
                              Last Name: {item.lastName}
                              <br />
                              {/* user: this.state.user.firstName || this.state.user.emailAddress */}
                              {/* {item.user === this.state.user.firstName ||
                              item.emailAddress ===
                                this.state.user.emailAddress ?  */}
                              {/* ( */}
                              <button onClick={() => this.removeItem(item.id)} className="btn btn-primary">
                                Remove Subscriber
                              </button>
                              <br />
                              <button
                              onClick={() => this.updateItem(item)} className="btn btn-secondary"
                                >Update Subscriber
                              </button>
                              {/* ) : null} */}
                              {/* <button><Link to='/SignUp' type="submit" className="btn btn-primary">Click to Sign Up for Special Offers</Link></button> */}
                            </p>
                          </li>;
                      })}
                    </ul>
                  </div>
                </section>
              </div>

              {/* return Transformations List */}
              <div className="display-container">
                <section className="display-transformation">
                  <div className="wrapper">
                    <h2>Transformation</h2>
                    <br />
                    <ul>
                      {this.state.items.map(item => {
                        return (
                          <li key={item.id}>
                            <h3>{item.title}</h3>
                            {/* TODO figure out how to return name */}
                            <p>
                              Transformation id: {item.id}
                              {/* user: this.state.user.firstName || this.state.user.emailAddress */}
                              {item.user === this.state.user.firstName ||
                              item.emailAddress ===
                                this.state.user.emailAddress ? (
                                <button
                                  onClick={() => this.removeItem(item.id)}
                                  className="btn btn-primary"
                                >
                                  Remove Transformation
                                </button>
                              ) : null}
                              {/* <button><Link to='/SignUp' type="submit" className="btn btn-primary">Click to Sign Up for Special Offers</Link></button> */}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              </div>
            </Fragment>
          </div>
        ) : (
          <div className="wrapper">
            <p>You must be logged in to see this page</p>
          </div>
        )}
      </div>
    );
  }
}
export default Admin;
