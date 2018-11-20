import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "./store/actions";
// Components
import Welcome from "./components/Welcome";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
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
          <Route path="/(login|signup)" component={RegistrationForm} />
          <Route path="/items/:itemID" component={ItemDetail} />

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
