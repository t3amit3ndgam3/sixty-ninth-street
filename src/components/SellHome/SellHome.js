import React, { useEffect, useState } from "react";
import "./SellHome.css";
import sideImage from "../../images/sellHome/fixed.svg";
import house from "../../images/sellHome/Agent_House.svg";
import SellHomeimg from "../../images/sellHome/Sell_My_Home.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const SellHome = () => {

  const right = <FontAwesomeIcon icon={faAngleDoubleRight} />;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Range query
  const [range, setRange] = useState("")

  const handleSelect = (e) => {
    const area = e.target.value;
    const Ranges = area === "Dhaka" ? "10,000 BDT - 40,000 BDT" : area === "Chattogram" ? "5,000 BDT - 20,000 BDT" : area === "Cumilla" ? "8,000 BDT - 24,000 BDT" : area === "Barishal" ? "5,000 BDT - 15,000 BDT" : "";
    setRange(Ranges);
  }


  return (
    <>
      <div className="sellhomeTopClass navSpace s_font">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="sellHomeHead">
                <h1 className="pt-5">Sell your home with confidence</h1>
                <p>
                  Sixty-ninth-street is making it simpler to sell your home and
                  move forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 s_font">
        <div className="row">
          <div className="col-md-8 order-2 order-lg-1">
            <div className="sellHomeDownSection">
              <h2 className="pt-5 mb-3">Sixty-ninth-street offers</h2>
              <h1 className="mb-3">Sell your home directly to 69th-street</h1>
              <p>
                Getting a competitive cash offer from Zillow is an easy path to
                sell your home, with more control and less prepwork. You sell
                your home as-is and get paid with no surprises, while we take
                care of the rest.
              </p>
            </div>
            {/* Selling range checker start */}
            <div className="sellHomeFormSection">
              <h5>See how much 69th-street could pay for your home</h5>
              {/* Select option */}
              <select onClick={handleSelect}>
                <option>Select</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Cumilla</option>
                <option>Barishal</option>
              </select>
              {/* Range details */}
              <p>
                Selling range in this area is: <span className="fs-5 text-danger">
                  {
                    range
                  }
                </span>
              </p>
              <Link to="/">
                Learn more about 69th-street Offers
              </Link>
            </div>
            {/* Selling range checker start */}
          </div>
          <div className="col-md-4 order-1 order-lg-2">
            <div className="">
              <img className="img-fluid" src={sideImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pb-5 s_font">
        <div className="row">
          <div className="col-md-4 mt-5">
            <h4 className="mb-3">Why sell to 69th-street Offers</h4>
            <p>
              {" "}
              <span>{right}</span> Skip staging and showings
            </p>
            <p>
              {" "}
              <span>{right}</span> No repairs to manage
            </p>
            <p>
              {" "}
              <span>{right}</span> Get on-call support from your Zillow Advisor
            </p>
          </div>
          <div className="col-md-4 mt-5">
            <h4 className="mb-3">How to sell to 69th-street</h4>
            <p>
              Request an offer to check your home’s eligibility. You’ll get
              initial numbers and schedule a free evaluation to finalize your
              offer.
            </p>
          </div>
        </div>
      </div>

      <div className="sellHomeTraditionaly pb-5 s_font">
        <div className="container pt-5 ">
          <div className="row">
            <div className="col-md-7 order-2 order-lg-1 mt-5">
              <div className="sellHomeDownSection">
                <h1 className="mb-3">Sell traditionally with an agent</h1>
                <p>
                  When you work with a real estate agent, you'll get selling
                  support at every step, from prepping and listing your home to
                  marketing that gets buyers in the door.
                </p>
              </div>
              <div className="sellHomebtnSection mt-5">
                <button
                  class="wpresidence_button agent_submit_class mb-3"
                  id="agent_submit"
                >
                  Find an Agent
                </button>
                <br />
                <Link to="/">Learn more about 69th-street Offers</Link>
              </div>
            </div>
            <div className="col-md-5 order-1 order-lg-2">
              <div className="sellHomeSideImg2">
                <img className="img-fluid" src={house} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-5">
              <h4 className="mb-3">Why sell to 69th-street Offers</h4>
              <p>
                {" "}
                <span>{right}</span> Skip staging and showings
              </p>
              <p>
                {" "}
                <span>{right}</span> No repairs to manage
              </p>
              <p>
                {" "}
                <span>{right}</span> Get on-call support from your Zillow
                Advisor
              </p>
            </div>
            <div className="col-md-4 mt-5">
              <h4 className="mb-3">How to sell to 69th-street</h4>
              <p>
                Request an offer to check your home’s eligibility. You’ll get
                initial numbers and schedule a free evaluation to finalize your
                offer.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ................................... */}
      <div className="mb-5 s_font">
        <div className="container pt-5 ">
          <div className="row">
            <div className="col-md-7 order-2 order-lg-1 mt-5">
              <div className="sellHomeDownSection">
                <h1 className="mb-3">Sell your home yourself</h1>
                <p>
                  Deciding to sell your home yourself is referred to as
                  for-sale-by-owner (FSBO). The FSBO process is similar to
                  traditional selling, but without the help of a real estate
                  agent. In this case, you’re responsible for the home prep,
                  marketing, showings, and negotiations.
                </p>
              </div>
              <div className="sellHomebtnSection mt-5">
                <button
                  class="wpresidence_button agent_submit_class mb-3"
                  id="agent_submit"
                >
                  Create a Listing
                </button>
                <br />
                <Link to="/">Learn more about FSBO</Link>
              </div>
            </div>
            <div className="col-md-5 order-1 order-lg-2">
              <div className="sellHomeSideImg2">
                <img className="img-fluid" src={SellHomeimg} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-5">
              <h4 className="mb-3">Why sell FSBO</h4>
              <p>
                {" "}
                <span>{right}</span> Avoid paying a listing agent commission
              </p>
              <p>
                {" "}
                <span>{right}</span> Advertise your listing for free on Zillow
              </p>
              <p>
                {" "}
                <span>{right}</span> Flexibility and control from start to
                finish
              </p>
            </div>
            <div className="col-md-4 mt-5">
              <h4 className="mb-3">How to sell FSBO</h4>
              <p>
                When selling yourself, start with home prep, staging, and hiring
                a professional photographer. Once your marketing materials are
                ready, research comparable homes to help price your home. Then,
                create a listing on Zillow. You’ll likely host home showings or
                open houses. Then select an offer, negotiate, accept and close.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellHome;
