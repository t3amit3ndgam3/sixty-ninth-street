import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faLandmark,
  faBath,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./FeatureDetails.css";
const AppointmentFeatureDetails = ({ feature }) => {
  const [PropertiesList, setPropertiesList] = useState([]);
  console.log(PropertiesList);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://sixtyninethstreet.herokuapp.com/api/allProperty")
      .then((res) => res.json())
      .then((data) => setPropertiesList(data.data));
  }, []);
  return (
    <div className="navSpace">
      <div className="homeloan_header">
        <div>
          <h1>Featured properties in Bangladesh</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {PropertiesList &&
            PropertiesList.map((item) => (
              <div className="col-md-3 mt-3">
                <div className="property_card">
                  <Link to={`/spp/${item._id}`} className="card_links">
                    <div className="tag_wrapper">
                      <div>
                        <div className="feature_type">Featured</div>
                      </div>
                      <div>
                        <div className="type">Rentals</div>
                      </div>
                    </div>
                    <div className="home_property_card_image">
                      <img
                        src={item.image_one}
                        className="card-img-top"
                        alt="flat-imag"
                      />
                    </div>
                    <div className="property_card_body">
                      <h5 className="card-title">{item.property_name}</h5>
                      <h6>৳ {item.price}</h6>
                      <p>{item.property_description.substring(0, 80)}...</p>
                      <div className="d-flex justify-content-evenly">
                        <span className="card_props">
                          <FontAwesomeIcon
                            className="card_prop_icon"
                            icon={faBed}
                          />
                          {item.bedroom}
                        </span>
                        <span className="card_props">
                          <FontAwesomeIcon
                            className="card_prop_icon"
                            icon={faBath}
                          />
                          {item.bathroom}
                        </span>
                        <span className="card_props">
                          <FontAwesomeIcon
                            className="card_prop_icon"
                            icon={faLandmark}
                          />
                          {item.property_size} ft<sup>2</sup>
                        </span>
                        <span className="card_prop_button">
                          <button>Details</button>
                        </span>
                      </div>
                      <div className="card_footer">
                        <div>
                          <h6>
                            <FontAwesomeIcon
                              className="cta_icon"
                              icon={faUser}
                            />
                            {item.owner_name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentFeatureDetails;
