import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";

class CardRedesign extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    let product = {
      id: this.props.item.id,
      item: this.props.item,
      quantity: 1
    };
    this.props.addProduct(product);
  }
  render() {
    const item = this.props.item;
    return (
      <div class="[ col-lg ]">
        <div class="[ info-card ]">
          <img
            style={{ width: "100%" }}
            src={item.img}
            width="1000px"
            height="300px"
            style={{ objectFit: "cover" }}
          />
          <div class="[ info-card-details ] animate">
            <div class="[ info-card-header ]">
              <h1> {item.name} </h1>
              <h3> Tagline </h3>
            </div>
            <div class="[ info-card-detail ]">
              <p>{item.description}</p>
            </div>
            <div class="card-footer">
              <img
                src="https://static.thenounproject.com/png/766721-200.png"
                alt="rating"
                width="100px"
                height="100px"
              />

              <Link
                class="btn item-btn"
                to={`/items/${item.id}`}
                style={{ left: "60px" }}
              >
                Details
              </Link>

              <button
                onClick={() => this.handleAdd()}
                class="btn item-btn"
                style={{ left: "190px" }}
              >
                BUY
              </button>

              <span>{item.price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(actionCreators.addProduct(product))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CardRedesign);
