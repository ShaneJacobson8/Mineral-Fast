import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignUp extends Component {
    render() {
        return (
            <div>
            <br/>    
            <h2>Sign Up</h2>
            <br/>
            <p>
                Sign up to receive special offers, and the latest in news, products, and transformations.
            </p>
           <br/>
           <br/>
<h4>Use this form below to join or email list</h4>
<br/>
             {/* contact form */}
            <form>
            <h7>Name</h7>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <br/>
  <br/>
  <br/>
</form>
<br/>
<br/>
<br/>
            </div>
        )
    }
}
export default SignUp;