import React, { useState, useEffect } from "react";
import { useAuth } from "../components/contexts/AuthContext";
import "./UserDashboard.css";
const LoanStatus = () => {
  const { currentUser } = useAuth();
  const [loan, setLoan] = useState([]);

  useEffect(() => {
    const email = currentUser.user_email;
    console.log(email);
    fetch(
      `https://sixtyninethstreet.herokuapp.com/api/getSpecificUserAllLoan/${email}`
    ).then((res) => res.json().then((data) => setLoan(data.result)));
  }, [currentUser.user_email]);

  return (
    <div>
      <div className="dashboard_header">
        <h1>My Loan Status</h1>
      </div>
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Applied Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loan &&
              loan.map((ln) => (
                <tr id={ln._id}>
                  <td>{ln.name}</td>
                  <td>{ln.createdAt}</td>
                  <td>{ln.loan_amount}</td>
                  <td>
                    <button className="status_col_btn">{ln.loan_status}</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanStatus;
