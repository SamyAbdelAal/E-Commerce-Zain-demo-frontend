import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

// Components
import Loading from "./Loading";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.changeHandler = this.changeHandler.bind(this);
  }
  componentDidMount() {
    this.props.getProduct(this.props.match.params.itemID);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAdd() {
    let product = {
      id: this.props.item.id,
      item: this.props.item,
      quantity: this.state.quantity
    };
    this.props.addProduct(product);
  }
  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const item = this.props.item;
      console.log(this.props.item);
      return (
        <div className="container" style={{ maxWidth: "100%" }}>
          <div
            className="card"
            style={{
              background: " rgba(244, 243, 243, 0.71)"
            }}
          >
            <div className="container">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img alt="item" src={item.img} />
                    </div>
                    <div className="tab-pane" id="pic-2">
                      <img alt="item" src={item.img} />
                    </div>
                    <div className="tab-pane" id="pic-3">
                      <img alt="item" src={item.img} />
                    </div>
                    <div className="tab-pane" id="pic-4">
                      <img alt="item" src={item.img} />
                    </div>
                    <div className="tab-pane" id="pic-5">
                      <img alt="item" src={item.img} />
                    </div>
                  </div>
                  <ul
                    className="preview-thumbnail nav nav-tabs"
                    style={{ background: "#fff" }}
                  >
                    <li className="active">
                      <a href="#" data-target="#pic-1" data-toggle="tab">
                        <img alt="item" src={item.img} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-target="#pic-2" data-toggle="tab">
                        <img alt="item" src={item.img} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-target="#pic-3" data-toggle="tab">
                        <img alt="item" src={item.img} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-target="#pic-4" data-toggle="tab">
                        <img alt="item" src={item.img} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-target="#pic-5" data-toggle="tab">
                        <img alt="item" src={item.img} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{item.name}</h3>
                  <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    {/* <span className="review-no">41 reviews</span> */}
                  </div>
                  <p className="product-description">{item.description}</p>
                  <h4 className="price">
                    current price:
                    <span>
                      {item.price}
                      KD
                    </span>
                  </h4>
                  <h4 className="price">
                    current stock:
                    {item.quantity > 0 ? (
                      <span>{item.quantity}</span>
                    ) : (
                      <span style={{ color: "red" }}>Out Of Stock</span>
                    )}
                  </h4>
                  <p className="vote" />
                  {/* <h5 className="sizes">
                    sizes:
                    <span className="size" data-toggle="tooltip" title="small">
                      s
                    </span>
                    <span className="size" data-toggle="tooltip" title="medium">
                      m
                    </span>
                    <span className="size" data-toggle="tooltip" title="large">
                      l
                    </span>
                    <span
                      className="size"
                      data-toggle="tooltip"
                      title="xtra large"
                    >
                      xl
                    </span>
                  </h5>
                  <h5 className="colors">
                    colors:
                    <span
                      className="color orange not-available"
                      data-toggle="tooltip"
                      title="Not In store"
                    />
                    <span className="color green" />
                    <span className="color blue" />
                  </h5> */}
                  {item.quantity > 0 && (
                    <div className="action">
                      <input
                        type="number"
                        name="quantity"
                        className="form-control input-sm"
                        defaultValue={1}
                        min="1"
                        max={item.quantity}
                        onChange={this.changeHandler}
                      />
                      <button
                        className="add-to-cart btn btn-default"
                        onClick={() => this.handleAdd()}
                        type="button"
                      >
                        add to cart
                      </button>
                    </div>
                  )}
                </div>
                <br />
              </div>
              <div class="col-xs-9 mt-5">
                <ul class="menu-items">
                  <li class="active">Details producto</li>
                </ul>
                <div style={{ width: "100%", borderTop: "1px solid silver" }}>
                  <p style={{ padding: "15px" }}>
                    <small>
                      Stay connected either on the phone or the Web with the
                      Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G
                      connection, this phone stores precious photos and video
                      and lets you upload them to a cloud or social network at
                      blinding-fast speed. With a 17-hour operating life from
                      one charge, this phone allows you keep in touch even on
                      the go. With its built-in photo editor, the Galaxy S4
                      allows you to edit photos with the touch of a finger,
                      eliminating extraneous background items. Usable with most
                      carriers, this smartphone is the perfect companion for
                      work or entertainment.
                    </small>
                  </p>
                  <small>
                    <ul>
                      <li>
                        Super AMOLED capacitive touchscreen display with 16M
                        colors
                      </li>
                      <li>
                        Available on GSM, AT T, T-Mobile and other carriers
                      </li>
                      <li>
                        Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 /
                        2100 LTE; 700 MHz Class 17 / 1700 / 2100 networks
                      </li>
                      <li>MicroUSB and USB connectivity</li>
                      <li>
                        Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and
                        Bluetooth
                      </li>
                      <li>
                        Wi-Fi hotspot to keep other devices online when a
                        connection is not available
                      </li>
                      <li>SMS, MMS, email, Push Mail, IM and RSS messaging</li>
                      <li>
                        Front-facing camera features autofocus, an LED flash,
                        dual video call capability and a sharp 4128 x 3096 pixel
                        picture
                      </li>
                      <li>Features 16 GB memory and 2 GB RAM</li>
                      <li>
                        Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android
                        OS
                      </li>
                      <li>
                        17 hours of talk time, 350 hours standby time on one
                        charge
                      </li>
                      <li>Available in white or black</li>
                      <li>Model I337</li>
                      <li>
                        Package includes phone, charger, battery and user manual
                      </li>
                      <li>
                        Phone is 5.38 inches high x 2.75 inches wide x 0.13
                        inches deep and weighs a mere 4.59 oz{" "}
                      </li>
                    </ul>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    item: state.product.product,
    loading: state.product.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: itemID => dispatch(actionCreators.fetchProduct(itemID)),
    addProduct: product => dispatch(actionCreators.addProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
