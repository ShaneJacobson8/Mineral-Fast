import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Transformation from "./components/Transformation";
import Store from "./components/Store";
import GetStarted from "./components/GetStarted";
import ContactUs from "./components/ContactUs";
import Admin from "./components/Admin";
import SignUp from "./components/SignUp";
import ContactUsForm from "./components/ContactUsForm";
import TransformationForm from "./components/TransformationForm";


function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/GetStarted" component={GetStarted} />
        <Route path="/Transformation" component={Transformation} />
        <Route path="/Store" component={Store} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Admin" component={Admin} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/ContactUsForm" component={ContactUsForm} />
        <Route path="/TransformationForm" component={TransformationForm} />
      </Switch>
    </Router>
  );
}
export default Routing;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Home from "./components/Home";
// import Form from "./components/Form";
// import People from "./components/People";

// function Routing() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/Form" component={Form} />
//         <Route path="/People" component={People} />
//       </Switch>
//     </Router>
//   );
// }

// export default Routing;

// above is from brad walk through. Below is old code.

// class Home extends Component {
//     render() {
//         return (
//             <div>
//             <p>Home</p>
//             <ul>
//             {/* <li><Link to= '/Form'>Form</Link></li>
//             <li><Link to= '/People'>People</Link></li> */}
//             </ul>
//             </div>
//         )
//     }
// }
// export default Home;