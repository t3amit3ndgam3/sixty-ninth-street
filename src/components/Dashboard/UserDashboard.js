import React from "react";
import LeftSide from "./LeftSide";
import ChangePassword from "./tabs/ChangePassword";
import DashboardTab from "./tabs/DashboardTab";
import FavouriteList from "./tabs/FavouriteList";
import MyProperties from "./tabs/MyProperties";
import MyRequirments from "./tabs/MyRequirments";

function UserDashboard() {
  return (
    <div className="row leftDashboardCard navSpace">
      <div className="col-md-3 col-sm-12">
        <LeftSide></LeftSide>
      </div>

      <div className="col-md-9 col-sm-12">
        <div className="col-md-9 col-sm-12">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-dashboard"
              role="tabpanel"
              aria-labelledby="v-pills-dashboard-tab"
            >
              <DashboardTab></DashboardTab>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-changePassword"
              role="tabpanel"
              aria-labelledby="v-pills-changePassword-tab"
            >
              <ChangePassword></ChangePassword>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-myProperties"
              role="tabpanel"
              aria-labelledby="v-pills-myProperties-tab"
            >
              <MyProperties></MyProperties>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-myRequirments"
              role="tabpanel"
              aria-labelledby="v-pills-myRequirments-tab"
            >
              <MyRequirments></MyRequirments>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-favouriteList"
              role="tabpanel"
              aria-labelledby="v-pills-favouriteList-tab"
            >
              <FavouriteList></FavouriteList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserDashboard;
