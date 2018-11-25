import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
    let product = {
      id: this.props.order.item.id,
      item: this.props.order.item,
      quantity: this.state.quantity
    };
    this.props.addProduct(product);
  }

  handleAdd() {}
  render() {
    const order = this.props.order;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <div className="panel panel-info">
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-2">
                    <img
                      className="img-responsive"
                      alt="item"
                      src={order.item.img}
                    />
                  </div>
                  <div className="col-xs-4">
                    <Link to={`/items/${order.id}`}>
                      <h4 className="item-name">
                        <strong>{order.item.name}</strong>
                      </h4>
                    </Link>
                    <div style={{ height: "100px", overflow: "hidden" }}>
                      <h4>
                        <small>{order.item.description}</small>
                      </h4>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="col-xs-6 text-right">
                      <h6>
                        <strong>
                          {order.item.price}
                          <span className="text-muted">x</span>
                        </strong>
                      </h6>
                    </div>
                    <div className="col-xs-6">
                      <input
                        type="number"
                        className="form-control input"
                        name="quantity"
                        defaultValue={order.quantity}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="col-xs-2">
                      <button
                        type="button"
                        className="btn btn-link btn-xs"
                        onClick={() => this.props.removeItemFromCart(order)}
                      >
                        <span className="glyphicon glyphicon-trash"> </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item =>
      dispatch(actionCreators.removeItemFromCart(item)),
    addProduct: product => dispatch(actionCreators.addProduct(product))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
