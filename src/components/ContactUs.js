import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactUs extends Component {
    render() {
        return (
            <div>
            <br/>    
            <h2>Contact Us</h2>
            <br/>
            <p>
                Email us at info@mineralfast.com or click for access to one of the forms and we will get back to you as soon as we can.
            </p>
           <br/>
           <br/>
           <div>
            <button><Link to='/ContactUsForm' type="submit" className="btn btn-primary">Click to Contact Us</Link></button>
            <br/>
            <br/>
            <button><Link to='/TransformationForm' type="submit" className="btn btn-primary">Click to Submit a Transformation</Link></button>
            <br/>
            <br/>
            <button><Link to='/SignUp' type="submit" className="btn btn-primary">Click to Sign Up for Special Offers</Link></button>
          
            </div>





            </div>
        )
    }
}
export default ContactUs;