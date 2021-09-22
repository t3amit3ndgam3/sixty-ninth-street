import React from "react";
import Flat1 from "../../../images/Flat1.jpg";
import Flat2 from "../../../images/Flat2.jpg";
import Flat3 from "../../../images/Flat3.jpg";
// import Flat4 from "../../../images/Flat4.jpg";
// import Flat5 from "../../../images/Flat5.jpg";
// import Flat6 from "../../../images/Flat6.jpg";
// import Flat7 from "../../../images/Flat7.jpg";
// import Flat8 from "../../../images/Flat8.jpg";
// import Flat9 from "../../../images/Flat9.jpg";
const Properties = () => {
  return (
    <section
      style={{ fontFamily: "Roboto" }}
      className="services-container mt-5"
    >
      <div>
        <h1
          style={{ color: " #ff783d ", fontFamily: "Roboto" }}
          className="text-center"
        >
          Properties
        </h1>
        {/* <h3 className="text-warning text-center mt-5">New Properties</h3> */}
        <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
          <div class="col">
            <div class="card h-100">
              <img src={Flat1} className="card-img-top" alt="" />
              <div class="card-body">
                <h2 class="card-title">$469,000</h2>
                <h5 class="card-text">6 beds || 2 baths || 2436 sqrt</h5>
                <p class="card-text">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora.
                </p>
                <h5 class="card-text">Location: Mirpur</h5>
              </div>
              <div style={{ marginLeft: "15px", marginBottom: "20px" }}>
                <div
                  className="btn"
                  style={{
                    background: "#ff783d",
                    color: "#000",
                    border: "2px soild #ff783d",
                    padding: " 6px 25px",
                    fontFamily: "Roboto",
                  }}
                >
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Flat2} className="card-img-top" alt="" />
              <div class="card-body">
                <h2 class="card-title">$669,000</h2>
                <h5 class="card-text">6 beds || 3 baths || 2936 sqrt</h5>
                <p class="card-text">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora.
                </p>
                <h5 class="card-text">Location: Gulshan</h5>
              </div>
              <div style={{ marginLeft: "15px", marginBottom: "20px" }}>
                <div
                  className="btn"
                  style={{
                    background: "#ff783d",
                    color: "#000",
                    border: "2px soild #ff783d",
                    padding: " 6px 25px",
                    fontFamily: "Roboto",
                  }}
                >
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Flat3} className="card-img-top" alt="" />
              <div class="card-body">
                <h2 class="card-title">$769,000</h2>
                <h5 class="card-text">6 beds || 4 baths || 3436 sqrt</h5>
                <p class="card-text">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora.
                </p>
                <h5 class="card-text">Location: Dhanmondi</h5>
              </div>
              <div style={{ marginLeft: "15px", marginBottom: "20px" }}>
                <div
                  className="btn"
                  style={{
                    background: "#ff783d",
                    color: "#000",
                    border: "2px soild #ff783d",
                    padding: " 6px 25px",
                    fontFamily: "Roboto",
                  }}
                >
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <h3 className="text-warning text-center mt-5">Recent Properties</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
          <div class="col">
            <div class="card h-100">
              <img src={Flat4} className="card-img-top" alt="" />
              <div class="card-body">
                <h2 class="card-title">$469,000</h2>
                <h5 class="card-text">6 beds || 2 baths || 2436 sqrt</h5>
                <p class="card-text">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora.
                </p>
                <h5 class="card-text">Location: Mirpur</h5>
              </div>
              <div style={{ marginLeft: "15px", marginBottom: "20px" }}>
                <div className="btn btn-primary">Buy Now</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Flat5} className="card-img-top" alt="" />
              <div class="card-body">
                <h2 class="card-title">$469,000</h2>
                <h5 class="card-text">6 beds || 2 baths || 2436 sqrt</h5>
                <p class="card-text">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora.
                </p>
                <h5 class="card-text">Location: Mirpur</h5>
              </div>
              <div style={{ marginLeft: "15px", marginBottom: "20px" }}>
                <div className="btn btn-primary">Buy Now</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Flat6} className="card-img-top" alt="" />
              <div class="card-body">
                <h2 class="card-title">$469,000</h2>
                <h5 class="card-text">6 beds || 2 baths || 2436 sqrt</h5>
                <p class="card-text">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora.
                </p>
                <h5 class="card-text">Location: Mirpur</h5>
              </div>
              <div style={{ marginLeft: "15px", marginBottom: "20px" }}>
                <div className="btn btn-primary">Buy Now</div>
              </div>
            </div>
          </div>
          
          
        </div>

        <h3 className="text-warning text-center mt-5">Old Properties</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
          <div class="col">
            <div class="card h-100">
              <img src={Flat7} className="card-img-top" alt="" />
              <div class="card-body">
                <h2 class="card-title">$469,000</h2>
                <h5 class="card-text">6 beds || 2 baths || 2436 sqrt</h5>
                <p class="card-text">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora.
                </p>
                <h5 class="card-text">Location: Mirpur</h5>
              </div>
              <div style={{ marginLeft: "15px", marginBottom: "20px" }}>
                <div className="btn btn-primary">Buy Now</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Flat8} className="card-img-top" alt="" />
              <div class="card-body">
                <h2 class="card-title">$469,000</h2>
                <h5 class="card-text">6 beds || 2 baths || 2436 sqrt</h5>
                <p class="card-text">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora.
                </p>
                <h5 class="card-text">Location: Mirpur</h5>
              </div>
              <div style={{ marginLeft: "15px", marginBottom: "20px" }}>
                <div className="btn btn-primary">Buy Now</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Flat9} className="card-img-top" alt="" />
              <div class="card-body">
                <h2 class="card-title">$469,000</h2>
                <h5 class="card-text">6 beds || 2 baths || 2436 sqrt</h5>
                <p class="card-text">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora.
                </p>
                <h5 class="card-text">Location: Mirpur</h5>
              </div>
              <div style={{ marginLeft: "15px", marginBottom: "20px"}}>
                <div className="btn btn-primary">Buy Now</div>
              </div>
            </div>
          </div> */}

        {/* </div> */}
      </div>
    </section>
  );
};

export default Properties;
