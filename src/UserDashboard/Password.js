import React, { useRef } from "react";
import { useAuth } from "../components/contexts/AuthContext";
import "./UserDashboard.css";
// import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { updatePassword } from "firebase/auth";

const Password = () => {
  const { currentUser } = useAuth();
  const newPasswordRef = useRef();
  const auth = getAuth();
  const user = auth.currentUser;
  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    updatePassword(user, newPasswordRef.current.value)
      .then(() => {
        alert("updated");
      })
      .catch((error) => {
        alert("not updated");
      });
  };
  return (
    <div>
      <div className="dashboard_header">
        <h1>Change Password</h1>
      </div>
      <div className="change_password_wrapper">
        <div className="change_password_content">
          <form onSubmit={handlePasswordUpdate}>
            <h5>Password Change for: {currentUser.displayName}</h5>
            <input
              placeholder="Enter New Password"
              type="text"
              required
              ref={newPasswordRef}
            />
            <input
              placeholder="Retype New Password"
              type="text"
              required
              ref={newPasswordRef}
            />
            <br />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
