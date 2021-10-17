import React, { useState } from "react";

const Dashboard = () => <h1>Dashboard</h1>;
const Password = () => <h1>Password</h1>;
const Properties = () => <h1>Properties</h1>;
const Requirements = () => <h1>Requirements</h1>;

const Test = () => {
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
    <div>
      <div className="container navSpace">
        <div className="row">
          <div className="col-md-4">
            <button onClick={() => handleMenuBar("password")}>password</button>
            <button onClick={() => handleMenuBar("properties")}>
              Properties
            </button>
            <button onClick={() => handleMenuBar("dashboard")}>
              dashboard
            </button>
            <button onClick={() => handleMenuBar("requirement")}>
              requirement
            </button>
          </div>
          <div className="col-md-8">
            {data.password && <Password></Password>}
            {data.properties && <Properties></Properties>}
            {data.dashboard && <Dashboard></Dashboard>}
            {data.requirement && <Requirements></Requirements>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
