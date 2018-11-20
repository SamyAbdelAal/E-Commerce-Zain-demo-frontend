import React, { Component } from "react";
import { connect } from "react-redux";

// Components
// import AddAuthorCard from "./AddAuthorCard";
import ItemCard from "./ItemCard";
import Card from "./Card";
// import SearchBar from "./SearchBar";
// import Loading from "./Loading";

class ItemList extends Component {
  render() {
    // const { loading, filteredAuthors } = this.props;

    const itemCards = this.props.products.map(item => <Card item={item} />);

    // if (loading) {
    //   return <Loading />;
    // } else {
    return (
      <div className="banner-section">
        <div className="d-flex">
          <img
            className="card-img-top img-fluid"
            src={
              "https://www.acurax.com/wp-content/themes/acuraxsite/images/inner_page_bnr.jpg?x21789"
            }
            style={{ cursor: "default" }}
          />
        </div>
        <div className="items">
          <h3>Products</h3>
          {/*<SearchBar />*/}
          <div className="row">
            {/*{this.props.user && <AddAuthorCard />}*/}
            {itemCards}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps)(ItemList);
