import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemCard extends Component {
  render() {
    const author = this.props.author;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/items/${this.props.item}`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={"https://via.placeholder.com/150"}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{`author.first_name  author.last_name`}</span>
            </h5>
            <small className="card-text"> books</small>
          </div>
        </Link>
      </div>
    );
  }
}

export default ItemCard;
