import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import NumericInput from "react-numeric-input";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.changeQuan = this.changeQuan.bind(this);
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

  changeQuan(value) {
    console.log(value);
    this.props.changeQuantity(this.props.order.id, value);
    this.props.getTotalPrice();
  }
  handleAdd() {}
  render() {
    console.log(this.props.order);
    const order = this.props.order;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="panel panel-info">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      className="img-responsive"
                      alt="item"
                      src={order.item.img1}
                    />
                  </div>
                  <div className="col">
                    <Link to={`/items/${order.id}`}>
                      <h4 className="item-name">
                        <strong>{order.item.name}</strong>
                      </h4>
                    </Link>
                    <div style={{ height: "100px", overflow: "hidden" }}>
                      <h4>
                        <small style={{ wordBreak: "break-all" }}>
                          {order.item.description}
                        </small>
                      </h4>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col text-right">
                      <h6>
                        <strong>
                          {order.item.price}
                          <span className="text-muted">KD</span>
                        </strong>
                      </h6>
                    </div>
                    <div className="col-xs-6">
                      {/*input type="number" className="form-control input"
                      name="quantity" min=
                      {1}
                      max=
                      {this.props.order.item["quantity"]}
                      defaultValue=
                      {this.state.quantity}
                      onChange=
                      {value => this.changeQuan(value)}
                      />*/}
                      <NumericInput
                        className="form-control"
                        min={1}
                        max={this.props.order.item["quantity"]}
                        value={order.quantity}
                        onChange={value => this.changeQuan(value)}
                      />
                    </div>
                    <div className="col-xs-6 text-center">
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
    changeQuantity: (itemId, quantity) =>
      dispatch(actionCreators.changeQuantity(itemId, quantity)),
    removeItemFromCart: item =>
      dispatch(actionCreators.removeItemFromCart(item)),
    addProduct: product => dispatch(actionCreators.addProduct(product))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
