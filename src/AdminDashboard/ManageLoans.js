import React from "react";
import "./AdminDashboard.css";

const ManageLoans = () => {
  return (
    <div>
      <div className="admin_dashboard_header">
        <h1>Manage User Loan Status</h1>
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
              <td className="property_list_cta_buttons">
                <form>
                  <select>
                    <option value="not approved">not approved</option>
                    <option value="approved">approved</option>
                  </select>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageLoans;
