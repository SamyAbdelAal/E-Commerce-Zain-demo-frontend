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
      <div className="[ col-lg-3 ]">
        <div className="[ info-card ]">
          <img
            style={{ width: "100%" }}
            src={item.img1}
            width="1000px"
            height="300px"
            style={{ objectFit: "cover" }}
          />
          <div className="[ info-card-details ] animate">
            <div className="[ info-card-header ]">
              <h1> {item.name} </h1>
              {/* <h3> Tagline </h3> */}
            </div>
            <div className="[ info-card-detail ]">
              <p style={{ wordBreak: "break-all" }}>{item.description}</p>
            </div>
            <div className="card-footer">

              <Link
                className="btn item-btn"
                to={`/items/${item.id}`}
                style={{ left: "60px" }}
              >
                Details
              </Link>
              {item.quantity ? (
                <button
                  onClick={() => this.handleAdd()}
                  className="btn item-btn"
                  style={{ left: "190px" }}
                >
                  BUY
                </button>
              ) : (
                <div
                  className="btn item-btn"
                  style={{ left: "180px", color: "red", fontSize: "10px" }}
                >
                  Out of stock
                </div>
              )}
              {/* <button
                onClick={() => this.handleAdd()}
                className="btn item-btn"
                style={{ left: "190px" }}
              >
                BUY
              </button> */}


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
