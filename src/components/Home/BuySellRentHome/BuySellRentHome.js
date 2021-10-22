import React from "react";
import "../Rabby.css";
import buy from "../../../images/BuySellRentHome/buy.JPG";
import sell from "../../../images/BuySellRentHome/sell.JPG";
import rent from "../../../images/BuySellRentHome/rent.JPG";
import { Link } from "react-router-dom";

const BuySellRentHome = () => {
  return (
    <div>
      <div className="container pt-5">
        <div className="row p-5">
          <div className=" col-md-12 RJBuySellRentHeader mb-5">
            <h4 className="text-center">
              Whether you’re buying, selling or renting,
              <br />
              we can help you move forward.
            </h4>
            <p className="RjHeaderDownBar"></p>
          </div>
          <div className="col-12 col-md-4 mt-3">
            <div className="BSRSec">
              <Link to="/properties" className="RjcardLInk">
                <div class="card RjcustomCard">
                  <img src={buy} class="card-img-top RJcardImg" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Buy a Home</h5>
                    <p class="card-text">
                      Find your place with an immersive photo experience and the
                      most listings, including things you won’t find anywhere
                      else.
                    </p>
                    <p class="btn RJcustomcardButton mt-3">Search Homes</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-3">
            <div className="BSRSec">
              <Link to="/sellHome" className="RjcardLInk">
                <div class="card RjcustomCard">
                  <img src={sell} class="card-img-top RJcardImg" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Sell a Home</h5>
                    <p class="card-text">
                      Find your place with an immersive photo experience and the
                      most listings, including things you won’t find anywhere
                      else.
                    </p>
                    <p class="btn RJcustomcardButton mt-3">Choose Options</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-3">
            <div className="BSRSec">
              <Link to="/properties" className="RjcardLInk">
                <div class="card RjcustomCard">
                  <img src={rent} class="card-img-top RJcardImg" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Rent a Home</h5>
                    <p class="card-text">
                      Find your place with an immersive photo experience and the
                      most listings, including things you won’t find anywhere
                      else.
                    </p>
                    <p class="btn RJcustomcardButton mt-3">Find Rentals</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellRentHome;
