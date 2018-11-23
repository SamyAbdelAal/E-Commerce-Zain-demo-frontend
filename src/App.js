import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "./store/actions";
// Components
import Welcome from "./components/Welcome";
import Homepage from "./components/homepage";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import UserProfile from "./components/UserProfile";
import ItemDetail2 from "./components/ItemDetail2";
import CheckoutPage from "./components/CheckoutPage";
import SideNav from "./components/Navigation/SideNav";

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    // this.props.checkForExpiredToken();
  }
  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <SideNav />

        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/items/:itemID" component={ItemDetail2} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/checkout" component={CheckoutPage} />

          <Route path="/items" component={ItemList} />

          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(actionCreators.fetchProducts())
    // checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
