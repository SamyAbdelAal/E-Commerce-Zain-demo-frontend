import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";

class Homepage extends Component {
  render() {
    const itemCards = this.props.products.map(item => <Card item={item} />);
    return (
      <div>
        <div class="upcoming py-5">
          <div class="container">
            <div class="row pb-4 text-center">
              <div class="col-md-12">
                <h2>Upcoming & Latest cars</h2>
                <p>
                  {" "}
                  Pre-booked lessons, on-call lessons are Not refundable unless
                  cancelled more than 24 hours.
                </p>
              </div>
              {itemCards}
            </div>

            <div class="row text-center pt-4">
              <div class="col-md-12">
                <button type="button" class="btn btn-danger">
                  View All Upcoming Cars
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  products: state.products.products
});

export default connect(mapStateToProps)(Homepage);
