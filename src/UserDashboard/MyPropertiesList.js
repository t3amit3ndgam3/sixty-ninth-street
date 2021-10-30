import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
import i1 from "../images/UserBoard/e1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHighlighter,
	faPlus,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../components/contexts/AuthContext";

const MyPropertiesList = () => {
	const { currentUser } = useAuth();
	const [personalData, setPersonalData] = useState([]);
  console.log(personalData);
	useEffect(() => {
		fetch(
			`https://sixtyninethstreet.herokuapp.com/api/findPropertiesByEmail/${currentUser.user_email}`
		)
			.then((res) => res.json())
			.then((data) => setPersonalData(data.data));
	}, []);
	return (
		<div>
			<div className="dashboard_property_list_header dashboard_header ">
				<h1>My Properties Lists</h1>
				<button>
					<Link
						className="dashboard_property_list_header_link"
						to="/addProperty"
					>
						<FontAwesomeIcon
							className="dashboard_property_list_header_icon"
							icon={faPlus}
						/>
						Add New
					</Link>
				</button>
			</div>
			<div>
				<table class="styled-table">
					<thead>
						<tr>
							<th>Photo</th>
							<th>Property Name</th>
							<th>Price</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{personalData &&
							personalData.map((pdata) => (
								<tr>
									<td>
										<Link to={`/spp/${pdata._id}`}><img src={pdata.image_one} alt="" /></Link>
									</td>
									<td>{pdata.property_name}</td>
									<td>{pdata.price}</td>
									<td className="property_list_cta_buttons">
										<button>
											<FontAwesomeIcon icon={faHighlighter} />
										</button>
										<button>
											<FontAwesomeIcon icon={faTrashAlt} />
										</button>
									</td>
								</tr>
              ))
            }
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyPropertiesList;
