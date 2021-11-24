import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./UserDashboard.css";
import { useAuth } from ".././components/contexts/AuthContext";

const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <div className="dasboard_board">
      <div className="dashboard_header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard_item_container">
        <div className="dasboard_item">
          <div>
            <FontAwesomeIcon
              className="dasboard_item_icon"
              icon={faHouseUser}
            />
          </div>
          <div className="dashboard_item_content">
            <p>20</p>
            <h5>My Properties</h5>
          </div>
        </div>
        <div className="dasboard_item">
          <div>
            <FontAwesomeIcon
              className="dasboard_item_icon"
              icon={faHouseUser}
            />
          </div>
          <div className="dashboard_item_content">
            <p>10</p>
            <h5>Favourites</h5>
          </div>
        </div>
      </div>
      <div className="profile_info_container">
        <div className="profile_info_header">
          <h4>Profile Info</h4>
        </div>
        <div className="profile_table">
          <div className="profile_table_head">
            <ul>
              <li>Name:</li>
              <li>Phone:</li>
              <li>Address:</li>
              <li>Email:</li>
              <li>Occupation:</li>
            </ul>
          </div>
          <div className="profile_table_content">
            <li>{currentUser.user_name}</li>
            <li>{currentUser.user_phone}</li>
            <li>Newyork,US</li>
            <li>{currentUser.user_email}</li>
            <li>Businessman</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
