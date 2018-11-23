import React, { Component } from "react";

// Components
import Loading from "./Loading";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class ItemDetail extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.itemID);
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
    if (this.props.loading) {
      return <Loading />;
    } else {
      const item = this.props.item;
      return (
        <div className="container">
          <div className="card">
            <div className="container-fliud">
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
                  <ul className="preview-thumbnail nav nav-tabs">
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
                    <span className="review-no">41 reviews</span>
                  </div>
                  <p className="product-description">{item.description}</p>
                  <h4 className="price">
                    current price:
                    <span>
                      {item.price}
                      KD
                    </span>
                  </h4>
                  <p className="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>
                  <h5 className="sizes">
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
                  </h5>
                  <div className="action">
                    <button
                      className="add-to-cart btn btn-default"
                      onClick={() => this.handleAdd()}
                      type="button"
                    >
                      add to cart
                    </button>
                    <button className="like btn btn-default" type="button">
                      <i className="fas fa-star">X</i>
                    </button>
                  </div>
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
