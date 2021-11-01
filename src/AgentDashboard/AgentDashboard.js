import React, { useEffect, useState } from "react";
import "./AgentDashboard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignRight,
  faBookmark,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import AddProperty from "../components/AddProperty/AddProperty";
import MyClients from "./MyClients";

const AgentDashboard = () => {
  const [inactive, setInactive] = useState(false);

  const [data, setData] = useState({
    MyClients: true,
    AddProperty: false,
  });

  const handleMenuBar = (menuName) => {
    if (menuName === "AddProperty") {
      setData({
        MyClients: false,
        AddProperty: true,
      });
    }
    if (menuName === "MyClients") {
      setData({
        MyClients: true,
        AddProperty: false,
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
                onClick={() => handleMenuBar("MyClients")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <span>My Clients</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("AddProperty")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faUnlockAlt} />
                </div>
                <span>Add property</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`col-md-10 dashboard_panel ${inactive ? "inactive" : ""}`}
      >
        {data.AddProperty && <AddProperty />}
        {data.MyClients && <MyClients />}
      </div>
    </div>
  );
};

export default AgentDashboard;
