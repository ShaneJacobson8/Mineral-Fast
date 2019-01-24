import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import firebase from '../firebase.js';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.location.state.admin.firstName,
            lastName: this.props.location.state.admin.lastName,
            signUp: [ {
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmailAddress: ''
            }
            ]
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
    getSignUps = async () => {
        return fetch("http://localhost:5500/Admin")
          .then(results => {
            return results.json();
          })
          .then(data => {
            this.setState({ signUps: data });
          });
    }
    // updateItem(itemId) {
    //     const itemRef = firebase.database().ref(`/SignUp/${itemId}`)
    //     itemRef.update();
    // }
    updateItem = async firstName => {
        const newData = JSON.stringify ({
            firstName: this.state.firstName,
            lastName: this.state.signUpLastName,
            emailAddress: this.state.signUpEmailAddress
        })
        
        
        // await fetch ("apiURL" + `/` + firstName, {
        //     method: "PUT",
        //     body: newData,
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
        // await this.getSignUp();
    }
componentDidMount() {
    const itemsRef = firebase.database().ref("SignUp");
    itemsRef.on("value", (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for (let item in items) {
            newState.push({
                firstName: items[item].firstName,
                lastName: items[item].lastName,
                emailAddress: items[item].emailAddress,
            });
        }
        this.setState({
            items: newState
        });
    });
}
 


    render() {
        const signUp = this.state.signUp;
        return (
        <div>
            {signUp.map((signUp, index) => (
            <div key={index}>
                id: {signUp._id}
                <br />


                <form onSubmit={e => this.handleUpdateItem(signUp._id)}>
                <div className="form-group">
                  <input type="text" className="form-control" id="exampleInputFirstName" value={this.state.firstName} onChange={e => this.setState(
                        { firstName: e.target.value })
                      } />
                </div>
                </form>
              </div>))}
         
        <button type="submit" className="btn btn-primary" onClick={() => this.updateItem(signUp.firstName)}>
            Update
                      </button>
            {/* <button className="btn btn-primary" onClick={() => this.handleUpdateItem(signUp._id)}> */}
            {/* </button>  */}
        </div>
            
    
     
            )}
}
export default UpdateForm;