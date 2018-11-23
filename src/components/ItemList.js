import React, { Component } from "react";
import { connect } from "react-redux";

// Components

import Card from "./Card";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

class ItemList extends Component {
  render() {
    const itemCards = this.props.filteredProducts.map(item => (
      <Card key={item.id} item={item} />
    ));

    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div className="banner-section">
          <div className="d-flex">
            <img
              alt="item"
              className="card-img-top img-fluid"
              src={
                "https://www.acurax.com/wp-content/themes/acuraxsite/images/inner_page_bnr.jpg?x21789"
              }
              style={{ cursor: "default" }}
            />
          </div>
          <div className="items">
            <h3>Products</h3>
            <SearchBar />
            <div className="row">{itemCards}</div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    filteredProducts: state.products.filteredProducts,
    loading: state.products.loading
  };
};

export default connect(mapStateToProps)(ItemList);
