import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// Components
import Welcome from "./components/Welcome";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import AddressForm from "./components/AddressForm";
import ItemList from "./components/ItemList";
import UserProfile from "./components/UserProfile";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import SideNav from "./components/Navigation/SideNav";

class App extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <SideNav />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={LoginForm} />
          <Route path="/address" component={AddressForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/items/:itemID" component={ItemDetail} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/checkout" component={Cart} />
          <Route path="/items" component={ItemList} />

          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
