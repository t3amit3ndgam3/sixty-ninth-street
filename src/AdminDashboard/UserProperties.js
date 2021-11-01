import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./UserDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHighlighter,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
const UserProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("https://sixtyninethstreet.herokuapp.com/api/allProperty")
      .then((res) => res.json())
      .then((data) => setProperties(data.data));
  }, []);

  const deleteProperties = (id) => {
    fetch(
      `https://sixtyninethstreet.herokuapp.com/api/deleteProperties/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        document.getElementById(id).style.display = "none";
      });
  };
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
            {properties &&
              properties.map((pro) => (
                <tr id={pro._id}>
                  <td>
                    <Link to={`/spp/${pro._id}`}>
                      <img src={pro.image_one} alt="" />
                    </Link>
                  </td>
                  <td>{pro.property_name}</td>
                  <td>{pro.price} tk</td>
                  <td className="property_list_cta_buttons">
                    <button>
                      <FontAwesomeIcon icon={faHighlighter} />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        onClick={() => deleteProperties(pro._id)}
                        icon={faTrashAlt}
                      />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProperties;
