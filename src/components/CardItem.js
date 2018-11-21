import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const item = this.props.item;
    return (
      <div class="col-sm-3">
        <div class="thumbnail">
          <img
            src="http://tech.firstpost.com/wp-content/uploads/2014/09/Apple_iPhone6_Reuters.jpg"
            alt=""
            class="img-responsive"
          />
          <div class="caption">
            <h4 class="pull-right">$700.99</h4>
            <h4>
              <a href="#">Mobile Product</a>
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="ratings">
            <p>
              <span class="glyphicon glyphicon-star" />
              <span class="glyphicon glyphicon-star" />
              <span class="glyphicon glyphicon-star" />
              <span class="glyphicon glyphicon-star" />
              <span class="glyphicon glyphicon-star" />
              (15 reviews)
            </p>
          </div>
          <div class="space-ten" />
          <div class="btn-ground text-center">
            <button type="button" class="btn btn-primary">
              <i class="fa fa-shopping-cart" /> Add To Cart
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#product_view"
            >
              <i class="fa fa-search" /> Quick View
            </button>
          </div>
          <div class="space-ten" />
        </div>
      </div>
    );
  }
}

export default Card;
