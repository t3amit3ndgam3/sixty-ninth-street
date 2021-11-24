import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserReviews from "../components/UserReviews/UserReviews";
import {
  faAlignLeft,
  faTimes,
  faBookmark,
  faFileAlt,
  faListUl,
  faPeopleArrows,
  faUnlockAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./Dashboard";
import Favourites from "./Favourites";
import Requirement from "./Requirement";
import Password from "./Password";
import MyPropertiesList from "./MyPropertiesList";
import { Link } from "react-router-dom";
import LoanStatus from "./LoanStatus";
import { faStaylinked } from "@fortawesome/free-brands-svg-icons";
import Client from "./Client";
import { useAuth } from ".././components/contexts/AuthContext";
import { useHistory } from "react-router-dom";
const UserDashboard = () => {
  const [inactive, setInactive] = useState(false);
  const { logout, setCurrentUser } = useAuth();
  const history = useHistory();
  const [data, setData] = useState({
    password: false,
    properties: false,
    dashboard: true,
    requirement: false,
    favourites: false,
    loan_status: false,
    client: false,
    review: false,
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
    if (menuName === "password") {
      setData({
        password: true,
        properties: false,
        dashboard: false,
        requirement: false,
        favourites: false,
        loan_status: false,
        client: false,
        review: false,
      });
    }
    if (menuName === "properties") {
      setData({
        password: false,
        properties: true,
        dashboard: false,
        requirement: false,
        favourites: false,
        loan_status: false,
        client: false,
        review: false,
      });
    }
    if (menuName === "dashboard") {
      setData({
        password: false,
        properties: false,
        dashboard: true,
        requirement: false,
        favourites: false,
        loan_status: false,
        client: false,
        review: false,
      });
    }
    if (menuName === "favourites") {
      setData({
        password: false,
        properties: false,
        dashboard: false,
        requirement: false,
        favourites: true,
        loan_status: false,
        client: false,
        review: false,
      });
    }
    if (menuName === "requirement") {
      setData({
        password: false,
        properties: false,
        dashboard: false,
        requirement: true,
        favourites: false,
        loan_status: false,
        client: false,
        review: false,
      });
    }
    if (menuName === "loan_status") {
      setData({
        password: false,
        properties: false,
        dashboard: false,
        requirement: false,
        favourites: false,
        loan_status: true,
        client: false,
        review: false,
      });
    }
    if (menuName === "client") {
      setData({
        password: false,
        properties: false,
        dashboard: false,
        requirement: false,
        favourites: false,
        loan_status: false,
        client: true,
        review: false,
      });
    }
    if (menuName === "review") {
      setData({
        password: false,
        properties: false,
        dashboard: false,
        requirement: false,
        favourites: false,
        loan_status: false,
        client: false,
        review: true,
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
                onClick={() => handleMenuBar("client")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <span>My Agent</span>
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
            <li>
              <div
                onClick={() => handleMenuBar("loan_status")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faStaylinked} />
                </div>
                <span>My Loan Status</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMenuBar("review")}
                className="menu-item"
              >
                <div className="menu-icon">
                  <FontAwesomeIcon icon={faStaylinked} />
                </div>
                <span>Add Review</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="logout_button" onClick={handleLogout}>
          <div className="logout_icon">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
          <span>Log out</span>
        </div>
      </div>
      <div
        className={`col-md-10 dashboard_panel ${inactive ? "inactive" : ""}`}
      >
        {data.password && <Password />}
        {data.properties && <MyPropertiesList />}
        {data.favourites && <Favourites />}
        {data.dashboard && <Dashboard />}
        {data.requirement && <Requirement />}
        {data.loan_status && <LoanStatus />}
        {data.client && <Client />}
        {data.review && <UserReviews />}
      </div>
    </div>
  );
};

export default UserDashboard;
