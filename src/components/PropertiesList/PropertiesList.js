import React, { useState, useEffect } from "react";
import "./PropertiesList.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

const PropertiesList = () => {
  const bed = <FontAwesomeIcon icon={faBed} />;
  const bath = <FontAwesomeIcon icon={faBath} />;
  const objectGroup = <FontAwesomeIcon icon={faObjectGroup} />;
  const [propertiesAll, setPropertiesAll] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loadData, setLoadData] = useState(5);
  const [btnFlag, setBtnFlag] = useState(true);

  useEffect(() => {
    fetch("https://sixtyninethstreet.herokuapp.com/api/allProperty")
      .then((res) => res.json())
      .then((data) => {
        setPropertiesAll(data.data);
        console.log(data.data);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    const cutData = propertiesAll.slice(0, loadData);
    setProperties(cutData);
  }, [loadData, propertiesAll]);

  const handleLoadMore = () => {
    const cutData = propertiesAll.slice(0, loadData + loadData);
    setProperties(cutData);
    if (loadData + loadData >= propertiesAll.length) {
      setBtnFlag(false);
    }
    setLoadData(loadData + 2);
  };

  const [textData, setTextData] = useState({
    property_type: "",
    property_for: "",
    city: "",
  });
  const handleTextData = (e) => {
    const newText = { ...textData };
    newText[e.target.name] = e.target.value;
    setTextData(newText);

    fetch(
      "https://sixtyninethstreet.herokuapp.com/api/findMultipleProperties",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(textData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPropertiesAll(data.data);
      });
  };

  return (
    <>
      <div className="container navSpace mb-5">
        <div className="row">
          {/* Page Heading */}
          <div className="col-md-12">
            <div className="RjpropertiseHEading">
              <h1>Properties List –</h1>
            </div>
          </div>
          {/* Left Side Filters Start */}
          <div className="col-12 col-md-4">
            <div className="propertyColFour">
              <select
                onChange={handleTextData}
                name="property_type"
                className="TypeSelector"
              >
                <option value="flat">Select Type</option>
                <option value="flat">Apartment</option>
                <option value="duplex">Duplex Home</option>
                <option value="showroom">Showroom</option>
                <option value="office">Office Space</option>
                <option value="shop">Shop</option>
              </select>
              <select
                onChange={handleTextData}
                name="property_for"
                className="TypeSelector"
              >
                <option value="sell">Sell / Rent</option>
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </select>
              <select
                onChange={handleTextData}
                name="city"
                className="TypeSelector"
              >
                <option value="dhaka">Region</option>
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="khulna">Khulna</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="coxbazar">Cox's Bazar</option>
                <option value="sylhet">Sylhet</option>
                <option value="gazipur">Gazipur</option>
                <option value="mymensingh">Mymensingh</option>
                <option value="rangpur">Rangpur</option>
              </select>
            </div>
            {/* Latest Listing Start */}
            <div className="LatestListing mb-5">
              <p className="fs-4 fw-bold pb-3">Latest Listing</p>
              {properties.map((property) => {
                return (
                  <div key={property._id} className="LatestListingCards">
                    {/* Image */}
                    <img
                      src={property.image_one}
                      alt=""
                      className="LatestListingImage"
                    />
                    {/* Details */}
                    <div>
                      <p className="LatestListingNames">
                        {property.property_name}
                      </p>
                      <p className="fw-bold fs-5 text-success mb-1">
                        $ {property.price}
                      </p>
                      {/* Icons */}
                      <p className="LatestListingIcons mb-1">
                        <span>
                          {bed}&nbsp;
                          {property.bedroom}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <span>
                          {bath}&nbsp;
                          {property.bathroom}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <span>
                          {objectGroup}&nbsp;
                          {property.property_size}ft<sup>2</sup>
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Latest Listing Ends */}
          </div>
          {/* Left Side Filters Ends */}

          {/* Properties Lists Start */}
          <div className="col-12 col-md-8 ">
            {properties.map((pro) => (
              <Link to={`/spp/${pro._id}`} className="RjPropertiesLInk">
                <div className="card mb-3 RjPropertiseCard">
                  <div className="row g-0">
                    <div className="col-md-4 RjPropertiesImg">
                      <img
                        src={pro.image_one}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-sm-12 col-md-8 pt-2">
                      <div className="card-body">
                        <h5 className="fw-bold">{pro.property_name}</h5>
                        <h6 className="fw-bold mb-2 text-info">
                          $ {pro.price}
                        </h6>
                        <p className="mb-2">
                          <span>
                            {bed} {pro.bedroom}
                          </span>
                          &nbsp; &nbsp; &nbsp; &nbsp;
                          <span>
                            {bath} {pro.bathroom}
                          </span>
                          &nbsp; &nbsp; &nbsp; &nbsp;
                          <span>
                            {objectGroup}
                            {pro.property_size} ft<sup>2</sup>{" "}
                          </span>
                        </p>
                        <p>{pro.property_description.substring(0, 60)}...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {/* Load More Button */}
            {btnFlag && (
              <button
                className="wpresidence_button agent_submit_class mb-3 col-md-4 offset-md-4"
                id="agent_submit"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )}
          </div>
          {/* Properties Lists Start */}
        </div>
      </div>
    </>
  );
};

export default PropertiesList;
