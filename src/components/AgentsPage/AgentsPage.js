import React from "react";
import agentImg from "../../images/agentOne.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../Home/Rabby.css";
import { Link } from "react-router-dom";
import sliderOne from "../../images/slider/sliderOne.jpg";
import sliderTwo from "../../images/slider/sliderTwo.jpg";

const AgentsPage = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  const linkend = <FontAwesomeIcon icon={faLinkedin} />;
  const phone = <FontAwesomeIcon icon={faPhoneSquare} />;
  const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;

  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
        className="mb-5"
      >
        <div class="carousel-inner">
          <div class="carousel-item active sliderBlack">
            <img
              src={sliderOne}
              class="d-block w-100 AgentPagesliderImg"
              alt="..."
            />
            <div className="AgentPageTextSlider">
              <h1>Our Trusted Agents</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. .</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={sliderTwo}
              class="d-block w-100 AgentPagesliderImg"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {list.map((agent) => (
            <div className="col-12 col-sm-6 col-md-4 mt-3">
              <div className="BSRSec">
                <a href="" className="RjcardLInk">
                  <div class="card RjcustomCard">
                    <img
                      src={agentImg}
                      class="card-img-top RjagentsCardImg"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Michael Sutther</h5>
                      <span className="RjAgentPageSpan">
                        real estate broker
                      </span>
                      <p class="card-text pt-2 RjAgentPageP">
                        Janet’s knowledge, honesty, integrity, and fairness have
                        been evident throughout her career. In addition
                      </p>
                      <div className="RjAgentsPageIconSection">
                        <div className="RjAgentsLeftIcon">
                          <Link to="">{facebook}</Link>&nbsp;&nbsp;
                          <Link to="">{linkend}</Link>&nbsp;&nbsp;
                          <Link to="">{twitter}</Link>
                        </div>
                        <div className="RjAgentsrighttIcon">
                          <Link to="">{email}</Link>&nbsp;&nbsp;
                          <Link to="">{phone}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;
