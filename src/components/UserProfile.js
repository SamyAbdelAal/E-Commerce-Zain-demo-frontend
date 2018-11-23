import React, { Component } from "react";

// Components
import Loading from "./Loading";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class UserProfile extends Component {
  componentDidMount() {
    console.log(this.props.match);
    this.props.getProfile(this.props.user.user_id);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const profile = this.props.profile;
      return (
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title mb-4">
                  <div className="d-flex justify-content-start">
                    <div className="image-container">
                      <img
                        src="http://placehold.it/150x150"
                        id="imgProfile"
                        style={{ width: "150px, height: 150px" }}
                        className="img-thumbnail"
                      />
                      <div className="middle">
                        <input
                          type="button"
                          className="btn btn-secondary"
                          id="btnChangePicture"
                          value="Change"
                        />
                        <input
                          type="file"
                          style={{ display: "none" }}
                          id="profilePicture"
                          name="file"
                        />
                      </div>
                    </div>
                    <div className="userData ml-3">
                      <h2
                        className="d-block"
                        style={{ fontSize: "1.5rem, font-weight: bold" }}
                      >
                        <h2>{this.props.user.username}</h2>
                      </h2>
                    </div>
                    <div className="ml-auto">
                      <input
                        type="button"
                        className="btn btn-primary d-none"
                        id="btnDiscard"
                        value="Discard Changes"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="basicInfo-tab"
                          data-toggle="tab"
                          href="#basicInfo"
                          role="tab"
                          aria-controls="basicInfo"
                          aria-selected="true"
                        >
                          Basic Info
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content ml-1" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="basicInfo"
                        role="tabpanel"
                        aria-pledby="basicInfo-tab"
                      >
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <p style={{ fontWeight: "bold" }}>Full Name</p>
                          </div>
                          <div className="col-md-8 col-6">{profile.name}</div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <p style={{ fontWeight: "bold" }}>Birth Date</p>
                          </div>
                          <div className="col-md-8 col-6">{profile.dob}</div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <p style={{ fontWeight: "bold" }}>Email</p>
                          </div>
                          <div className="col-md-8 col-6">{profile.email}</div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <p style={{ fontWeight: "bold" }}>Something</p>
                          </div>
                          <div className="col-md-8 col-6">Something</div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <p style={{ fontWeight: "bold" }}>Something</p>
                          </div>
                          <div className="col-md-8 col-6">Something</div>
                        </div>
                        <hr />
                      </div>
                    </div>
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
    user: state.auth.user,
    profile: state.profile.profile,
    loading: state.profile.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: userID => dispatch(actionCreators.fetchUserProfile(userID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
