import React, { useEffect, useState } from "react";
import Flat1 from "../../../images/Flat1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faLandmark, faBath } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const Properties = () => {

  const [properties, setProperties] = useState([]); 
  useEffect(() => {
    fetch('https://sixtyninethstreet.herokuapp.com/api/allProperty')
    .then( res => res.json())
    .then( data => setProperties(data.data));
  }, [])
  const sliced =  properties.slice(0, 3);
 



  return (
    <div>
      <div className="container">
        <div className="section_headers">
          <h1>Properties</h1>
        </div>
        <div className="row p-3 ">
      {properties && sliced.map( pro =>(  
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
                  <img src={pro.image_one
                  } className="card-img-top" alt="flat-imag" />
                </div>
                <div className="property_card_body">
                  <h5 className="card-title">{pro.property_name}</h5>
                  <h6>৳ {pro.price}</h6>
                  <p>
                   {pro.property_description.substring(0, 80)}...
                  </p>
                  <div className="d-flex justify-content-evenly">
                    <span className="card_props">
                      <FontAwesomeIcon
                        className="card_prop_icon"
                        icon={faBed}
                      />
                      {pro.bedroom}
                    </span>
                    <span className="card_props">
                      <FontAwesomeIcon
                        className="card_prop_icon"
                        icon={faBath}
                      />
                      {pro.bathroom}
                    </span>
                    <span className="card_props">
                      <FontAwesomeIcon
                        className="card_prop_icon"
                        icon={faLandmark}
                      />
                      s {pro.property_size} ft<sup>2</sup>
                    </span>
                    <span className="card_prop_button">
                      <button>Details</button>
                    </span>
                  </div>
                  <div className="card_footer">
                    <div>
                      <h6>Allison Parker</h6>
                    </div>
                    <div className="cta_btn">
                      <FontAwesomeIcon className="cta_icon" icon={faShareAlt} />
                      <FontAwesomeIcon  className="cta_icon" icon={faHeart} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          ))}
        </div>
        <div className="more_btn">
          <button>Load More Listings</button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
