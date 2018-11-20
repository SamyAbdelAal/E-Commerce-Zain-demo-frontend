import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const item = this.props.item;
    return (
      <div class="col-sm-3">
        <Link to={`/items/${item.id}`}>
          <article class="col-item">
            <div class="photo">
              <div class="options-cart-round">
                <button class="btn btn-default" title="Add to cart">
                  <span class="fa fa-shopping-cart" />
                </button>
              </div>

              <img src={item.img} class="img-responsive" alt="Product Image" />
            </div>
            <div class="info">
              <div class="row">
                <div class="price-details col-md-6">
                  <p class="details">
                    Lorem ipsum dolor sit amet, consectetur..
                  </p>
                  <h1>{item.name}</h1>
                  <span class="price-new">{item.price} KD</span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </div>
    );
  }
}

export default Card;
