import React, { Component } from "react";

// Components
import Loading from "./Loading";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class ItemDetail extends Component {
  componentDidMount() {
    console.log(this.props.match);
    this.props.getProduct(this.props.match.params.itemID);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const item = this.props.item;
      return (
        <div class="container">
          <div class="card">
            <div class="container-fliud">
              <div class="wrapper row">
                <div class="preview col-md-6">
                  <div class="preview-pic tab-content">
                    <div class="tab-pane active" id="pic-1">
                      <img src={item.img} />
                    </div>
                    <div class="tab-pane" id="pic-2">
                      <img src={item.img} />
                    </div>
                    <div class="tab-pane" id="pic-3">
                      <img src={item.img} />
                    </div>
                    <div class="tab-pane" id="pic-4">
                      <img src={item.img} />
                    </div>
                    <div class="tab-pane" id="pic-5">
                      <img src={item.img} />
                    </div>
                  </div>
                  <ul class="preview-thumbnail nav nav-tabs">
                    <li class="active">
                      <a data-target="#pic-1" data-toggle="tab">
                        <img src={item.img} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-2" data-toggle="tab">
                        <img src={item.img} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-3" data-toggle="tab">
                        <img src={item.img} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-4" data-toggle="tab">
                        <img src={item.img} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-5" data-toggle="tab">
                        <img src={item.img} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="details col-md-6">
                  <h3 class="product-title">{item.name}</h3>
                  <div class="rating">
                    <div class="stars">
                      <span class="fa fa-star checked" />
                      <span class="fa fa-star checked" />
                      <span class="fa fa-star checked" />
                      <span class="fa fa-star" />
                      <span class="fa fa-star" />
                    </div>
                    <span class="review-no">41 reviews</span>
                  </div>
                  <p class="product-description">{item.description}</p>
                  <h4 class="price">
                    current price:{" "}
                    <span>
                      {item.price}
                      KD
                    </span>
                  </h4>
                  <p class="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>
                  <h5 class="sizes">
                    sizes:
                    <span class="size" data-toggle="tooltip" title="small">
                      s
                    </span>
                    <span class="size" data-toggle="tooltip" title="medium">
                      m
                    </span>
                    <span class="size" data-toggle="tooltip" title="large">
                      l
                    </span>
                    <span class="size" data-toggle="tooltip" title="xtra large">
                      xl
                    </span>
                  </h5>
                  <h5 class="colors">
                    colors:
                    <span
                      class="color orange not-available"
                      data-toggle="tooltip"
                      title="Not In store"
                    />
                    <span class="color green" />
                    <span class="color blue" />
                  </h5>
                  <div class="action">
                    <button class="add-to-cart btn btn-default" type="button">
                      add to cart
                    </button>
                    <button class="like btn btn-default" type="button">
                      <icon class="fas fa-star">X</icon>
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
    getProduct: itemID => dispatch(actionCreators.fetchProduct(itemID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
