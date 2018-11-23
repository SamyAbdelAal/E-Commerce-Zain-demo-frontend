import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="col-sm-3">
        <Link to={`/items/${item.id}`}>
          <article className="col-item">
            <div className="photo">
              <div className="options-cart-round">
                <button className="btn btn-default" title="Add to cart">
                  <span className="fa fa-shopping-cart" />
                </button>
              </div>

              <img src={item.img} className="img-responsive" alt="Product" />
            </div>
            <div className="info">
              <div className="row">
                <div className="price-details col-md-6">
                  <p className="details">
                    Lorem ipsum dolor sit amet, consectetur..
                  </p>
                  <h1>{item.name}</h1>
                  <span className="price-new">{item.price} KD</span>
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
