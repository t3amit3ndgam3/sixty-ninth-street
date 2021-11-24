import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Property from "../Property/Property.js";
const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("https://sixtyninethstreet.herokuapp.com/api/allProperty")
      .then((res) => res.json())
      .then((data) => setProperties(data.data));
  }, []);
  const sliced = properties.slice(2, 5);

  return (
    <div className="">
      <div className="section_headers">
        <h1>Properties</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5">
          {properties &&
            sliced.map((property) => (
              <Property pro={property} key={property._id}></Property>
            ))}
        </div>
      </div>
      <div className="more_btn">
        <Link to="/feature" className="route_links">
          <button>Load More Listings</button>
        </Link>
      </div>
    </div>
  );
};

export default Properties;
