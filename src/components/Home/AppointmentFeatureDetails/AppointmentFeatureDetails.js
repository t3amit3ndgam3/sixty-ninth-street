import React from 'react';
import { MDBIcon, MDBRipple } from "mdb-react-ui-kit";

const AppointmentFeatureDetails = (feature) => {
    return (
        <div>
      <div className="container pt-5">
        <div className="row p-3">
          <div className="col-md-12 RJBuySellRentHeader mb-5 text-center">
            <h1 style={{ color: " #ff783d ", fontFamily: "Roboto" }}>
              Properties
            </h1>
          </div>
          <div className="col-md-4 mt-3">
            <div className="BSRSec">
              <a href="" className="RjcardLInk">
                <div
                  class="card RjcustomCard bg-image hover-overlay shadow-1-strong rounded"
                  style={{ maxWidth: "22rem" }}
                  rippleTag="div"
                  rippleColor="light"
                >
                  <img src={feature.image} class="card-img-top RJcardImg" alt="..." />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}>
                      <p className='text-black mb-0'><MDBIcon className="ms-1" icon="location-arrow" size="sm" /> Gulshan,Dhaka</p>
                    </div>
                    
                  </a>

                  <div class="card-body">
                    <h5 class="card-title text-start">{feature.appointmentHeading}</h5>
                    <h6 class="card-title text-start"> ৳ 85,50,000</h6>
                    <p class="card-text text-start">
                      Downtown Frederick hot spot. Top location for local
                      entertainment. All fixtures are included. Liquor license
                      can be included. Price includes 3 leased apartments on the
                      second floor income $2,200 per month.[more]
                    </p>
                    <div
                      className="col-md-12 card-text d-flex justify-content-start"
                      style={{ marginLeft: "5px" }}
                    >
                      <span class="card-text p-2">
                        <MDBIcon className="ms-1" icon="bed" size="sm" /> 3
                      </span>
                      <span class="card-text p-2">
                        <MDBIcon className="ms-1" icon="bath" size="sm" /> 2
                      </span>
                      <span class="card-text p-2">
                        <MDBIcon
                          className="ms-1"
                          icon="angle-right"
                          size="sm"
                        />{" "}
                        1200 sqrt
                      </span>

                      <button
                        className="btn d-flex justify-content-evenly"
                        style={{
                          background: "#ff783d",
                          margin: "10px",
                          padding: "5px",
                        }}
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
                <div
                  class="card RjcustomCard bg-image hover-overlay shadow-1-strong rounded"
                  style={{ maxWidth: "22rem" }}
                  rippleTag="div"
                  rippleColor="light"
                >
                  <img src={feature.Flat2} class="card-img-top RJcardImg" alt="..." />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}>
                      <p className='text-black mb-0'><MDBIcon className="ms-1" icon="location-arrow" size="sm" /> Baridhara,Dhaka</p>
                    </div>
                  </a>
                  <div class="card-body">
                    <h5 class="card-title text-start">Luxury Apartments in Baridhara</h5>
                    <h6 class="card-title text-start"> ৳ 85,50,000</h6>
                    <p class="card-text text-start">
                      Downtown Frederick hot spot. Top location for local
                      entertainment. All fixtures are included. Liquor license
                      can be included. Price includes 3 leased apartments on the
                      second floor income $2,200 per month.[more]
                    </p>
                    <div
                      className="col-md-12 card-text d-flex justify-content-start"
                      style={{ marginLeft: "5px" }}
                    >
                      <span class="card-text p-2">
                        <MDBIcon className="ms-1" icon="bed" size="sm" /> 3
                      </span>
                      <span class="card-text p-2">
                        <MDBIcon className="ms-1" icon="bath" size="sm" /> 2
                      </span>
                      <span class="card-text p-2">
                        <MDBIcon
                          className="ms-1"
                          icon="angle-right"
                          size="sm"
                        />{" "}
                        1200 sqrt
                      </span>

                      <button
                        className="btn d-flex justify-content-evenly"
                        style={{
                          background: "#ff783d",
                          margin: "10px",
                          padding: "5px",
                        }}
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
                <div
                  class="card RjcustomCard bg-image hover-overlay shadow-1-strong rounded"
                  style={{ maxWidth: "22rem" }}
                  rippleTag="div"
                  rippleColor="light"
                >
                  <img src={feature.image} class="card-img-top RJcardImg" alt="..." />
                  <a href="#!">
                  <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}>
                      <p className='text-black mb-0'><MDBIcon className="ms-1" icon="location-arrow" size="sm" /> Banani,Dhaka</p>
                    </div>
                  </a>
                  <div class="card-body">
                    <h5 class="card-title text-start">Luxury Apartments in Banani</h5>
                    <h6 class="card-title text-start"> ৳ 85,50,000</h6>
                    <p class="card-text text-start">
                      Downtown Frederick hot spot. Top location for local
                      entertainment. All fixtures are included. Liquor license
                      can be included. Price includes 3 leased apartments on the
                      second floor income $2,200 per month.[more]
                    </p>
                    <div
                      className="col-md-12 card-text d-flex justify-content-start"
                      style={{ marginLeft: "5px" }}
                    >
                      <span class="card-text p-2">
                        <MDBIcon className="ms-1" icon="bed" size="sm" /> 3
                      </span>
                      <span class="card-text p-2">
                        <MDBIcon className="ms-1" icon="bath" size="sm" /> 2
                      </span>
                      <span class="card-text p-2">
                        <MDBIcon
                          className="ms-1"
                          icon="angle-right"
                          size="sm"
                        />{" "}
                        1200 sqrt
                      </span>

                      <button
                        className="btn d-flex justify-content-evenly"
                        style={{
                          background: "#ff783d",
                          margin: "10px",
                          padding: "5px",
                        }}
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
        <div class="d-flex justify-content-evenly">
          <button type="button" class="btn btn-outline-warning">Load More Listings</button>
        </div>
        
      </div>
    </div>
    );
};

export default AppointmentFeatureDetails;