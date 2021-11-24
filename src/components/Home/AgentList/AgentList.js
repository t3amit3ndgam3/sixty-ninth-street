import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../Rabby.css";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nav: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const AgentList = () => {
  const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  const linkend = <FontAwesomeIcon icon={faLinkedin} />;

  const [agent, setAgent] = useState([]);
  useEffect(() => {
    fetch("https://sixtyninethstreet.herokuapp.com/api/getAgent")
      .then((res) => res.json())
      .then((data) => {
        setAgent(data.data);
      });
  }, []);

  return (
    <div className="container pb-5 mb-5 dreamHome_wrapper">
      <div className="row">
        <div className="col-md-12">
          <div className="dreamHomeHeader section_headers">
            <h1>OUR AGENTS</h1>
            <p>
              Get started by choosing from one of our pre-built page templates
              to showcase your properties
            </p>
          </div>
        </div>
        <Slider {...settings}>
          {agent &&
            agent.map((agt) => (
              <div key={agt.key} className="card RJAgentCARD">
                <div className="RjAgentCardImg">
                  <Link to={`/singleAgent/${agt._id}`}>
                    <img
                      src={agt.agent_image}
                      className="imh-fluid card-img-top AgentSlideImg"
                      alt="..."
                    />
                  </Link>
                  <div className="RjAgentIconOver">
                    <a
                      target="_blank"
                      href={agt.agent_facebook}
                      rel="noreferrer"
                    >
                      <span className="RjAgenticon AgentFacebbok">
                        {facebook}
                      </span>
                    </a>
                    <a target="_blank" href={agt.agent_email} rel="noreferrer">
                      <span className="RjAgenticon AgentEmail">{email}</span>
                    </a>
                    <a
                      target="_blank"
                      href={agt.agent_linkend}
                      rel="noreferrer"
                    >
                      <span className="RjAgenticon AgentLinkend">
                        {linkend}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="card-body agent_card_body">
                  <p className="card-text">
                    <span className="fs-6 fw-bold">{agt.agent_name}</span>{" "}
                  </p>
                  <h6>{agt.agent_title}</h6>
                </div>
              </div>
            ))}
          {/* ................................. */}
        </Slider>
      </div>
    </div>
  );
};

export default AgentList;
