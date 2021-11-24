import React, { useEffect, useState } from "react";
import "../AdminDashboard/AdminDashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faTimes,
  faBookmark,
  faListUl,
  faPeopleArrows,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";

import ManageAgents from "./ManageAgents";
import UserProperties from "./UserProperties";
import ManageLoans from "./ManageLoans";
import OurProperties from "./OurProperties";
import AddAgents from "../components/AddAgents/AddAgents";
import { useAuth } from ".././components/contexts/AuthContext";
import { useHistory } from "react-router-dom";
const AdminDashboard = () => {
  const [inactive, setInactive] = useState(false);
  const { logout, setCurrentUser } = useAuth();
  const history = useHistory();
  const [data, setData] = useState({
    password: false,
    OurProperties: false,
    UserProperties: false,
    ManageLoans: true,
    AddAgent: false,
  });
  const handleLogout = async () => {
    try {
      await logout();
      setCurrentUser({
        user_name: "",
        user_email: "",
        user_phone: "01717-",
      });
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      history.push("/login");
    } catch {
      alert("Failed to Logout");
    }
  };
  const handleMenuBar = (menuName) => {
    if (menuName === "ManageAgents") {
      setData({
        ManageAgents: true,
        OurProperties: false,
        UserProperties: false,
        ManageLoans: false,
        AddAgent: false,
      });
    }
    if (menuName === "OurProperties") {
      setData({
        ManageAgents: false,
        OurProperties: true,
        UserProperties: false,
        ManageLoans: false,
        AddAgent: false,
      });
    }
    if (menuName === "ManageLoans") {
      setData({
        ManageAgents: false,
        OurProperties: false,
        UserProperties: false,
        ManageLoans: true,
        AddAgent: false,
      });
    }
    if (menuName === "UserProperties") {
      setData({
        ManageAgents: false,
        OurProperties: false,
        UserProperties: true,
        ManageLoans: false,
        AddAgent: false,
      });
    }
    if (menuName === "AddAgent") {
      setData({
        ManageAgents: false,
        OurProperties: false,
        UserProperties: false,
        ManageLoans: false,
        AddAgent: true,
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
            <Link to="/" className="dashboard_route_links text-white">
              <h4>69S</h4>
            </Link>
          </div>
          <div
            onClick={() => setInactive(!inactive)}
            className="toggle-menu-btn"
          >
            {inactive ? (
              <FontAwesomeIcon icon={faAlignLeft} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
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
                onClick={() => handleMenuBar("OurProperties")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faListUl} />
                </div>
                <span>Our Properties</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("UserProperties")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faPeopleArrows} />
                </div>
                <span>User Properties</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("AddAgent")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faPeopleArrows} />
                </div>
                <span>Add Agent</span>
              </div>
            </li>
            <li>
              <div onClick={handleLogout} className="menu-item">
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faUnlockAlt} />
                </div>
                <span>Log out</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`col-md-10 dashboard_panel ${inactive ? "inactive" : ""}`}
      >
        {data.ManageAgents && <ManageAgents />}
        {data.OurProperties && <OurProperties />}
        {data.ManageLoans && <ManageLoans />}
        {data.UserProperties && <UserProperties />}
        {data.AddAgent && <AddAgents />}
      </div>
    </div>
  );
};

export default AdminDashboard;
