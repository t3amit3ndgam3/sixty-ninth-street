import React, { useState } from "react";
import "./UserDashboard";
const Requirement = () => {
  const [inputData, setInputData] = useState({});
  // console.log(inputData);

  const handleInputData = (e) => {
    const newData = { ...inputData };
    newData[e.target.name] = e.target.value;
    setInputData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="dashboard_header">
        <h1>Add New Requirements</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="requirement_header">
          <h5>Property I'm looking for</h5>
        </div>
        <div className="requirement_wrapper">
          <div className="requirement_content_left">
            <div className="select_wrappers">
              <label htmlFor="select_type">Property For:</label>
              <br />
              <select
                name="property_for"
                id="select_type"
                onBlur={handleInputData}
              >
                <option selected>Please Select</option>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="select_wrappers">
              <label htmlFor="select_type">Property Type:</label>
              <br />
              <select name="property_type" onBlur={handleInputData} required>
                <option selected>Please Select</option>
                <option value="flat">Apartment</option>
                <option value="duplex">Duplex Home</option>
                <option value="showroom">Showroom</option>
                <option value="office">Office Space</option>
                <option value="shop">Shop</option>
              </select>
            </div>
            <div className="select_wrappers">
              <label htmlFor="select_type">City:</label>
              <br />
              <select name="city" id="" onBlur={handleInputData}>
                <option selected>Please Select</option>
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
            <div className="select_wrappers">
              <label htmlFor="">Size in Sqft</label>
              <br />
              <input
                type="text"
                name="property_size"
                onBlur={handleInputData}
              />
            </div>
          </div>
          <div className="requirement_content_right">
            <div className="select_wrappers">
              <label htmlFor="">Name:</label>
              <br />

              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                onBlur={handleInputData}
              />
            </div>

            <div className="select_wrappers">
              <label htmlFor="">Email:</label>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                onBlur={handleInputData}
              />
            </div>
            <div className="select_wrappers">
              <label htmlFor="">Mobile no:</label>
              <br />
              <input type="number" name="phone" onBlur={handleInputData} />
            </div>
            <div className="requirement_button">
              <button className="wpresidence_button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Requirement;
