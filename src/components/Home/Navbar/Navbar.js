import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Rabby.css";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [fixedTop, setScroll] = useState(false);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  const [checkAgent, setCheckAgent] = useState(false);

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
    agent.find((agt) => {
      if (agt.agent_email == currentUser.user_email) {
        setCheckAgent(true);
      }
      console.log(agt.agent_email, currentUser.user_email);
    });
    if (currentUser.user_email == "teamit.endgame@gmail.com") {
      setDashBoard({
        Admin: true,
        Agent: false,
        Normal: false,
      });
    } else if (checkAgent) {
      setDashBoard({
        Admin: true,
        Agent: false,
        Normal: false,
      });
    } else if (!checkAgent) {
      agent.find((agt) => {
        if (agt.agent_email == currentUser.user_email) {
          setDashBoard({
            Admin: true,
            Agent: false,
            Normal: false,
          });
        }
      });
      setDashBoard({
        Admin: true,
        Agent: false,
        Normal: false,
      });
    } else {
      setDashBoard({
        Admin: false,
        Agent: false,
        Normal: true,
      });
    }
  }, [agent]);

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
    console.log("click");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div className="">
      <div className="desktopNav">
        <nav
          class={`navbar navbar-expand-lg fixed-top navbar-light topNavbarCustom scroll${fixedTop}`}
        >
          <div style={{ fontFamily: "Roboto" }} class="container">
            <a class="navbar-brand" href="/">
              SIXTY NINETH STREET
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 fl-right mb-lg-0">
                <li class="nav-item ">
                  <Link
                    to="/"
                    class="nav-link navItemCustom"
                    aria-current="page"
                  >
                    HOME
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/properties"
                    class="nav-link navItemCustom"
                    aria-current="page"
                  >
                    PROPERTIES
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/agents"
                    class="nav-link navItemCustom"
                    aria-current="page"
                  >
                    AGENTS
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/homeloan"
                    class="nav-link navItemCustom"
                    aria-current="page"
                  >
                    HOME LOANS
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/addAgents"
                    class="nav-link navItemCustom"
                    aria-current="page"
                  >
                    ADD AGENT
                  </Link>
                </li>
                <li class="nav-item">
                  {dashBoard.Admin && (
                    <Link
                      to="/admin"
                      class="nav-link navItemCustom"
                      aria-current="page"
                    >
                      DASHBOARD
                    </Link>
                  )}
                  {dashBoard.Normal && (
                    <Link
                      to="/dashboard"
                      class="nav-link navItemCustom"
                      aria-current="page"
                    >
                      DASHBOARD
                    </Link>
                  )}
                </li>
                <li class="nav-item">
                  <Link
                    to="/addAgents"
                    class="nav-link navItemCustom"
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Link>
                </li>
                {currentUser && (
                  <li class="nav-item">
                    <Link
                      to="/"
                      class="nav-link navItemCustom bg-info"
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
      <div className="MoboNav">
        <nav class="navbar navbar-light bg-light fixed-top moboShadow">
          <div class="container-fluid ">
            <Link class="navbar-brand navbarBrandEdit" href="/">
              SIXTY NINETH STREET
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  SIXTY NINETH STREET
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item ">
                    <Link
                      to="/"
                      class="nav-link navItemCustom"
                      aria-current="page"
                    >
                      HOME
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/"
                      class="nav-link navItemCustom"
                      aria-current="page"
                    >
                      PROPERTIES
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/"
                      class="nav-link navItemCustom"
                      aria-current="page"
                    >
                      AGENTS
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/"
                      class="nav-link navItemCustom"
                      aria-current="page"
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/"
                      class="nav-link navItemCustom"
                      aria-current="page"
                    >
                      CONTACT
                    </Link>
                  </li>
                  <li class="nav-item">
                    {currentUser && currentUser.displayName}
                    {currentUser && (
                      <button onClick={handleLogout}>Log Out</button>
                    )}
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
