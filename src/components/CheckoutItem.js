import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class CheckoutItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <div className="panel panel-info">
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-2">
                    <img className="img-responsive" src={item.img} />
                  </div>
                  <div className="col-xs-4">
                    <h4 className="product-name">
                      <strong>{item.name}</strong>
                    </h4>
                    <div style={{ height: "100px", overflow: "hidden" }}>
                      <h4>
                        <small>{item.description}</small>
                      </h4>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="col-xs-6 text-right">
                      <h6>
                        <strong>
                          {item.price}
                          <span className="text-muted">x</span>
                        </strong>
                      </h6>
                    </div>
                    <div className="col-xs-4">
                      <input
                        type="text"
                        className="form-control input-sm"
                        value="1"
                      />
                    </div>
                    <div className="col-xs-2">
                      <button type="button" className="btn btn-link btn-xs">
                        <span className="glyphicon glyphicon-trash"> </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(CheckoutItem);
