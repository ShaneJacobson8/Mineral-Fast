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
import UpdateForm from "./components/UpdateForm";

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
        <Route path="/UpdateForm" component={UpdateForm} />
      </Switch>
    </Router>
  );
}
export default Routing;