import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import People from "./pages/People";
import ProtectedRoute from "./pages/ProtectedRoute";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <ProtectedRoute path="/people" component={People} />
        <Route path="/" exact component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
