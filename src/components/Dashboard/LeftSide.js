import React from "react";
// import Profile_avater from "../../images/Profile_avatar.png";
<<<<<<< HEAD
import Profileer from "../../images/ema.png";
=======
>>>>>>> main
function LeftSide() {
  return (
    <div>
      <div className="card custom-card-left">
<<<<<<< HEAD
        <img src={Profileer} className="card-img-top" alt="..." />
=======
        <img src="/" className="card-img-top" alt="..." />
>>>>>>> main
        <div className="card-body custom-user-dash">
          <h5 className="card-title custom-user-title">User Name</h5>
          <p className="card-text">
            <button className="btn btn-success">
              <a href="##" className="card-link">
                Card link
              </a>
            </button>

            <button className="btn btn-success">
              <a href="##" className="card-link">
                Card link
              </a>
            </button>
          </p>
        </div>
        <div className="list-group list-group-flush">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-dashboard-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-dashboard"
              type="button"
              role="tab"
              aria-controls="v-pills-dashboard"
              aria-selected="true"
            >
              Dashboard
            </button>
            <button
              className="nav-link"
              id="v-pills-changePassword-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-changePassword"
              type="button"
              role="tab"
              aria-controls="v-pills-changePassword"
              aria-selected="false"
            >
              Change Password
            </button>
            <button
              className="nav-link"
              id="v-pills-myProperties-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-myProperties"
              type="button"
              role="tab"
              aria-controls="v-pills-myProperties"
              aria-selected="false"
            >
              My properties
            </button>
            <button
              className="nav-link"
              id="v-pills-myRequirments-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-myRequirments"
              type="button"
              role="tab"
              aria-controls="v-pills-myRequirments"
              aria-selected="false"
            >
              My Requirment
            </button>

            <button
              className="nav-link"
              id="v-pills-favouriteList-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-favouriteList"
              type="button"
              role="tab"
              aria-controls="v-pills-favouriteList"
              aria-selected="false"
            >
              My Favourite List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
