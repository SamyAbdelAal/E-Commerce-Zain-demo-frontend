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
        <div className="item">
          <div>
            <h3>{item.name}</h3>
            <img src={item.img} className="img-thumbnail img-fluid" />
          </div>
          <p>{item.description}</p>
          <p>{item.price}</p>
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
