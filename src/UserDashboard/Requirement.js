import React from "react";

const Requirement = () => {
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
              <select name="" id="select_type">
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="select_wrappers">
              <label htmlFor="select_type">Property Type:</label>
              <br />
              <select name="" id="">
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
              <select name="" id="">
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
              <input type="text" name="" />
            </div>
          </div>
          <div className="requirement_content_right">
            <div className="select_wrappers">
              <label htmlFor="">Name:</label>
              <br />
              <input type="text" name="name" />
            </div>
            <div className="select_wrappers">
              <label htmlFor="">Email:</label>
              <br />
              <input type="email" name="email" />
            </div>
            <div className="select_wrappers">
              <label htmlFor="">Phone:</label>
              <br />
              <input type="number" name="phone" />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Requirement;
