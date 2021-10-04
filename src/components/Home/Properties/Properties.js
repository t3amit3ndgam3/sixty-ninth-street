import React from "react";
import { MDBBtn, MDBIcon, MDBRipple } from "mdb-react-ui-kit";
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
    <div>
      <div className="container pt-5 ">
        <div className="row p-3">
          <div className=" col-md-12 RJBuySellRentHeader mb-5">
            <h1 className="text-center" style={{ color: "#ff783d" }}>
              Properties
            </h1>
          </div>
          <div className="col-md-4 mt-3">
            <div className="BSRSec">
              <a href="" className="RjcardLInk">
                <div class="card RjcustomCard">
                  <MDBRipple
                    className="bg-image hover-overlay shadow-1-strong rounded"
                    style={{ maxWidth: "22rem" }}
                    rippleTag="div"
                    rippleColor="light"
                  >
                    <img src={Flat1} className="w-100" />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      >
                        <p className="text-black mb-0">
                          <MDBIcon
                            className="ms-1"
                            icon="location-arrow"
                            size="sm"
                          />
                          Baridhara,Dhaka
                        </p>
                      </div>
                    </a>
                  </MDBRipple>
                  <div class="card-body">
                    <h5 class="card-title text-start">
                      Luxury Apartments in Baridhara
                    </h5>
                    <h6 class="card-title text-start"> ৳ 85,50,000</h6>
                    <p class="card-text text-start">
                      Find your place with an immersive photo experience and the
                      most listings, including things you won’t find anywhere
                      else.[more]
                    </p>
                    <div className="col-md-12 text-start">
                      <span style={{ marginRight: "10px" }}>
                        <MDBIcon className="ms-1" icon="bed" size="sm" /> 3
                      </span>
                      <span style={{ marginRight: "10px" }}>
                        <MDBIcon className="ms-1" icon="bath" size="sm" /> 3
                      </span>
                      <span style={{ marginRight: "10px" }}>
                        <MDBIcon
                          className="ms-1"
                          icon="angle-right"
                          size="sm"
                        />{" "}
                        1200 Sqrt
                      </span>
                      <button
                        className="btn position-absolute"
                        style={{ backgroundColor: "#ff783d" }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="BSRSec">
              <a href="" className="RjcardLInk">
                <div class="card RjcustomCard">
                  <MDBRipple
                    className="bg-image hover-overlay shadow-1-strong rounded"
                    style={{ maxWidth: "22rem" }}
                    rippleTag="div"
                    rippleColor="light"
                  >
                    <img src={Flat1} className="w-100" />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      >
                        <p className="text-black mb-0">
                          <MDBIcon
                            className="ms-1"
                            icon="location-arrow"
                            size="sm"
                          />
                          Gulshan,Dhaka
                        </p>
                      </div>
                    </a>
                  </MDBRipple>
                  <div class="card-body">
                    <h5 class="card-title text-start">
                      Luxury Apartments in Gulshan
                    </h5>
                    <h6 class="card-title text-start"> ৳ 85,50,000</h6>
                    <p class="card-text text-start">
                      Find your place with an immersive photo experience and the
                      most listings, including things you won’t find anywhere
                      else.[more]
                    </p>
                    <div className="col-md-12 text-start">
                      <span style={{ marginRight: "10px" }}>
                        <MDBIcon className="ms-1" icon="bed" size="sm" /> 3
                      </span>
                      <span style={{ marginRight: "10px" }}>
                        <MDBIcon className="ms-1" icon="bath" size="sm" /> 3
                      </span>
                      <span style={{ marginRight: "10px" }}>
                        <MDBIcon
                          className="ms-1"
                          icon="angle-right"
                          size="sm"
                        />{" "}
                        1200 Sqrt
                      </span>
                      <button
                        className="btn position-absolute"
                        style={{ backgroundColor: "#ff783d" }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="BSRSec">
              <a href="" className="RjcardLInk">
                <div class="card RjcustomCard">
                  <MDBRipple
                    className="bg-image hover-overlay shadow-1-strong rounded"
                    style={{ maxWidth: "22rem" }}
                    rippleTag="div"
                    rippleColor="light"
                  >
                    <img src={Flat3} className="w-100" />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      >
                        <p className="text-black mb-0">
                          <MDBIcon
                            className="ms-1"
                            icon="location-arrow"
                            size="sm"
                          />
                          Banani,Dhaka
                        </p>
                      </div>
                    </a>
                  </MDBRipple>
                  <div class="card-body">
                    <h5 class="card-title text-start">
                      Luxury Apartments in Banani
                    </h5>
                    <h6 class="card-title text-start"> ৳ 85,50,000</h6>
                    <p class="card-text text-start">
                      Find your place with an immersive photo experience and the
                      most listings, including things you won’t find anywhere
                      else.[more]
                    </p>
                    <div className="col-md-12 text-start">
                      <span style={{ marginRight: "10px" }}>
                        <MDBIcon className="ms-1" icon="bed" size="sm" /> 3
                      </span>
                      <span style={{ marginRight: "10px" }}>
                        <MDBIcon className="ms-1" icon="bath" size="sm" /> 3
                      </span>
                      <span style={{ marginRight: "10px" }}>
                        <MDBIcon
                          className="ms-1"
                          icon="angle-right"
                          size="sm"
                        />{" "}
                        1200 Sqrt
                      </span>
                      <button
                        className="btn position-absolute"
                        style={{ backgroundColor: "#ff783d" }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <MDBBtn style={{backgroundColor:'#ff783d'}} className="position-absolute start-50 translate-middle mt-5">Load More Appointment</MDBBtn>
        
      </div>
    </div>
  );
};

export default Properties;
