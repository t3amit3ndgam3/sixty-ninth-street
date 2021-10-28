import React, { useEffect, useState } from "react";
import "../AdminDashboard/AdminDashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignRight,
  faBookmark,
  faListUl,
  faPeopleArrows,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";

import ManageAgents from "./ManageAgents";
import ManageProperties from "./ManageProperties";
import ManageLoans from "./ManageLoans";
import MyProperties from "./MyProperties";

const AdminDashboard = () => {
  const [inactive, setInactive] = useState(false);

  const [data, setData] = useState({
    password: false,
    MyProperties: false,
    ManageProperties: false,
    ManageLoans: true,
  });

  const handleMenuBar = (menuName) => {
    if (menuName === "ManageAgents") {
      setData({
        ManageAgents: true,
        MyProperties: false,
        ManageProperties: false,
        ManageLoans: false,
      });
    }
    if (menuName === "MyProperties") {
      setData({
        ManageAgents: false,
        MyProperties: true,
        ManageProperties: false,
        ManageLoans: false,
      });
    }
    if (menuName === "ManageLoans") {
      setData({
        ManageAgents: false,
        properties: false,
        ManageProperties: false,
        ManageLoans: true,
      });
    }
    if (menuName === "ManageProperties") {
      setData({
        ManageAgents: false,
        MyProperties: false,
        ManageProperties: true,
        ManageLoans: false,
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
                onClick={() => handleMenuBar("ManageLoans")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <span>Manage Loans</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("ManageAgents")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faUnlockAlt} />
                </div>
                <span>Manage Agents</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("MyProperties")}
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
                onClick={() => handleMenuBar("ManageProperties")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faPeopleArrows} />
                </div>
                <span>Manage Properties</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`col-md-10 dashboard_panel ${inactive ? "inactive" : ""}`}
      >
        {data.ManageAgents && <ManageAgents />}
        {data.MyProperties && <MyProperties />}
        {data.ManageLoans && <ManageLoans />}
        {data.ManageProperties && <ManageProperties />}
      </div>
    </div>
  );
};

export default AdminDashboard;
