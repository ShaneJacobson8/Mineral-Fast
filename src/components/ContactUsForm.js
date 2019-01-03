import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ContactUsForm extends Component {
    render() {
        return (
            <div>
            <br/>    
            <h2>Contact Us Form</h2>
            <br/>
            <p>
                Fill out the form below and we will get back to you as soon as we can.
            </p>
           <br/>
           <br/>
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
    <label for="exampleFormControlTextarea1">What can we do for you?</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <br/>
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
export default ContactUsForm;