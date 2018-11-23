import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    const itemCards = this.props.products.map(item => (
      <Card key={item.id} item={item} />
    ));
    return (
      <div>
        <div className="upcoming py-5">
          <div className="container">
            <div className="row pb-4 text-center">
              <div className="col-md-12">
                <h2>Upcoming & Latest cars</h2>
                <p>Latest Items added</p>
              </div>
              {itemCards}
            </div>

            <div className="row text-center pt-4">
              <div className="col-md-12">
                <Link to="/items/" type="button" className="btn btn-danger">
                  View All Items
                </Link>
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
