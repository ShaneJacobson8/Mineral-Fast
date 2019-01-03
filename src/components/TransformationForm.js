import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TransformationForm extends Component {
    render() {
        return (
            <div>
            <br/>    
            <h2>Transformation Form</h2>
            <br/>
            <p>
            Use this form to submit your transformation.
            </p>
           <br/>
<br/>
{/* Form for submitting transformations */}
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
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Describe your transformation</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Add pics for transformation submissions</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>

</form>
<br/>
<br/>
<br/>
            </div>
        )
    }
}
export default TransformationForm;