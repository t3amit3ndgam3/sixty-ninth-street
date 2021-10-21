import React, { useEffect, useState } from "react";
import ".././Test/Test.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignRight,
  faBookmark,
  faFileAlt,
  faListUl,
  faPeopleArrows,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./Dashboard";
import Favourites from "./Favourites";
import Requirement from "./Requirement";
import Password from "./Password";
import MyPropertiesList from "./MyPropertiesList";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [inactive, setInactive] = useState(false);

  const [data, setData] = useState({
    password: false,
    properties: false,
    dashboard: true,
    requirement: false,
    favourites: false,
  });

  const handleMenuBar = (menuName) => {
    if (menuName === "password") {
      setData({
        password: true,
        properties: false,
        dashboard: false,
        requirement: false,
        favourites: false,
      });
    }
    if (menuName === "properties") {
      setData({
        password: false,
        properties: true,
        dashboard: false,
        requirement: false,
        favourites: false,
      });
    }
    if (menuName === "dashboard") {
      setData({
        password: false,
        properties: false,
        dashboard: true,
        requirement: false,
        favourites: false,
      });
    }
    if (menuName === "favourites") {
      setData({
        password: false,
        properties: false,
        dashboard: false,
        requirement: false,
        favourites: true,
      });
    }
    if (menuName === "requirement") {
      setData({
        password: false,
        properties: false,
        dashboard: false,
        requirement: true,
        favourites: false,
      });
    }
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);
  return (
    <div className="dashboard_board">
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <div className="brand_name">
            <Link to="/">
              <h4>SNS</h4>
            </Link>
          </div>
          <div
            onClick={() => setInactive(!inactive)}
            className="toggle-menu-btn"
          >
            {inactive ? (
              <FontAwesomeIcon icon={faAlignRight} />
            ) : (
              <FontAwesomeIcon icon={faAlignLeft} />
            )}
          </div>
        </div>
        <div className="divider"></div>
        <div className="main-menu">
          <ul>
            <li
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            >
              <div
                onClick={() => handleMenuBar("dashboard")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faFileAlt} />
                </div>
                <span>Dashboard</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("favourites")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <span>My Favourites</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("password")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faUnlockAlt} />
                </div>
                <span>Change Password</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("properties")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faListUl} />
                </div>
                <span>My Properties</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("requirement")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faPeopleArrows} />
                </div>
                <span>Add new Requirements</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`col-md-10 dashboard_panel ${inactive ? "inactive" : ""}`}
      >
        {data.password && <Password></Password>}
        {data.properties && <MyPropertiesList></MyPropertiesList>}
        {data.favourites && <Favourites></Favourites>}
        {data.dashboard && <Dashboard></Dashboard>}
        {data.requirement && <Requirement></Requirement>}
      </div>
    </div>
  );
};

export default UserDashboard;
