import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";

class Card extends Component {
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
      <div class="card" style={{ width: "400px" }}>
        <img class="card-img-top" src={item.img} alt="Card" />
        <div class="card-body">
          <h4 class="card-title">{item.name}</h4>
          <p class="card-text">{item.price} KD</p>
          <Link to={`/items/${item.id}`} class="btn btn-primary">
            See Details
          </Link>
          <button className="btn btn-success" onClick={() => this.handleAdd()}>
            Add Item to cart
          </button>
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
)(Card);
