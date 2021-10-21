import React from "react";
import "./UserDashboard.css";
const Password = () => {
  return (
    <div>
      <div className="dashboard_header">
        <h1>Change Password</h1>
      </div>
      <div className="change_password_wrapper">
        <div className="change_password_content">
          <h5>Password Change for: Veronica </h5>
          <input placeholder="Enter New Password" type="text" required />
          <br />
          <input placeholder="Retype New Password" type="text" required />
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Password;
