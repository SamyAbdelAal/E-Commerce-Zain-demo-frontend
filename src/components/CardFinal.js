import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";

class CardFinal extends Component {
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
      <div class="[ col-lg-3 ]">
        <div class="product-grid9">
          <div class="product-image9">
            <Link to={`/items/${item.id}`}>
              <img
                width="1000px"
                height="300px"
                style={{ objectFit: "cover", width: "100%" }}
                class="pic-1"
                src={item.img1}
              />
              <img
                width="1000px"
                height="300px"
                style={{ objectFit: "cover", width: "100%" }}
                class="pic-2"
                src={item.img2}
              />
            </Link>
            <Link
              to={`/items/${item.id}`}
              class="fa fa-search product-full-view"
            />
          </div>
          <div class="product-content">
            <ul class="rating">
              <li class="fa fa-star" />
              <li class="fa fa-star" />
              <li class="fa fa-star" />
              <li class="fa fa-star disable" />
              <li class="fa fa-star disable" />
            </ul>
            <h3 class="title">
              <a href="#">{item.name}</a>
            </h3>
            <div class="price"> {item.price} KD</div>
            <Link className="add-to-cart" to={`/items/${item.id}`}>
              Details
            </Link>
            <button
              onClick={() => this.handleAdd()}
              className="add-to-cart"
              style={{ left: "170px" }}
            >
              BUY
            </button>
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
)(CardFinal);
