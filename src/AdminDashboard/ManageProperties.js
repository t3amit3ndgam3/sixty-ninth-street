import React from "react";
import { Link } from "react-router-dom";
// import "./UserDashboard.css";
import i1 from "../images/UserBoard/e1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHighlighter,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
const ManageProperties = () => {
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
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={i1} alt="" />
              </td>
              <td>Gorgeous Farm in Jersey</td>
              <td>2021/09/28</td>
              <td className="property_list_cta_buttons">
                <button>
                  <FontAwesomeIcon icon={faHighlighter} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={i1} alt="" />
              </td>
              <td>Gorgeous Farm in Jersey</td>
              <td>2021/09/28</td>
              <td className="property_list_cta_buttons">
                <button>
                  <FontAwesomeIcon icon={faHighlighter} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={i1} alt="" />
              </td>
              <td>Gorgeous Farm in Jersey</td>
              <td>2021/09/28</td>
              <td className="property_list_cta_buttons">
                <button>
                  <FontAwesomeIcon icon={faHighlighter} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={i1} alt="" />
              </td>
              <td>Gorgeous Farm in Jersey</td>
              <td>2021/09/28</td>
              <td className="property_list_cta_buttons">
                <button>
                  <FontAwesomeIcon icon={faHighlighter} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperties;
