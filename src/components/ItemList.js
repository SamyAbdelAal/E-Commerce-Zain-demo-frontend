import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

// Components

import Card from "./Card";
import CardRedesign from "./CardRedesign";
import CardFinal from "./CardFinal";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryChoice: false
    };
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory(e) {
    this.props.categoryChoice(e.target.value);
  }
  render() {
    const itemCards = this.props.filteredProducts.map(item => (
      <CardFinal key={item.id} item={item} />
    ));

    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div className="banner-section ">
          <div className="d-flex ">
            <h1>Browse our selection of products</h1>
            {/*<img
              alt="item"
              className="card-img-top img-fluid"
              src={
                "https://lh3.googleusercontent.com/KsFlzYa4rjS1a2ioPxn-0TD63xfJwCsTWxgrdAEivgshSSL__a7BIZlth-EKasYPnu4=w2247-h1264-rw"
              }
            />*/}
          </div>
          <div className="container">
            <h3>Products</h3>
            <SearchBar />
            <select
              placeholder="category "
              className="form-control"
              name="governorate"
              onChange={this.handleCategory}
            >
              <option value="" defaultValue="selected">
                (Select a category)
              </option>
              <option value="FOOD">FOOD</option>
              <option value="DRINKS">DRINKS</option>
            </select>
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

const mapDispatchToProps = dispatch => {
  return {
    onSearch: query => dispatch(actionCreators.filterProducts(query)),
    categoryChoice: query => dispatch(actionCreators.filterCategory(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
