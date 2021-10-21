import React, { useState } from "react";
import "./Test.css";
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
const Dashboard = () => <h1>Dashboard</h1>;
const Password = () => <h1>Password</h1>;
const Properties = () => <h1>Properties</h1>;
const Requirements = () => <h1>Requirements</h1>;

const Test = () => {
  const [inactive, setInactive] = useState(false);

  const [data, setData] = useState({
    password: false,
    properties: false,
    dashboard: true,
    requirement: false,
  });
  const handleMenuBar = (menuName) => {
    if (menuName === "password") {
      setData({
        password: true,
        properties: false,
        dashboard: false,
        requirement: false,
      });
    }
    if (menuName === "properties") {
      setData({
        password: false,
        properties: true,
        dashboard: false,
        requirement: false,
      });
    }
    if (menuName === "dashboard") {
      setData({
        password: false,
        properties: false,
        dashboard: true,
        requirement: false,
      });
    }
    if (menuName === "requirement") {
      setData({
        password: false,
        properties: false,
        dashboard: false,
        requirement: true,
      });
    }
  };
  return (
    <div className="navSpace">
      <div className="row">
        <div
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
          className={`col-md-2 side-menu ${inactive ? "inactive" : ""}`}
        >
          <div className="top-section">
            <div className="">SNS</div>
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
          <div className="main-menu">
            <ul>
              <li>
                {/* <div className="menu-icon"></div> */}
                <button onClick={() => handleMenuBar("dashboard")}>
                  <button style={{ color: "red" }}>Dashboard</button>
                </button>
              </li>
              <li>
                {/* <div className="menu-icon"></div> */}
                <button onClick={() => handleMenuBar("password")}>
                  <span style={{ color: "red" }}>Password</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`col-md-10 dashboard_panel ${inactive ? "inactive" : ""}`}
        >
          {data.password && <Password></Password>}
          {data.properties && <Properties></Properties>}
          {data.dashboard && <Dashboard></Dashboard>}
          {data.requirement && <Requirements></Requirements>}
        </div>
      </div>
    </div>
  );
};

export default Test;
