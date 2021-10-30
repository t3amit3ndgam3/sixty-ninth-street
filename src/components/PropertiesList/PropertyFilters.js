import React, { useState } from "react";

const PropertyFilters = () => {
  const [range, setRange] = useState([0]);

  return (
    <div className="propertyColFour">
      {/* <select class="TypeSelector" onChange={handleInput("type")}>
        <option selected>Select Type</option>
        {filteredPropertyType.map((propertyType) => (
                  <option value={propertyType} key={propertyType}>
                    {propertyType}
                  </option>
                  
                ))}
        <option value="flat">Apartment</option>
        <option value="duplex">Duplex Home</option>
        <option value="showroom">Showroom</option>
        <option value="office">Office Space</option>
        <option value="shop">Shop</option>
      </select> */}
      <select class="TypeSelector">
        <option selected>Categories</option>
        {/* {filteredPropertyCategories.map((propertyCategories) => (
          <option value={propertyCategories} key={propertyCategories}>
            {propertyCategories}
          </option>
        ))} */}
      </select>
      <select class="TypeSelector">
        <option selected>States</option>
        {/* {filteredCity.map((city) => (
          <option value={city} key={city}>
            {city}
          </option>
        ))} */}
      </select>
      {/* Range */}
      <div className="propertiesForm typesCount">
        {/* <Range
          step={20}
          min={0}
          className="propertyRange"
          max={1000000}
          values={range}
          onChange={(values) => setRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "90%",
                marginLeft: "20px",
                backgroundColor: "#ccc",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                backgroundColor: "#999",
              }}
            />
          )}
        /> */}
        <p className="propertiesRangeCount">
          $0 &nbsp;&nbsp; - to - &nbsp;&nbsp; {range}
        </p>
      </div>
    </div>
  );
};

export default PropertyFilters;
