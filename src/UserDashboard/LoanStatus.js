import React from "react";
import "./UserDashboard.css";
const LoanStatus = () => {
  return (
    <div>
      <div className="dashboard_header">
        <h1>My Loan Status</h1>
      </div>
      <div>
        <table class="styled-table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Applied Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brie Larson</td>
              <td>2021/09/28</td>
              <td>500,0000</td>
              <td className="loan_status_btn">
                <button>Approved</button>
                <button>Not Approved</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanStatus;
