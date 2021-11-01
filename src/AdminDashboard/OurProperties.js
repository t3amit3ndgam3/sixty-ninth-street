import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/contexts/AuthContext";

const OurProperties = () => {
  const { currentUser, logout } = useAuth();
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch(
      `https://sixtyninethstreet.herokuapp.com/api/findPropertiesByEmail/${currentUser.user_email}`
    )
      .then((res) => res.json())
      .then((data) => setProperties(data.data));
  }, []);

  return (
    <div>
      <div className="admin_dashboard_header row">
        <h1>Our Properties</h1>
        {properties &&
          properties.map((pro) => (
            <div className="col-md-4 mt-3">
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
                    <img
                      src={pro.image_one}
                      className="card-img-top"
                      alt="flat-imag"
                    />
                  </div>
                  <div className="property_card_body">
                    <h5 className="card-title">{pro.property_name}</h5>
                    <h6>৳ {pro.price}</h6>
                    <p>{pro.property_description.substring(0, 80)}...</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurProperties;
