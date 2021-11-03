import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ManageAgents = () => {
	const [agent, setAgent] = useState([]);
	useEffect(() => {
		fetch("https://sixtyninethstreet.herokuapp.com/api/getAgent")
			.then((res) => res.json())
			.then((data) => {
				setAgent(data.data);
			});
	}, []);

  const deleteAgent =(id)=>{
    fetch(`https://sixtyninethstreet.herokuapp.com/api/deleteAgent/${id}`, {
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
				<h1>Manage Agents</h1>
			</div>
			<div>
				<table class="styled-table">
					<thead>
						<tr>
							<th>Agent Name</th>
							<th>Hiring Price</th>
							<th>Actions</th>
						</tr>
					</thead>
					{agent &&
						agent.map((agt) => (
							<tbody id={agt._id}>
								<tr>
                <Link to={`/singleAgent/${agt._id}`}><td>{agt.agent_name}</td></Link>
									<td>{agt.fees} tk</td>
									<td className="property_list_cta_buttons">
										<button>
											<FontAwesomeIcon onClick={()=>deleteAgent(agt._id)} icon={faTrashAlt} />
										</button>
									</td>
								</tr>
							</tbody>
						))}
				</table>
			</div>
		</div>
	);
};

export default ManageAgents;
