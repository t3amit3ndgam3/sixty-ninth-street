import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faLandmark,
  faBath,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../Unmoy.css";
const Property = ({ pro }) => {
  return (
    <div className="col-md-4">
      <div className="property_card">
        <Link to={`/spp/${pro._id}`} className="card_links">
          <div className="tag_wrapper">
            <div>
              <div className="feature_type">Featured</div>
            </div>
            <div>
              <div className="status_type">Rentals</div>
            </div>
          </div>
          <div className="home_property_card_image">
            <img src={pro.image_one} className="card-img-top" alt="flat-imag" />
          </div>
          <div className="property_card_body">
            <h5 className="card-title">{pro.property_name}</h5>
            <h6>৳ {pro.price}</h6>
            <p>{pro.property_description.substring(0, 80)}...</p>
            <div className="d-flex justify-content-evenly">
              <span className="card_props">
                <FontAwesomeIcon className="card_prop_icon" icon={faBed} />
                {pro.bedroom}
              </span>
              <span className="card_props">
                <FontAwesomeIcon className="card_prop_icon" icon={faBath} />
                {pro.bathroom}
              </span>
              <span className="card_props">
                <FontAwesomeIcon className="card_prop_icon" icon={faLandmark} />
                {pro.property_size} ft<sup>2</sup>
              </span>
              <span className="card_prop_button">
                <button>Details</button>
              </span>
            </div>
            <div className="card_footer">
              <div>
                <h6>
                  <FontAwesomeIcon className="cta_icon" icon={faUser} />
                  {pro.owner_name}
                </h6>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Property;
