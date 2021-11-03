import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const ManageLoans = () => {
  const [loan, setLoan] = useState([]);
  const [operationUpdate, setOperation] = useState();
  console.log(loan);
  useEffect(() => {
    fetch("https://sixtyninethstreet.herokuapp.com/api/getAllLoan")
    .then( res => res.json()
    
    .then( data => setLoan(data.data)))
  }, [operationUpdate])

  const handleApproved = (id) => {
    fetch(`https://sixtyninethstreet.herokuapp.com/api/updateStatus/${id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    })
    .then( res => res.json()
    .then( data => setOperation(data)))
  }

  const handleDelete = (id) => {
    fetch(`https://sixtyninethstreet.herokuapp.com/api/delete/${id}`, {
			method: "DELETE",
		})	
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(id).style.display = "none";
    });
  }

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loan && loan.map(ln =>(
            <tr id={ln._id}>
              <td>{ln.name}</td>
              <td>{ln.createdAt}</td>
              <td>{ln.loan_amount}</td>
              <td>{ln.loan_status}</td>
              <td className="property_list_cta_buttons">
                    <button onClick={()=>handleApproved(ln._id)}>approved</button>
                    <button onClick={()=>handleDelete(ln._id)} >delete</button>
              </td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageLoans;
