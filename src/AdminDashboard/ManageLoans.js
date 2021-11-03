import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const ManageLoans = () => {
  const [loanList, setLoanList] = useState([]);
  const [statusUpdate, SetStatusUpdate] = useState(null);
  console.log(statusUpdate);
  // console.log(loanList);
  useEffect(() => {
    fetch("https://sixtyninethstreet.herokuapp.com/api/getAllLoan")
      .then((res) => res.json())
      .then((data) => setLoanList(data.data));
  }, []);

  const handleSelectValue = (e, id) => {
    SetStatusUpdate(e.target.value);
    fetch(`https://sixtyninethstreet.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ statusUpdate }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Updated Successfully");
        alert(result.message);
      });
  };
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
            {loanList &&
              loanList.map((loanitem) => (
                <tr>
                  <td>{loanitem.name}</td>
                  <td>2021/09/28</td>
                  <td>500,0000</td>
                  <td className="property_list_cta_buttons">
                    <form>
                      <select
                        onChange={(e) => handleSelectValue(e, loanitem._id)}
                      >
                        <option defaultValue={loanitem.status}>
                          {loanitem.status}
                        </option>
                        <option value="not approved">not approved</option>
                        <option value="approved">approved</option>
                      </select>
                    </form>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageLoans;
