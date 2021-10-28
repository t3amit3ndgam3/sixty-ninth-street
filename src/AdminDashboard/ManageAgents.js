import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ManageAgents = () => {
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
              <th>Hiring Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brie Larson</td>
              <td>2021/09/28</td>
              <td className="property_list_cta_buttons">
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

export default ManageAgents;
