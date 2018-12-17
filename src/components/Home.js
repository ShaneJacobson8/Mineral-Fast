import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
            <p>Home</p>
            <ul>
            {/* <li><Link to= '/Form'>Form</Link></li> */}
            {/* <li><Link to= '/People'>People</Link></li> */}
            </ul>
            </div>
        )
    }
}
export default Home;