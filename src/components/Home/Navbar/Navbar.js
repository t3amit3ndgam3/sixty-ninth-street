import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Rabby.css";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const [fixedTop, setScroll] = useState(false);
  const { currentUser } = useAuth();
  const [checkNormalUser, setCheckNormalUser] = useState(false);
  const [dashBoard, setDashBoard] = useState({
    Admin: false,
    Agent: false,
    Normal: false,
  });
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    fetch("https://sixtyninethstreet.herokuapp.com/api/getAgent")
      .then((res) => res.json())
      .then((data) => {
        setAgent(data.data);
      });
  }, []);

  useEffect(() => {
    if (checkNormalUser) {
      setDashBoard({
        Admin: false,
        Agent: false,
        Normal: true,
      });
    }
    agent.find((agt) => {
      if (agt.agent_email == currentUser.user_email) {
        setDashBoard({
          Admin: false,
          Agent: true,
          Normal: false,
        });
      } else {
        setCheckNormalUser(true);
      }
    });

    if (currentUser.user_email === "teamit.endgame@gmail.com") {
      setDashBoard({
        Admin: true,
        Agent: false,
        Normal: false,
      });
    } else {
      setCheckNormalUser(true);
    }
  }, [checkNormalUser, agent, currentUser.user_email]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div className="">
      <div className="desktopNav">
        <nav
          className={`navbar navbar-expand-lg fixed-top navbar-light topNavbarCustom scroll${fixedTop}`}
        >
          <div style={{ fontFamily: "Roboto" }} className="container">
            <a className="navbar-brand" href="/">
              SIXTY NINTH STREET
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 fl-right mb-lg-0">
                <li className="nav-item ">
                  <Link
                    to="/"
                    className="nav-link navItemCustom"
                    aria-current="page"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/properties"
                    className="nav-link navItemCustom"
                    aria-current="page"
                  >
                    PROPERTIES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/agents"
                    className="nav-link navItemCustom"
                    aria-current="page"
                  >
                    AGENTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/homeloan"
                    className="nav-link navItemCustom"
                    aria-current="page"
                  >
                    HOME LOANS
                  </Link>
                </li>
                <li className="nav-item">
                  {dashBoard.Admin && (
                    <Link
                      to="/adminDashboard"
                      className="nav-link navItemCustom"
                      aria-current="page"
                    >
                      DASHBOARD
                    </Link>
                  )}
                  {dashBoard.Agent && (
                    <Link
                      to="/agentDashboard"
                      className="nav-link navItemCustom"
                      aria-current="page"
                    >
                      DASHBOARD
                    </Link>
                  )}
                  {dashBoard.Normal && (
                    <Link
                      to="/dashboard"
                      className="nav-link navItemCustom"
                      aria-current="page"
                    >
                      DASHBOARD
                    </Link>
                  )}
                  {!dashBoard.Normal && !dashBoard.Agent && !dashBoard.Admin && (
                    <Link
                      to="/dashboard"
                      className="nav-link navItemCustom"
                      aria-current="page"
                    >
                      DASHBOARD
                    </Link>
                  )}
                </li>
                {!currentUser.user_name && (
                  <li>
                    <Link
                      className="nav-link route_links nav_login_btn"
                      aria-current="page"
                      to="/login"
                    >
                      LOGIN / SIGNUP
                    </Link>
                  </li>
                )}
                {currentUser.user_name && (
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link route_links nav_login_btn"
                      aria-current="page"
                    >
                      {currentUser.user_name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      {/* .................... Down section for mobile version ............................... */}
      <div className="MoboNav">
        <nav className="navbar navbar-light bg-light fixed-top moboShadow">
          <div className="container-fluid ">
            <Link className="navbar-brand navbarBrandEdit" to="/">
              SIXTY NINETH STREET
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  SIXTY NINETH STREET
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item ">
                    <Link
                      to="/"
                      className="nav-link navItemCustom"
                      aria-current="page"
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link navItemCustom"
                      aria-current="page"
                    >
                      PROPERTIES
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link navItemCustom"
                      aria-current="page"
                    >
                      AGENTS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link navItemCustom"
                      aria-current="page"
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link navItemCustom"
                      aria-current="page"
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
