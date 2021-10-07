import React from "react";

function ChangePassword() {
  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder="Email"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="New Password"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Conform New Password"
        aria-label="default input example"
      ></input>
      <input className="btn btn-primary" type="submit" value="Submit" />
    </div>
  );
}

export default ChangePassword;
