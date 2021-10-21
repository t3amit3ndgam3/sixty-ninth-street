import React, { useEffect, useState } from "react";
import Flat1 from "../../../images/Flat1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faLandmark, faBath } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const Properties = () => {

  const [properties, setProperties] = useState([])
  
 
  useEffect(() => {
    fetch('https://sixtyninethstreet.herokuapp.com/allProperty')
    .then( res => res.json())
    .then( data => setProperties(data))
  }, [])
  const sliced =  properties.slice(0, 3);
  console.log('...',properties);
  return (
    <div>
      <div className="container">
        <div className="section_headers">
          <h1>Properties</h1>
        </div>
        <div className="row p-3 ">
      {sliced && sliced.map( pro =>(  
          <div className="col-md-4 mt-3">
            <div className="property_card">
              <Link to="/spp" className="card_links">
                <div className="tag_wrapper">
                  <div>
                    <div className="feature_type">Featured</div>
                  </div>
                  <div>
                    <div className="status_type">Rentals</div>
                  </div>
                </div>
                <div className="home_property_card_image">
                  <img src={Flat1} className="card-img-top" alt="flat-imag" />
                </div>
                <div className="property_card_body">
                  <h5 className="card-title">Luxury Apartments in Baridhara</h5>
                  <h6>৳ 85,50,000</h6>
                  <p>
                    Downtown Frederick hot spot. Top location for local
                    entertainment. All fixtures are included. Liquor license can
                    be included.
                  </p>
                  <div className="d-flex justify-content-evenly">
                    <span className="card_props">
                      <FontAwesomeIcon
                        className="card_prop_icon"
                        icon={faBed}
                      />
                      3
                    </span>
                    <span className="card_props">
                      <FontAwesomeIcon
                        className="card_prop_icon"
                        icon={faBath}
                      />
                      2
                    </span>
                    <span className="card_props">
                      <FontAwesomeIcon
                        className="card_prop_icon"
                        icon={faLandmark}
                      />
                      s 3000 ft<sup>2</sup>
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
                      <FontAwesomeIcon className="cta_icon" icon={faHeart} />
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
              </div>
            </Link>
          </div>))}
=======
              </Link>
            </div>
          </div>
>>>>>>> b7f610e17634531e3b3eca91f75a760dcc5897d2
        </div>
        <div className="more_btn">
          <button>Load More Listings</button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
